import { Product, Occasion, Testimonial, InstagramPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'bolo-para-festa-azul',
    name: 'Bolo para Festa Azul Royal',
    description: 'Bolo com cobertura branca aveludada, acabamento em rosetas de chantininho azul royal no topo e base estrelada.',
    category: 'bolos_festa',
    price: 150.00,
    priceUnit: 'kg',
    image: '/products/bolo-azul.jpg',
    featured: true,
    tags: ['Azul Royal', 'Chantininho', 'Artesanal'],
  },
  {
    id: 'bolo-para-festa-perolas-azuis',
    name: 'Bolo para Festa Azul Sereno com Pérolas',
    description: 'Bolo com acabamento texturizado, coroa de rosetas azul bebê finalizadas com pérolas douradas comestíveis.',
    category: 'bolos_festa',
    price: 160.00,
    priceUnit: 'kg',
    image: '/products/bolo-perolas-azul.jpg',
    featured: true,
    tags: ['Pérolas Douradas', 'Azul Bebê', 'Delicado'],
  },
  {
    id: 'bolo-para-festa-espiral-rosa',
    name: 'Bolo para Festa Espiral Rosa',
    description: 'Bolo com topo trabalhado em espiral rosa suave decorado com pérolas prateadas e acabamento refinado na base.',
    category: 'bolos_festa',
    price: 150.00,
    priceUnit: 'kg',
    image: '/products/bolo-espiral-rosa.png',
    featured: false,
    tags: ['Espiral Rosa', 'Pérolas Prata', 'Feminino'],
  },
  {
    id: 'bolo-para-festa-brasil',
    name: 'Bolo para Festa Temático Brasil',
    description: 'Bolo em degradê amarelo e azul com detalhes temáticos de futebol, estrelas decorativas e topo comemorativo.',
    category: 'bolos_festa',
    price: 170.00,
    priceUnit: 'kg',
    image: '/products/bolo-brasil.png',
    featured: true,
    tags: ['Temático', 'Futebol', 'Brasil'],
  },
  {
    id: 'bolo-para-festa-flamingo',
    name: 'Bolo para Festa Flamingo & Flores',
    description: 'Bolo com base em degradê rosé, rosetas delicadas no topo com pérolas e topo decorativo de flamingo comemorativo.',
    category: 'bolos_festa',
    price: 175.00,
    priceUnit: 'kg',
    image: '/products/bolo-flamingo.png',
    featured: true,
    tags: ['Flamingo', 'Flores', 'Comemoração'],
  },
  {
    id: 'bolo-para-festa-lacos-vintage',
    name: 'Bolo para Festa Vintage com Laços',
    description: 'Bolo vintage decorado com babados suaves em chantininho, laços de fita de cetim lilás e corações delicados.',
    category: 'bolos_festa',
    price: 180.00,
    priceUnit: 'kg',
    image: '/products/bolo-fita.png',
    featured: true,
    tags: ['Vintage', 'Laços de Cetim', 'Tendência'],
  },
  {
    id: 'bolo-para-festa-fusca',
    name: 'Bolo para Festa Temático Fusca',
    description: 'Bolo texturizado em tom azul celeste com acabamento em bico pitanga e topo temático de fusca clássico.',
    category: 'bolos_festa',
    price: 170.00,
    priceUnit: 'kg',
    image: '/products/bolo-fusca.png',
    featured: false,
    tags: ['Fusca Azul', 'Infantil & Adulto', 'Temático'],
  },
  {
    id: 'bolo-para-festa-morango',
    name: 'Bolo para Festa com Morangos Frescos',
    description: 'Bolo com laterais plissadas em chantininho branco, coroa de rosetas vermelhas e morangos frescos no topo.',
    category: 'bolos_festa',
    price: 165.00,
    priceUnit: 'kg',
    image: '/products/bolo-morango.png',
    featured: true,
    tags: ['Morangos Frescos', 'Clássico', 'Mais Pedido'],
  },
  {
    id: 'bolo-para-festa-quadrado',
    name: 'Bolo para Festa Retangular Tradicional',
    description: 'Bolo retangular para corte com textura acetinada branca e moldura clássica de bico em chocolate.',
    category: 'bolos_festa',
    price: 140.00,
    priceUnit: 'kg',
    image: '/products/bolo-quadrado.png',
    featured: false,
    tags: ['Retangular', 'Bolo de Corte', 'Chocolate'],
  },
  {
    id: 'bolo-para-festa-lambeth-classico',
    name: 'Bolo para Festa Lambeth Clássico',
    description: 'Bolo todo branco em estilo clássico Lambeth com guirlandas, conchas sobrepostas e laços esculpidos em chantininho.',
    category: 'bolos_festa',
    price: 190.00,
    priceUnit: 'kg',
    image: '/products/bolo-redondo.png',
    featured: true,
    tags: ['Alta Confeitaria', 'Lambeth', 'Noivado & Casamento'],
  },
  {
    id: 'bolo-para-festa-rosa-classico',
    name: 'Bolo para Festa Rosa com Rosetas',
    description: 'Bolo em tom rosa suave com textura linear, guirlanda de rosetas magenta no topo e base decorada.',
    category: 'bolos_festa',
    price: 150.00,
    priceUnit: 'kg',
    image: '/products/bolo-rosa.png',
    featured: false,
    tags: ['Rosa Suave', 'Rosetas', 'Aniversário'],
  },
  {
    id: 'bolo-para-festa-sao-paulo',
    name: 'Bolo para Festa Temático São Paulo',
    description: 'Bolo branco com acabamento tricolor em bico pitanga vermelho e preto, bola e topo temático SPFC.',
    category: 'bolos_festa',
    price: 170.00,
    priceUnit: 'kg',
    image: '/products/bolo-sp.png',
    featured: false,
    tags: ['São Paulo FC', 'Tricolor', 'Temático'],
  },
  {
    id: 'bolo-para-festa-tesouro-casinha',
    name: 'Bolo para Festa Casinha Amarela',
    description: 'Bolo temático amarelo decorado em formato de casinha com portinha, vasinhos de flores e topo comemorativo.',
    category: 'bolos_festa',
    price: 175.00,
    priceUnit: 'kg',
    image: '/products/bolo-tesouro.png',
    featured: false,
    tags: ['Mesversário', 'Casinha', 'Lúdico'],
  },
  {
    id: 'bolo-para-festa-corinthians',
    name: 'Bolo para Festa Temático Corinthians',
    description: 'Bolo com cobertura branca em textura suave, rosetas pretas no topo e na base e topo temático Timão.',
    category: 'bolos_festa',
    price: 170.00,
    priceUnit: 'kg',
    image: '/products/bolo-timao.png',
    featured: false,
    tags: ['Corinthians', 'Timão', 'Temático'],
  },

  // --- CATEGORIA: OVOS DE COLHER ---
  {
    id: 'ovo-colher-ninho-nutella',
    name: 'Ovo de Colher Ninho com Nutella',
    description: 'Casca de chocolate ao leite nobre, recheada com creme aveludado de Leite Ninho, generosa camada de Nutella pura e finalizada com brigadeiros artesanais.',
    category: 'ovos_colher',
    price: 75.00,
    priceUnit: 'unid.',
    image: '/products/ovo-ninho.png',
    featured: true,
    tags: ['Leite Ninho', 'Nutella', 'Mais Pedido', 'Artesanal'],
    sizes: [
      { sizeId: '250g', label: 'Pequeno (250g)', price: 60.00 },
      { sizeId: '350g', label: 'Médio (350g)', price: 75.00 },
      { sizeId: '500g', label: 'Grande (500g)', price: 98.00 }
    ]
  },
  {
    id: 'ovo-colher-ferrero-rocher',
    name: 'Ovo de Colher Ferrero Rocher',
    description: 'Casca crocante de chocolate meio amargo com castanhas, recheio cremoso de gianduia e Nutella, coroado com bombons Ferrero Rocher e avelãs tostadas.',
    category: 'ovos_colher',
    price: 85.00,
    priceUnit: 'unid.',
    image: '/products/ovo-ferreiro.png',
    featured: true,
    tags: ['Ferrero Rocher', 'Nutella', 'Avelã', 'Gourmet'],
    sizes: [
      { sizeId: '250g', label: 'Pequeno (250g)', price: 70.00 },
      { sizeId: '350g', label: 'Médio (350g)', price: 85.00 },
      { sizeId: '500g', label: 'Grande (500g)', price: 115.00 }
    ]
  },
  {
    id: 'ovo-colher-prestigio',
    name: 'Ovo de Colher Prestígio Cremoso',
    description: 'Casca de chocolate ao leite intensa, recheio generoso de beijinho artesanal de coco fresco úmido e cobertura de ganache de brigadeiro gourmet.',
    category: 'ovos_colher',
    price: 70.00,
    priceUnit: 'unid.',
    image: '/products/ovo-prestigio.png',
    featured: false,
    tags: ['Coco Fresco', 'Prestígio', 'Brigadeiro', 'Tradicional'],
    sizes: [
      { sizeId: '250g', label: 'Pequeno (250g)', price: 55.00 },
      { sizeId: '350g', label: 'Médio (350g)', price: 70.00 },
      { sizeId: '500g', label: 'Grande (500g)', price: 92.00 }
    ]
  },
  {
    id: 'ovo-colher-kitkat',
    name: 'Ovo de Colher KitKat & Brigadeiro',
    description: 'Casca ao leite recheada com brigadeiro cremoso gourmet 50% cacau, pedaços crocantes de KitKat e decoração com mini barrinhas crocantes de KitKat.',
    category: 'ovos_colher',
    price: 75.00,
    priceUnit: 'unid.',
    image: '/products/ovo-kitkat.png',
    featured: true,
    tags: ['KitKat', 'Brigadeiro 50%', 'Crocante', 'Sucesso'],
    sizes: [
      { sizeId: '250g', label: 'Pequeno (250g)', price: 60.00 },
      { sizeId: '350g', label: 'Médio (350g)', price: 75.00 },
      { sizeId: '500g', label: 'Grande (500g)', price: 98.00 }
    ]
  }
];

