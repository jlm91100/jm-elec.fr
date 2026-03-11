import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm text-muted-foreground mb-8">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link to="/" className="hover:text-cta transition-colors">Accueil</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight className="h-3 w-3" />
            {item.to ? (
              <Link to={item.to} className="hover:text-cta transition-colors">{item.label}</Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}