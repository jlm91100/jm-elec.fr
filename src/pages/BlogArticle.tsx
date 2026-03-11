import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { blogArticles } from "@/content/blog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/blog" replace />;

  const otherArticles = blogArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <Layout>
      <SEOHead title={article.metaTitle} description={article.metaDescription} />
      <JsonLd
        faqItems={article.faq}
        breadcrumbs={[
          { name: "Accueil", url: "https://jm-elec.fr" },
          { name: "Blog", url: "https://jm-elec.fr/blog" },
          { name: article.title, url: `https://jm-elec.fr/blog/${article.slug}` },
        ]}
      />

      <div className="wide-container pt-[100px] pb-20">
        <Breadcrumbs items={[{ label: "Blog", to: "/blog" }, { label: article.title }]} />

        <article className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{article.category}</Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-heading font-bold mb-8">{article.title}</h1>

          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            {article.content.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>').replace(/\n/g, '<br/>') }} />
            ))}
          </div>

          {article.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-heading font-semibold mb-4">Questions fréquentes</h2>
              <Accordion type="single" collapsible className="w-full">
                {article.faq.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-sm text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </article>

        {otherArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-heading font-semibold mb-6">À lire aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherArticles.map((a) => (
                <Link
                  key={a.slug}
                  to={`/blog/${a.slug}`}
                  className="group p-5 bg-card border border-border rounded-xl hover:border-cta/40 transition-all"
                >
                  <Badge variant="secondary" className="text-[10px] mb-2">{a.category}</Badge>
                  <h3 className="text-sm font-semibold group-hover:text-cta transition-colors mb-1">{a.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs text-cta font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Lire <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16">
          <CTASection />
        </div>
      </div>
    </Layout>
  );
}