export const OCCASIONS: Occasion[] = [
  {
    id: 'aniversarios',
    name: 'Aniversários',
    description: 'De pequenas comemorações a festas grandiosas, encontre o bolo perfeito para apagar as velinhas.',
    tagline: 'Celebre a vida com o sabor que faz história.',
    recommendedProductIds: ['bolo-para-festa-morango', 'bolo-para-festa-lacos-vintage', 'bolo-para-festa-azul', 'bolo-para-festa-perolas-azuis'],
    image: '/products/bolo-morango.png'
  },
  {
    id: 'casamentos',
    name: 'Casamentos & Noivados',
    description: 'Doces finos e bolos decorados majestosos pensados para o dia mais especial de sua vida.',
    tagline: 'O amor é doce, seu casamento também deve ser.',
    recommendedProductIds: ['bolo-para-festa-lambeth-classico', 'bolo-para-festa-perolas-azuis', 'bolo-para-festa-lacos-vintage'],
    image: '/products/bolo-redondo.png'
  },
  {
    id: 'cha-bebe',
    name: 'Chá de Bebê & Mesversário',
    description: 'Delicadeza em tons pastéis e temas lúdicos para celebrar a chegada e crescimento do seu tesouro.',
    tagline: 'Adoçando a doce espera e os primeiros meses de vida.',
    recommendedProductIds: ['bolo-para-festa-tesouro-casinha', 'bolo-para-festa-espiral-rosa', 'bolo-para-festa-perolas-azuis'],
    image: '/products/bolo-tesouro.png'
  },
  {
    id: 'comemoracoes',
    name: 'Futebol & Temáticos',
    description: 'Bolos personalizados com os times do coração e temas especiais para torcer e comemorar.',
    tagline: 'Gols de sabor para a sua festa temática.',
    recommendedProductIds: ['bolo-para-festa-brasil', 'bolo-para-festa-corinthians', 'bolo-para-festa-sao-paulo', 'bolo-para-festa-fusca'],
    image: '/products/bolo-brasil.png'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mariana Vasconcellos',
    role: 'Noiva',
    comment: 'O Naked Cake rústico com flores foi a estrela do meu casamento! Estava incrivelmente molhado, fofinho e nada enjoativo. Os convidados elogiaram demais, e os camafeus de nozes acabaram em minutos!',
    rating: 5,
    productOrdered: 'Naked Cake Rústico & Camafeus',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-2',
    name: 'Ricardo Mendes',
    role: 'Pai do Lucas (7 anos)',
    comment: 'Pedimos o Combo Petit Celebration pro aniversário do meu filho e foi excelente. Tudo muito caprichado, embalado com extremo cuidado e super fresquinho. O brigadeiro gourmet é de outro planeta!',
    rating: 5,
    productOrdered: 'Combo Petit Celebration',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: 'test-3',
    name: 'Beatriz Sampaio',
    role: 'Aniversariante',
    comment: 'O Bolo de Pistache e Framboesa é simplesmente a melhor coisa que já comi. A combinação da acidez da geleia artesanal com o sabor amanteigado do pistache é perfeita. Vale cada centavo, virou oficial na família!',
    rating: 5,
    productOrdered: 'Bolo de Pistache & Framboesa',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    imageUrl: '/products/bolo-morango.png',
    likes: 1850,
    title: 'Doces & Bolos Especiais',
    caption: 'Confira nossos bolos artesanais preparados com ingredientes nobres para momentos inesquecíveis! 🍰✨',
    date: 'Destaque',
    postUrl: 'https://www.instagram.com/p/DWz5dMbCfpv/?img_index=1'
  },
  {
    id: 'ig-2',
    imageUrl: '/products/bolo-perolas-azul.jpg',
    likes: 1620,
    title: 'Bolos Personalizados',
    caption: 'Cada detalhe pensado com muito carinho para deixar a sua comemoração ainda mais especial. ❤️🎂',
    date: 'Recente',
    postUrl: 'https://www.instagram.com/p/DbJGfC9xSi4/'
  },
  {
    id: 'ig-3',
    imageUrl: '/products/bolo-espiral-rosa.png',
    likes: 2100,
    title: 'Festa & Comemoração',
    caption: 'Massa fofinha e recheios aveludados que conquistam no primeiro pedaço. 🎉✨',
    date: 'Em Alta',
    postUrl: 'https://www.instagram.com/p/DaI2ZwCiTbd/?img_index=1'
  },
  {
    id: 'ig-4',
    imageUrl: '/products/bolo-flamingo.png',
    likes: 1490,
    title: 'Delícias Artesanais',
    caption: 'O sabor inconfundível da Confeitaria Pérola Doces diretamente na sua mesa! 🦩🌺',
    date: 'Especial',
    postUrl: 'https://www.instagram.com/p/DaI2QPqpOVs/'
  },
  {
    id: 'ig-5',
    imageUrl: '/products/bolo-fita.png',
    likes: 1980,
    title: 'Sobremesas & Docinhos',
    caption: 'Adoce o seu dia com os nossos docinhos finos e sobremesas deliciosas! 🍓🍫',
    date: 'Mais Amado',
    postUrl: 'https://www.instagram.com/p/DZhzJUdkZ0k/?img_index=1'
  },
  {
    id: 'ig-6',
    imageUrl: '/products/bolo-brasil.png',
    likes: 1730,
    title: 'Momentos Pérola',
    caption: 'Transformando celebrações em memórias doces e inesquecíveis. ✨🎈',
    date: 'Exclusivo',
    postUrl: 'https://www.instagram.com/p/DZIViVQFJLZ/?img_index=1'
  },
  {
    id: 'ig-7',
    imageUrl: '/products/bolo-fusca.png',
    likes: 1540,
    title: 'Sabor & Carinho',
    caption: 'Feito artesanalmente com ingredientes de altíssima qualidade! 🍰❤️',
    date: 'Recente',
    postUrl: 'https://www.instagram.com/p/DYN1wFpJPO5/'
  },
  {
    id: 'ig-8',
    imageUrl: '/products/bolo-quadrado.png',
    likes: 2280,
    title: 'Ateliê Pérola Doces',
    caption: 'Encomende com antecedência e garanta o bolo perfeito para o seu evento! 💌✨',
    date: 'Destaque',
    postUrl: 'https://www.instagram.com/p/DYNzq7zpW1j/'
  },
  {
    id: 'ig-9',
    imageUrl: 'https://images.unsplash.com/photo-1541795795328-f073b763494e?w=600&auto=format&fit=crop&q=80',
    likes: 1890,
    title: 'Copo da Felicidade',
    caption: 'Pura tentação em cada colherada! Muito brigadeiro cremoso, brownie artesanal e morangos. 🍓🍫❤️',
    date: 'Recente',
    postUrl: 'https://www.instagram.com/p/DWby625ER9k/'
  },
  {
    id: 'ig-10',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80',
    likes: 2150,
    title: 'Ovo de Colher Artesanal',
    caption: 'Nosso famoso Ovo de Colher recheado até a borda! 🍫🥄✨',
    date: 'Mais Amado',
    postUrl: 'https://www.instagram.com/p/DWr7i7UidnQ/'
  }
];

export const BASTIDORES_STEPS = [
  {
    id: 1,
    title: 'Seleção de Ingredientes',
    description: 'Usamos manteiga nobre, chocolates puros, creme de leite fresco e frutas higienizadas uma a uma. O sabor excepcional começa na escolha rigorosa.',
    image: '/confeiteira.jpg'
  },
  {
    id: 2,
    title: 'Preparo Artesanal',
    description: 'Nossas massas fofinhas e recheios aveludados são preparados artesanalmente em pequenas fornadas para garantir aeração perfeita e frescor absoluto.',
    image: '/products/bolo-morango.png'
  },
  {
    id: 3,
    title: 'Decoração e Acabamento',
    description: 'Cada roseta de chantininho é esculpida com precisão de confeiteira. Pérolas comestíveis, bicos minuciosos e fitas são aplicados com carinho.',
    image: '/products/bolo-fita.png'
  },
  {
    id: 4,
    title: 'Embalagem & Entrega',
    description: 'Nossos bolos e doces são acondicionados com segurança para transporte perfeito, garantindo que sua festa receba uma verdadeira obra de arte intacta.',
    image: '/products/bolo-perolas-azul.jpg'
  }
];
