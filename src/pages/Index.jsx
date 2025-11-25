import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "@/assets/logo-gradient.jpeg";

const Index = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    toast({
      title: "Produto removido",
      description: "Item removido do carrinho.",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout em desenvolvimento",
      description: "Sistema de pagamento será implementado em breve!",
    });
  };

  const handleCheckoutWhatsApp = () => {
    const message = cartItems
      .map(
        (item) =>
          `${item.name} - Qtd: ${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`
      )
      .join("%0A");

    const total = cartItems
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);

    const whatsappMessage = `Olá! Gostaria de finalizar meu pedido:%0A%0A${message}%0A%0ATotal: R$ ${total}`;

    window.open(
      `https://wa.me/5585981702730?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const topProducts = products.filter((p) => p.category === "tops");
  const leggingProducts = products.filter((p) => p.category === "legging");
  const setProducts = products.filter((p) => p.category === "sets");
  


  return (
    <div className="min-h-screen bg-transparent">
      <Header
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        onCheckoutWhatsApp={handleCheckoutWhatsApp}
      />

      {/* HERO SECTION CORRIGIDA */}
      <section
        className="relative min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden 
                   bg-gradient-to-br from-[hsl(185,70%,97%)] via-[hsl(320,60%,97%)] to-[hsl(200,70%,98%)]"
      >
        {/* Bolhas suaves */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute w-[280px] h-[280px] bg-[hsl(350,70%,90%)] rounded-full blur-3xl top-10 left-10" />
          <div className="absolute w-[260px] h-[260px] bg-[hsl(195,75%,92%)] rounded-full blur-3xl top-20 right-10" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img
            src={logo}
            alt="HEALF"
            className="w-28 h-28 mx-auto mb-6 rounded-full shadow-lg"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            HEALF 
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Roupas fitness que combinam estilo, conforto e performance para mulheres que não abrem mão de qualidade
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8"
            >
              <a href="#products">Ver Produtos</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 px-8"
            >
              <a
                href="https://www.instagram.com/healf_fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Seguir no Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Nossa Coleção</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha entre tops, leggings e conjuntos completos. Todas as peças com tamanhos de PP a GG e diversas opções de cores.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12 bg-muted">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="tops">Tops</TabsTrigger>
            <TabsTrigger value="legging">Leggings</TabsTrigger>
            <TabsTrigger value="sets">Conjuntos</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tops" id="tops">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {topProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="legging" id="legging">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {leggingProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sets" id="sets">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {setProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* FOOTER */}
      <footer className="bg-accent text-accent-foreground py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <img
            src={logo}
            alt="HEALF"
            className="w-20 h-20 mx-auto mb-4 rounded-full"
          />
          <h3 className="text-2xl font-bold mb-4">HEALF</h3>
          <p className="mb-6 text-accent-foreground/80">
            Vista-se com confiança. Treine com estilo.
          </p>
          <div className="flex gap-4 justify-center mb-6">
            <Button
              variant="outline"
              asChild
              className="border-accent-foreground/20 hover:bg-accent-foreground/10"
            >
              <a
                href="https://www.instagram.com/healf_fit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                Instagram
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-accent-foreground/20 hover:bg-accent-foreground/10"
            >
              <a
                href="https://wa.me/5585981702730"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                WhatsApp
              </a>
            </Button>
          </div>
          <p className="text-sm text-accent-foreground/60">
            © 2025 HEALF. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
