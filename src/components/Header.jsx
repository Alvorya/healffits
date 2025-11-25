import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShoppingCartComponent } from "./ShoppingCart";
import logo from "@/assets/logo-gradient.jpeg";

export const Header = ({
  cartItems,
  onRemoveItem,
  onCheckout,
  onCheckoutWhatsApp,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO + NOME */}
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="HEALF" 
            translate="no"
            className="h-10 w-10 rounded-full object-cover" 
          />
          <span 
            translate="no"
            className="text-2xl font-bold text-foreground tracking-wider"
          >
            HEALF
          </span>
        </div>

        {/* REMOVEI O MENU COMO VOCÊ QUIS */}
        {/* <nav className="hidden md:flex items-center gap-6">
          ...
        </nav> */}

        {/* ÍCONES */}
        <div className="flex items-center gap-3">
          {/* Instagram */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-muted text-black"  // deixa ícone escuro
          >
            <a
              href="https://www.instagram.com/healf_fit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </Button>

          {/* Carrinho */}
          <ShoppingCartComponent
            items={cartItems}
            onRemoveItem={onRemoveItem}
            onCheckout={onCheckout}
            onCheckoutWhatsApp={onCheckoutWhatsApp}
          />
        </div>
      </div>
    </header>
  );
};
