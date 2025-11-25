import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

export const ShoppingCartComponent = ({
  items,
  onRemoveItem,
  onCheckout,
  onCheckoutWhatsApp,
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative border-border hover:bg-muted">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <Badge
              variant="default"
              className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-secondary text-secondary-foreground"
            >
              {itemCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Carrinho de Compras</SheetTitle>
          <SheetDescription>
            {itemCount === 0
              ? "Seu carrinho está vazio"
              : `${itemCount} ${itemCount === 1 ? "item" : "itens"} no carrinho`}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <ShoppingCart className="mx-auto h-12 w-12 mb-4 opacity-50" />
              <p>Adicione produtos ao seu carrinho</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 max-h-[50vh] overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 border border-border rounded-lg bg-card"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Quantidade: {item.quantity}
                      </p>
                      <p className="font-bold text-secondary">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-secondary">
                    R$ {total.toFixed(2)}
                  </span>
                </div>
                <div className="space-y-3">
                  <Button
                    onClick={onCheckoutWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                    size="lg"
                  >
                    Finalizar via WhatsApp
                  </Button>
                  <Button
                    onClick={onCheckout}
                    variant="outline"
                    className="w-full"
                    size="lg"
                  >
                    Finalizar no Site
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
