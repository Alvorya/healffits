import topTealStudio from "@/assets/products/top-teal-studio.jpg";
import topTeal1 from "@/assets/products/top-teal-1.jpg";
import topBlackStudio from "@/assets/products/top-black-studio.jpg";
import topBlack1 from "@/assets/products/top-black-1.jpg";
import topBeigeStudio from "@/assets/products/top-beige-studio.jpg";
import topWhiteStudio from "@/assets/products/top-white-studio.jpg";
import topBlueStudio from "@/assets/products/top-blue-studio.jpg";
import topCoralStudio from "@/assets/products/top-coral-studio.jpg";
import topLavenderStudio from "@/assets/products/top-lavender-studio.jpg";
import topYellowStudio from "@/assets/products/top-yellow-studio.jpg";
import topHotPinkStudio from "@/assets/products/top-hotpink-studio.jpg";
import topNavyStudio from "@/assets/products/top-navy-studio.jpg";
import topMintStudio from "@/assets/products/top-mint-studio.jpg";
import topBurgundyStudio from "@/assets/products/top-burgundy-studio.jpg";
import topSageStudio from "@/assets/products/top-sage-studio.jpg";
import topDustyRoseStudio from "@/assets/products/top-dustyrose-studio.jpg";
import topCharcoalStudio from "@/assets/products/top-charcoal-studio.jpg";
import bottomBrownStudio from "@/assets/products/bottom-brown-studio.jpg";
import bottomBrown1 from "@/assets/products/bottom-brown-1.jpg";
import bottomTealStudio from "@/assets/products/bottom-teal-studio.jpg";
import bottomTeal1 from "@/assets/products/bottom-teal-1.jpg";
import bottomOliveStudio from "@/assets/products/bottom-olive-studio.jpg";
import bottomDustyPinkStudio from "@/assets/products/bottom-dustypink-studio.jpg";
import bottomGraphiteStudio from "@/assets/products/bottom-graphite-studio.jpg";
import bottomLimeStudio from "@/assets/products/bottom-lime-studio.jpg";
import bottomMagentaStudio from "@/assets/products/bottom-magenta-studio.jpg";
import bottomEmeraldStudio from "@/assets/products/bottom-emerald-studio.jpg";
import bottomOrangeStudio from "@/assets/products/bottom-orange-studio.jpg";
import bottomVioletStudio from "@/assets/products/bottom-violet-studio.jpg";
import setTealStudio from "@/assets/products/set-teal-studio.jpg";
import setCoralStudio from "@/assets/products/set-coral-studio.jpg";
import setLavenderStudio from "@/assets/products/set-lavender-studio.jpg";
import setMintStudio from "@/assets/products/set-mint-studio.jpg";
import setNavyStudio from "@/assets/products/set-navy-studio.jpg";
import setSageStudio from "@/assets/products/set-sage-studio.jpg";
import setDustyRoseStudio from "@/assets/products/set-dustyrose-studio.jpg";

