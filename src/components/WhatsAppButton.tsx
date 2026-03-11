import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/33767973848?text=Bonjour%2C%20je%20souhaite%20un%20renseignement%20ou%20un%20devis."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="fixed bottom-20 md:bottom-6 right-4 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white rounded-full shadow-lg hover:shadow-xl transition-all group"
    >
      <span className="w-14 h-14 flex items-center justify-center">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="hidden md:inline pr-5 text-sm font-medium max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-300">
        WhatsApp
      </span>
    </a>
  );
}
