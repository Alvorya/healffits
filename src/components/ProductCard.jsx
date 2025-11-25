import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const ProductCard = ({ product, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || null);
  
  // Imagem atual baseada na cor selecionada
  const currentImage = selectedColor && product.colorImages?.[selectedColor] 
    ? product.colorImages[selectedColor] 
    : product.image;

  const colorToClass = (c) => {
    const k = c.toLowerCase();
    if (k.includes("teal")) return "bg-[hsl(185,70%,55%)]";
    if (k.includes("navy") || k.includes("azul")) return "bg-[hsl(220,70%,50%)]";
    if (k.includes("coral") || k.includes("laranja") || k.includes("pêssego")) return "bg-[hsl(15,80%,65%)]";
    if (k.includes("pink") || k.includes("rosa") || k.includes("magenta")) return "bg-[hsl(330,85%,60%)]";
    if (k.includes("lavanda") || k.includes("lil") || k.includes("violet") || k.includes("roxo")) return "bg-[hsl(270,60%,65%)]";
    if (k.includes("amarelo")) return "bg-[hsl(55,95%,55%)]";
    if (k.includes("limão") || k.includes("lime") || k.includes("menta") || k.includes("mint")) return "bg-[hsl(160,60%,65%)]";
    if (k.includes("esmeralda") || k.includes("verde")) return "bg-[hsl(155,70%,45%)]";
    if (k.includes("vinho") || k.includes("burgundy") || k.includes("bordô") || k.includes("marsala")) return "bg-[hsl(350,60%,45%)]";
    if (k.includes("preto")) return "bg-[hsl(0,0%,10%)]";
    if (k.includes("branco")) return "bg-[hsl(0,0%,96%)] border";
    if (k.includes("bege")) return "bg-[hsl(30,30%,85%)]";
    if (k.includes("chocolate")) return "bg-[hsl(25,30%,40%)]";
    return "bg-[hsl(185,30%,80%)]";
  };

  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-card)] transition-[var(--transition-smooth)]">
      <div className="relative overflow-hidden aspect-[4/5] bg-white">
        <img
          src={currentImage}
          alt={`${product.name} - ${selectedColor || ''}`}
          className="w-full h-full object-contain group-hover:scale-105 transition-[var(--transition-smooth)]"
        />
        {product.colors.length > 1 && (
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
              {product.colors.length} cores
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-foreground">{product.name}</h3>
        <p className="text-2xl font-bold text-secondary mb-2">
          R$ {product.price.toFixed(2)}
        </p>
        <div className="flex gap-2 flex-wrap mb-2">
          {product.sizes.map((size) => (
            <Badge key={size} variant="outline" className="text-xs">
              {size}
            </Badge>
          ))}
        </div>
        {/* Seletor de cores abaixo da foto */}
        {product.colors?.length > 0 && (
          <div className="flex items-center gap-2 mt-2">
            {product.colors.map((c) => (
              <button
                key={c}
                aria-label={`Cor ${c}`}
                className={cn(
                  "size-5 rounded-full border border-border transition-transform",
                  colorToClass(c),
                  selectedColor === c ? "ring-2 ring-primary scale-110" : "hover:scale-110 hover:ring-2 hover:ring-primary/50"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedColor(c);
                }}
                title={c}
              />
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};