export const products = [
  // TOPS
  {
    id: "top-1",
    name: "Top Seamless Teal",
    price: 129.90,
    image: topTeal1,
    category: "tops",
    colors: ["Azul Teal", "Preto", "Bege"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top esportivo com tecnologia seamless para máximo conforto",
    colorImages: {
      "Azul Teal": topTeal1,
      "Preto": topBlack1,
      "Bege": topBeigeStudio,
    },
  },
  {
    id: "top-2",
    name: "Top Halter Black Premium",
    price: 139.90,
    image: topBlack1,
    category: "tops",
    colors: ["Preto", "Chocolate", "Azul"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top halter com suporte premium e design elegante",
    colorImages: {
      "Preto": topBlack1,
      "Chocolate": topBeigeStudio,
      "Azul": topTeal1,
    },
  },
  {
    id: "top-3",
    name: "Top Cropped Essential",
    price: 119.90,
    image: topBeigeStudio,
    category: "tops",
    colors: ["Bege", "Preto", "Branco", "Chocolate"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top cropped básico essencial para qualquer treino",
  },
  {
    id: "top-4",
    name: "Top Performance Azul",
    price: 149.90,
    image: topBlueStudio,
    category: "tops",
    colors: ["Azul Navy", "Preto", "Bege"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top com proteção UV e tecido respirável de alta performance",
  },
  {
    id: "top-5",
    name: "Top Fitness Branco Essential",
    price: 99.90,
    image: topWhiteStudio,
    category: "tops",
    colors: ["Branco", "Preto", "Chocolate", "Bege"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top básico versátil para diversos tipos de treino",
  },

  // BOTTOMS
  {
    id: "bottom-1",
    name: "Legging Chocolate Premium",
    price: 179.90,
    image: bottomBrown1,
    category: "legging",
    colors: ["Chocolate", "Preto", "Azul"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Legging de alta compressão com cintura alta modeladora",
    colorImages: {
      "Chocolate": bottomBrown1,
      "Preto": bottomGraphiteStudio,
      "Azul": bottomTeal1,
    },
  },
  {
    id: "bottom-2",
    name: "Legging Teal com Recortes",
    price: 189.90,
    image: bottomTeal1,
    category: "legging",
    colors: ["Azul Teal", "Preto", "Bege"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Legging com recortes em mesh para ventilação extra",
    colorImages: {
      "Azul Teal": bottomTeal1,
      "Preto": bottomGraphiteStudio,
      "Bege": bottomDustyPinkStudio,
    },
  },
  {
    id: "bottom-3",
    name: "Legging Básica Essential",
    price: 159.90,
    image: bottomBrownStudio,
    category: "legging",
    colors: ["Chocolate", "Preto", "Teal", "Bege"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Legging essencial de alta qualidade e durabilidade",
  },
  {
    id: "bottom-4",
    name: "Short Ciclista Performance",
    price: 129.90,
    image: bottomTealStudio,
    category: "legging",
    colors: ["Teal", "Preto", "Chocolate"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Short ciclista com compressão moderada",
  },
  {
    id: "bottom-5",
    name: "Legging Seamless Ultra",
    price: 199.90,
    image: bottomBrownStudio,
    category: "legging",
    colors: ["Chocolate", "Preto", "Azul", "Bege"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Legging seamless de última geração, sem costura",
  },

  // SETS
  {
    id: "set-1",
    name: "Conjunto Teal Complete",
    price: 289.90,
    image: setTealStudio,
    category: "sets",
    colors: ["Azul Teal", "Preto", "Chocolate"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Conjunto completo: top + legging em teal premium",
  },
  {
    id: "set-2",
    name: "Conjunto Black Power",
    price: 299.90,
    image: topBlackStudio,
    category: "sets",
    colors: ["Preto", "Chocolate", "Azul"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Conjunto all black elegante e versátil",
  },
  {
    id: "set-3",
    name: "Conjunto Chocolate Luxe",
    price: 319.90,
    image: bottomBrownStudio,
    category: "sets",
    colors: ["Chocolate", "Preto", "Bege"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Conjunto premium em tons terrosos",
  },
  {
    id: "set-4",
    name: "Conjunto Essential Starter",
    price: 259.90,
    image: topBeigeStudio,
    category: "sets",
    colors: ["Bege", "Preto", "Chocolate", "Teal"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Conjunto iniciante perfeito para começar a treinar",
  },
  {
    id: "set-5",
    name: "Conjunto Performance Pro",
    price: 349.90,
    image: topBlueStudio,
    category: "sets",
    colors: ["Azul Navy", "Preto", "Chocolate"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Conjunto profissional com tecnologia avançada",
  },
  
  // NOVOS PRODUTOS - CORES VIBRANTES
  {
    id: "top-6",
    name: "Top Seamless Coral",
    price: 139.90,
    image: topCoralStudio,
    category: "tops",
    colors: ["Coral", "Rosa", "Laranja"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top coral vibrante com logo HEALF em destaque",
  },
  {
    id: "top-7",
    name: "Top Halter Lavanda",
    price: 149.90,
    image: topLavenderStudio,
    category: "tops",
    colors: ["Lavanda", "Lilás", "Roxo"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top halter em lavanda suave com tecnologia premium",
  },
  {
    id: "top-8",
    name: "Top Performance Yellow",
    price: 139.90,
    image: topYellowStudio,
    category: "tops",
    colors: ["Amarelo Neon", "Verde Limão", "Laranja"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top amarelo vibrante para treinos de alta energia",
  },
  {
    id: "top-9",
    name: "Top Seamless Hot Pink",
    price: 149.90,
    image: topHotPinkStudio,
    category: "tops",
    colors: ["Rosa Pink", "Magenta", "Coral"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top hot pink com tecnologia seamless e logo HEALF",
  },
  {
    id: "bottom-6",
    name: "Legging Lime Green Power",
    price: 199.90,
    image: bottomLimeStudio,
    category: "legging",
    colors: ["Verde Limão", "Amarelo Neon", "Teal"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Legging verde limão de alta compressão com logo HEALF",
  },
  {
    id: "bottom-7",
    name: "Legging Magenta Premium",
    price: 189.90,
    image: bottomMagentaStudio,
    category: "legging",
    colors: ["Magenta", "Rosa Pink", "Roxo"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Legging magenta vibrante com cintura alta modeladora",
  },
  {
    id: "set-6",
    name: "Conjunto Coral Energy",
    price: 319.90,
    image: setCoralStudio,
    category: "sets",
    colors: ["Coral", "Rosa", "Laranja"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Conjunto completo coral: top + legging com logo HEALF",
  },
  {
    id: "set-7",
    name: "Conjunto Lavanda Dream",
    price: 329.90,
    image: setLavenderStudio,
    category: "sets",
    colors: ["Lavanda", "Lilás", "Roxo"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Conjunto lavanda suave e elegante para todos os treinos",
  },
  {
    id: "top-10",
    name: "Top Seamless Navy Blue",
    price: 149.90,
    image: topNavyStudio,
    category: "tops",
    colors: ["Azul Navy", "Azul Royal", "Turquesa"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top navy azul profundo com suporte premium e logo HEALF",
  },
  {
    id: "top-11",
    name: "Top Performance Mint",
    price: 139.90,
    image: topMintStudio,
    category: "tops",
    colors: ["Menta", "Verde Água", "Teal"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top mint refrescante com tecnologia de respiração avançada",
  },
  {
    id: "top-12",
    name: "Top Halter Burgundy",
    price: 159.90,
    image: topBurgundyStudio,
    category: "tops",
    colors: ["Vinho", "Bordô", "Marsala"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top burgundy elegante com suporte máximo e logo HEALF",
  },
  {
    id: "bottom-8",
    name: "Legging Emerald Power",
    price: 209.90,
    image: bottomEmeraldStudio,
    category: "legging",
    colors: ["Esmeralda", "Verde Escuro", "Teal"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Legging verde esmeralda de alta compressão com logo HEALF",
  },
  {
    id: "bottom-9",
    name: "Legging Orange Sunset",
    price: 189.90,
    image: bottomOrangeStudio,
    category: "legging",
    colors: ["Laranja", "Coral", "Pêssego"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Legging laranja vibrante com cintura alta modeladora e logo HEALF",
  },
  {
    id: "bottom-10",
    name: "Legging Violet Dream",
    price: 199.90,
    image: bottomVioletStudio,
    category: "legging",
    colors: ["Violeta", "Roxo", "Lilás"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Legging violet com compressão premium e logo HEALF",
  },
  {
    id: "set-8",
    name: "Conjunto Mint Fresh",
    price: 329.90,
    image: setMintStudio,
    category: "sets",
    colors: ["Menta", "Verde Água", "Teal"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Conjunto mint refrescante: top + legging com logo HEALF",
  },
  {
    id: "set-9",
    name: "Conjunto Navy Elite",
    price: 349.90,
    image: setNavyStudio,
    category: "sets",
    colors: ["Azul Navy", "Azul Royal", "Preto"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Conjunto navy elegante e sofisticado com logo HEALF",
  },
  
  // NOVOS PRODUTOS EXCLUSIVOS 2025
  // TOPS EXCLUSIVOS
  {
    id: "top-13",
    name: "Top Cropped Sage Green",
    price: 139.90,
    image: topSageStudio,
    category: "tops",
    colors: ["Verde Sage", "Menta", "Oliva"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top sage green tendência com suporte médio e logo HEALF",
  },
  {
    id: "top-14",
    name: "Top Sports Bra Dusty Rose",
    price: 149.90,
    image: topDustyRoseStudio,
    category: "tops",
    colors: ["Rosa Nude", "Pêssego", "Bege Rosado"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top dusty rose delicado com alta performance",
  },
  {
    id: "top-15",
    name: "Top Halter Charcoal Gray",
    price: 159.90,
    image: topCharcoalStudio,
    category: "tops",
    colors: ["Cinza Chumbo", "Grafite", "Preto"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Top charcoal minimalista com suporte máximo e logo HEALF",
  },
  
  // BOTTOMS EXCLUSIVOS
  {
    id: "bottom-11",
    name: "Legging Olive Green Essential",
    price: 199.90,
    image: bottomOliveStudio,
    category: "legging",
    colors: ["Verde Oliva", "Musgo", "Caqui"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Legging olive green de alta compressão com logo HEALF",
  },
  {
    id: "bottom-12",
    name: "Legging Dusty Pink Soft",
    price: 189.90,
    image: bottomDustyPinkStudio,
    category: "legging",
    colors: ["Rosa Nude", "Pêssego", "Bege Rosado"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Legging dusty pink ultra confortável com logo HEALF",
  },
  {
    id: "bottom-13",
    name: "Legging Graphite Pro",
    price: 209.90,
    image: bottomGraphiteStudio,
    category: "legging",
    colors: ["Grafite", "Cinza Escuro", "Preto"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Legging graphite de compressão premium com logo HEALF",
  },
  
  // SETS EXCLUSIVOS
  {
    id: "set-10",
    name: "Conjunto Sage Harmony",
    price: 339.90,
    image: setSageStudio,
    category: "sets",
    colors: ["Verde Sage", "Menta", "Oliva"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Conjunto sage green: top + legging com logo HEALF",
  },
  {
    id: "set-11",
    name: "Conjunto Dusty Rose Elegance",
    price: 349.90,
    image: setDustyRoseStudio,
    category: "sets",
    colors: ["Rosa Nude", "Pêssego", "Bege Rosado"],
    sizes: ["PP", "P", "M", "G", "GG"],
    description: "Conjunto dusty rose premium: top + legging com logo HEALF",
  },
];
