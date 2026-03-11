import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogArticles } from "@/content/blog";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function Blog() {
  return (
    <Layout>
      <SEOHead
        title="Blog — Conseils électricité, normes et aides | JM-ELEC 91"
        description="Articles conseils sur l'électricité domestique : normes NFC 15-100, aides IRVE 2025, tableau vétuste, prix rénovation. Par votre électricien en Essonne."
      />
      <div className="wide-container pt-[100px] pb-20">
        <Breadcrumbs items={[{ label: "Blog" }]} />
        <div className="text-center mb-12">
          <h1 className="mb-3">Conseils & Actualités</h1>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Guides pratiques, réglementation et conseils d'un électricien professionnel pour vos projets électriques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group bg-card border border-border rounded-xl p-6 hover:border-cta/40 hover:shadow-lg transition-all flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary" className="text-[10px]">{article.category}</Badge>
                <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {article.readTime}
                </span>
              </div>
              <h2 className="text-lg font-heading font-semibold mb-2 group-hover:text-cta transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{article.excerpt}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <span className="text-sm text-cta font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Lire <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
