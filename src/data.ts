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
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=80',
    likes: 1240,
    caption: 'Bastidores da nossa cozinha: montando com amor cada camada do nosso campeão de pedidos, o Bolo de Pistache & Framboesa! 🌸🍰✨ #perola__doces #confeitariaartesanal #pistache',
    date: 'Ontem'
  },
  {
    id: 'ig-2',
    imageUrl: 'https://images.unsplash.com/photo-1541795795328-f073b763494e?w=500&auto=format&fit=crop&q=80',
    likes: 980,
    caption: 'Bolinhas de felicidade pura! Nosso Brigadeiro Gourmet com chocolate belga Callebaut sendo boleado com todo carinho. Dá pra resistir? 🍫❤️ #brigadeiro #gourmet #callebaut',
    date: 'Há 3 dias'
  },
  {
    id: 'ig-3',
    imageUrl: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=500&auto=format&fit=crop&q=80',
    likes: 1560,
    caption: 'Pérolas, flores e toques dourados para celebrar um recomeço mágico. Muito amor envolvido nesse clássico de Buttercream! 💍✨ #weddingcake #buttercream #decoracaocomestivel',
    date: 'Há 5 dias'
  },
  {
    id: 'ig-4',
    imageUrl: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500&auto=format&fit=crop&q=80',
    likes: 810,
    caption: 'Festa em casa? Nosso Combo Petit resolve! Praticidade sem abrir mão do sabor artesanal e da apresentação impecável que você merece. 🎈📦 #comboaniversario #festaemcasa',
    date: 'Há 1 semana'
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
