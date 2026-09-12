import { Product, Occasion, Testimonial, InstagramPost } from './types';

export const PRODUCTS: Product[] = [
  // 1. Bolos de Festa
  {
    id: 'bolo-pistache-framboesa',
    name: 'Bolo de Pistache & Framboesa',
    description: 'Massa amanteigada de pistache, recheio de brigadeiro de pistache artesanal e geleia caseira de framboesa fresca. Decorado com pistaches picados e framboesas inteiras.',
    category: 'bolos_festa',
    price: 195.00,
    priceUnit: 'kg',
    image: '/assets/bolo_pistache_framboesa.png',
    featured: true,
    tags: ['Sucesso de Vendas', 'Sabor Fino', 'Frutas Frescas'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — Serve 12 a 15 fatias', price: 290.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — Serve 20 a 25 fatias', price: 480.00 },
      { sizeId: 'g', label: 'Grande (~3.5kg) — Serve 30 a 35 fatias', price: 670.00 },
    ]
  },
  {
    id: 'bolo-tres-leches',
    name: 'Bolo Três Leites com Morango',
    description: 'Nossa famosa massa pão de ló super molhadinha com calda artesanal de três leites, generoso recheio de creme de baunilha Bourbon e morangos frescos selecionados.',
    category: 'bolos_festa',
    price: 150.00,
    priceUnit: 'kg',
    image: '/assets/bolo_tres_leches.png',
    featured: true,
    tags: ['Clássico', 'Muito Molhado', 'Favorito das Crianças'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — Serve 12 a 15 fatias', price: 225.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — Serve 20 a 25 fatias', price: 375.00 },
      { sizeId: 'g', label: 'Grande (~3.5kg) — Serve 30 a 35 fatias', price: 525.00 },
    ]
  },
  {
    id: 'bolo-nozes-doce-leite',
    name: 'Bolo de Nozes com Doce de Leite',
    description: 'Massa chiffon leve de nozes chilenas moídas, recheada com doce de leite artesanal cremoso cozido lentamente e pedaços crocantes de nozes caramelizadas.',
    category: 'bolos_festa',
    price: 165.00,
    priceUnit: 'kg',
    image: '/assets/bolo_nozes_doce_leite.png',
    featured: false,
    tags: ['Sofisticado', 'Crocante', 'Tradicional'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — Serve 12 a 15 fatias', price: 247.50 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — Serve 20 a 25 fatias', price: 412.50 },
      { sizeId: 'g', label: 'Grande (~3.5kg) — Serve 30 a 35 fatias', price: 577.50 },
    ]
  },
  {
    id: 'bolo-chocolate-belga',
    name: 'Bolo Trufado Duplo Belga',
    description: 'Massa de cacau black 100%, com duas generosas camadas de trufa de chocolate belga ao leite e meio amargo. Finalizado com raspas de chocolate e cacau polvilhado.',
    category: 'bolos_festa',
    price: 160.00,
    priceUnit: 'kg',
    image: '/assets/bolo_chocolate_belga.png',
    featured: true,
    tags: ['Chocolate Belga', 'Intenso', 'Para Chocólatras'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — Serve 12 a 15 fatias', price: 240.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — Serve 20 a 25 fatias', price: 400.00 },
      { sizeId: 'g', label: 'Grande (~3.5kg) — Serve 30 a 35 fatias', price: 560.00 },
    ]
  },
  {
    id: 'bolo-morango-supremo',
    name: 'Bolo Supremo de Morango Fresco',
    description: 'Deliciosa massa pão de ló umedecida com calda leve, generoso recheio de creme de leite condensado artesanal e morangos frescos. Coberto com chantilly suave, babados laterais perfeitos e coroado com morangos inteiros.',
    category: 'bolos_festa',
    price: 155.00,
    priceUnit: 'kg',
    image: '/assets/bolo_morango.png',
    featured: true,
    tags: ['Morangos Frescos', 'Clássico', 'Frutas Selecionadas'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — Serve 12 a 15 fatias', price: 232.50 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — Serve 20 a 25 fatias', price: 387.50 },
      { sizeId: 'g', label: 'Grande (~3.5kg) — Serve 30 a 35 fatias', price: 542.50 },
    ]
  },
  {
    id: 'bolo-quadrado-classico',
    name: 'Bolo Retangular Clássico B&W',
    description: 'Tradicional bolo retangular de festa com generosas camadas de recheio à sua escolha. Cobertura texturizada em chantilly branco neve com acabamento e bordas ornamentadas em chantilly preto profundo. Ideal para grandes comemorações familiares ou eventos corporativos.',
    category: 'bolos_festa',
    price: 145.00,
    priceUnit: 'kg',
    image: '/assets/bolo_quadrado.png',
    featured: false,
    tags: ['Grande Porte', 'Tradicional', 'Festa de Família'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — Serve 12 a 15 fatias', price: 217.50 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — Serve 20 a 25 fatias', price: 362.50 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — Serve 35 a 40 fatias', price: 580.00 },
    ]
  },

  // 2. Docinhos
  {
    id: 'brigadeiro-gourmet',
    name: 'Brigadeiro Gourmet ao Leite',
    description: 'Feito com chocolate belga Callebaut 54% cacau, manteiga francesa de alta qualidade e finalizado com granulados split belgas. Extremamente macio e nada açucarado.',
    category: 'docinhos',
    price: 3.60,
    priceUnit: 'unid.',
    image: 'https://images.unsplash.com/photo-1541795795328-f073b763494e?w=1000&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['O mais amado', 'Chocolate Belga', 'Feito à Mão'],
    sizes: [
      { sizeId: 'cx25', label: 'Caixa com 25 unidades', price: 90.00 },
      { sizeId: 'cx50', label: 'Caixa com 50 unidades', price: 175.00 },
      { sizeId: 'cx100', label: 'Cento (100 unidades)', price: 340.00 },
    ]
  },
  {
    id: 'beijinho-coco-queimado',
    name: 'Beijinho de Coco Queimado',
    description: 'Docinho super cremoso de coco ralado fresco infundido, enrolado em coco queimado fininho caramelizado à mão, finalizado com um cravo decorativo.',
    category: 'docinhos',
    price: 3.20,
    priceUnit: 'unid.',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=1000&auto=format&fit=crop&q=80',
    featured: false,
    tags: ['Aromático', 'Cremoso', 'Coco Fresco'],
    sizes: [
      { sizeId: 'cx25', label: 'Caixa com 25 unidades', price: 80.00 },
      { sizeId: 'cx50', label: 'Caixa com 50 unidades', price: 155.00 },
      { sizeId: 'cx100', label: 'Cento (100 unidades)', price: 300.00 },
    ]
  },
  {
    id: 'camafeu-nozes',
    name: 'Camafeu de Nozes Real',
    description: 'Docinho fino tradicional de nozes nobres trituradas, banhado em calda de fondant cristalizado especial e finalizado com metade de uma noz chilena inteira decorada com ouro comestível.',
    category: 'docinhos',
    price: 5.00,
    priceUnit: 'unid.',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=1000&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['Fino', 'Nozes', 'Casamento'],
    sizes: [
      { sizeId: 'cx25', label: 'Caixa com 25 unidades', price: 125.00 },
      { sizeId: 'cx50', label: 'Caixa com 50 unidades', price: 240.00 },
      { sizeId: 'cx100', label: 'Cento (100 unidades)', price: 460.00 },
    ]
  },
  {
    id: 'brigadeiro-pistache-flor-sal',
    name: 'Brigadeiro de Pistache & Flor de Sal',
    description: 'Brigadeiro branco cremoso infundido com pasta pura de pistache da Sicília, enrolado em pistache triturado crocante e coroado com delicados cristais de flor de sal.',
    category: 'docinhos',
    price: 4.80,
    priceUnit: 'unid.',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=1000&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['Gourmet', 'Tendência', 'Contraste Salgado-Doce'],
    sizes: [
      { sizeId: 'cx25', label: 'Caixa com 25 unidades', price: 120.00 },
      { sizeId: 'cx50', label: 'Caixa com 50 unidades', price: 230.00 },
      { sizeId: 'cx100', label: 'Cento (100 unidades)', price: 440.00 },
    ]
  },

  // 3. Bolos Personalizados
  {
    id: 'bolo-perola-dourada',
    name: 'Bolo Clássico Pérola Dourada',
    description: 'Bolo com cobertura texturizada de buttercream de merengue suíço aromatizado com baunilha pura, decorado com pérolas comestíveis de açúcar de diferentes tamanhos e folhas de ouro 24k comestíveis.',
    category: 'bolos_festa',
    price: 190.00,
    priceUnit: 'kg',
    image: '/assets/bolo_perola_dourada.png',
    customizable: true,
    featured: true,
    tags: ['Alta Confeitaria', 'Ouro Comestível', 'Aniversários Finos'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 285.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 475.00 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 760.00 },
    ]
  },
  {
    id: 'naked-cake-flores',
    name: 'Naked Cake Rústico com Flores',
    description: 'Visual rústico sofisticado que revela as camadas de massa de baunilha e recheios claros. Decorado com flores naturais frescas da estação (higienizadas e próprias para culinária) e açúcar de confeiteiro.',
    category: 'bolos_festa',
    price: 180.00,
    priceUnit: 'kg',
    image: '/assets/bolo_naked_cake.png',
    customizable: true,
    featured: false,
    tags: ['Rústico', 'Flores Naturais', 'Casamento & Chás'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 270.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 450.00 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 720.00 },
    ]
  },
  {
    id: 'bolo-azul-bolinhas',
    name: 'Bolo Artístico Azul com Pérolas',
    description: 'Lindo bolo artístico decorado com buttercream ou chantininho em tons de azul e branco, finalizado com elegantes pérolas comestíveis prateadas. Perfeito para chás de bebê, batizados ou aniversários especiais.',
    category: 'bolos_festa',
    price: 170.00,
    priceUnit: 'kg',
    image: '/assets/bolo_azul_bolinhas.png',
    customizable: true,
    featured: false,
    tags: ['Artesanal', 'Tons Azuis', 'Pérolas'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 255.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 425.00 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 680.00 },
    ]
  },
  {
    id: 'bolo-azul-branco',
    name: 'Bolo Clássico Azul e Branco',
    description: 'Elegante cobertura em ondas de chantininho branco com bordas ornamentadas em azul royal profundo. Uma escolha clássica e sofisticada para comemorações masculinas e batizados.',
    category: 'bolos_festa',
    price: 165.00,
    priceUnit: 'kg',
    image: '/assets/bolo_azul&branco.png',
    customizable: true,
    featured: false,
    tags: ['Clássico', 'Bicolor', 'Sofisticado'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 247.50 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 412.50 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 660.00 },
    ]
  },
  {
    id: 'bolo-bolinhas',
    name: 'Bolo Espiral Rosa com Pérolas',
    description: 'Bolo artístico com textura espiral degradê em tons de rosa e branco no topo, cravejado com delicadas pérolas prateadas e acabamento inferior rendado. Encantador e delicado para comemorações femininas e debutantes.',
    category: 'bolos_festa',
    price: 175.00,
    priceUnit: 'kg',
    image: '/assets/bolo_bolinhas.png',
    customizable: true,
    featured: false,
    tags: ['Rosa & Branco', 'Pérolas', 'Delicado'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 262.50 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 437.50 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 700.00 },
    ]
  },
  {
    id: 'bolo-branco-drapeado',
    name: 'Bolo Classic White Drapery',
    description: 'Decoração clássica europeia de casamento com drapeados impecáveis em glacê ou chantininho branco. Visual clean, atemporal e extremamente luxuoso para mini-weddings ou casamentos.',
    category: 'bolos_festa',
    price: 180.00,
    priceUnit: 'kg',
    image: '/assets/bolo_branco.png',
    customizable: true,
    featured: false,
    tags: ['Atemporal', 'Todo Branco', 'Casamento'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 270.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 450.00 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 720.00 },
    ]
  },
  {
    id: 'bolo-branco-rosa',
    name: 'Bolo Ondas Rosé e Branco',
    description: 'Trabalho primoroso em bico de confeitar com degradê suave de rosa na base e topo em espiral. Finalizado com pequenas pérolas de açúcar de alto brilho para momentos inesquecíveis.',
    category: 'bolos_festa',
    price: 170.00,
    priceUnit: 'kg',
    image: '/assets/bolo_branco&rosa.png',
    customizable: true,
    featured: false,
    tags: ['Festa Infantil', 'Ondas', 'Suave'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 255.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 425.00 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 680.00 },
    ]
  },
  {
    id: 'bolo-brasil',
    name: 'Bolo Temático Brasil',
    description: 'Bolo vibrante decorado nas cores verde e amarelo com topo de bolo personalizado contendo o nome do aniversariante, bola de futebol e estrelas. Perfeito para comemorar em clima de torcida e paixão nacional.',
    category: 'bolos_festa',
    price: 160.00,
    priceUnit: 'kg',
    image: '/assets/bolo_brasil.png',
    customizable: true,
    featured: false,
    tags: ['Temático', 'Futebol', 'Crianças'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 240.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 400.00 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 640.00 },
    ]
  },
  {
    id: 'bolo-chaves',
    name: 'Bolo Vila do Chaves',
    description: 'Incrível bolo temático inspirado na famosa Vila do Chaves, com decorações de janelas, vasinhos e o carismático Chaves em papel fotográfico de alta resolução. A diversão garantida para fãs de todas as idades!',
    category: 'bolos_festa',
    price: 165.00,
    priceUnit: 'kg',
    image: '/assets/bolo_chaves.png',
    customizable: true,
    featured: false,
    tags: ['Chaves', 'Temático', 'Infantil'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 247.50 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 412.50 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 660.00 },
    ]
  },
  {
    id: 'bolo-corinthians',
    name: 'Bolo Temático Corinthians',
    description: 'Decoração impecável em preto e branco clássica do Timão, com o escudo oficial em papel fotográfico de alta qualidade e topo de bolo decorado com bola de futebol. Ideal para corinthianos apaixonados comemorarem o bando de loucos.',
    category: 'bolos_festa',
    price: 160.00,
    priceUnit: 'kg',
    image: '/assets/bolo_corinthians.png',
    customizable: true,
    featured: false,
    tags: ['Corinthians', 'Futebol', 'Temático'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 240.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 400.00 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 640.00 },
    ]
  },
  {
    id: 'bolo-fusca',
    name: 'Bolo Temático Fusca Azul',
    description: 'Lindo bolo temático em tom azul celeste com topo personalizado de Fusca clássico e semáforo. Um bolo cheio de personalidade e nostalgia para amantes do automobilismo clássico.',
    category: 'bolos_festa',
    price: 165.00,
    priceUnit: 'kg',
    image: '/assets/bolo_fusca.png',
    customizable: true,
    featured: false,
    tags: ['Temático', 'Carros', 'Nostalgia'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 247.50 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 412.50 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 660.00 },
    ]
  },
  {
    id: 'bolo-lacinho',
    name: 'Bolo Gratidão com Lacinhos',
    description: 'Decoração delicada com pequenos corações azuis ou lilases desenhados à mão ao redor do bolo, finalizado com lacinhos de cetim roxos/lilás. Um encanto de delicadeza para expressar carinho e gratidão.',
    category: 'bolos_festa',
    price: 170.00,
    priceUnit: 'kg',
    image: '/assets/bolo_lacinho.png',
    customizable: true,
    featured: false,
    tags: ['Laços', 'Corações', 'Delicado'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 255.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 425.00 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 680.00 },
    ]
  },
  {
    id: 'bolo-rosa-flamingo',
    name: 'Bolo Rosa Feliz Aniversário',
    description: 'Decoração em degradê de rosa vibrante com espirais no topo e topper brilhante de Feliz Aniversário com temática de flamingo. Um bolo alegre e cheio de vida para as melhores comemorações.',
    category: 'bolos_festa',
    price: 160.00,
    priceUnit: 'kg',
    image: '/assets/bolo_rosa.png',
    customizable: true,
    featured: false,
    tags: ['Aniversário', 'Flamingo', 'Rosa'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 240.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 400.00 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 640.00 },
    ]
  },
  {
    id: 'bolo-rose-minimalista',
    name: 'Bolo Minimalista Corações Blanc',
    description: 'Estética romântica e minimalista com cobertura lisa na cor rosé suave e delicados corações brancos em relevo desenhados ao redor de toda a lateral. Simplesmente apaixonante para celebrar o amor.',
    category: 'bolos_festa',
    price: 165.00,
    priceUnit: 'kg',
    image: '/assets/bolo_rose.png',
    customizable: true,
    featured: false,
    tags: ['Minimalista', 'Romântico', 'Corações'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 247.50 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 412.50 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 660.00 },
    ]
  },
  {
    id: 'bolo-saopaulo',
    name: 'Bolo Temático São Paulo',
    description: 'Decoração tricolor impecável (preto, vermelho e branco) com o escudo do Tricolor Paulista em destaque e topo de bolo do Flork torcedor do São Paulo. Para comemorar os gols e os anos de vida do seu são-paulino favorito.',
    category: 'bolos_festa',
    price: 160.00,
    priceUnit: 'kg',
    image: '/assets/bolo_saopaulo.png',
    customizable: true,
    featured: false,
    tags: ['São Paulo', 'Futebol', 'Temático'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 240.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 400.00 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 640.00 },
    ]
  },
  {
    id: 'bolo-sinuca',
    name: 'Bolo Temático Sinuca George',
    description: 'Bolo temático para aniversários descontraídos, decorado com miniatura de mesa de sinuca, canecas de chopp gelado e microfone de videokê. Perfeito para comemorar os melhores anos de vida e chamar no talento!',
    category: 'bolos_festa',
    price: 170.00,
    priceUnit: 'kg',
    image: '/assets/bolo_sinuca.png',
    customizable: true,
    featured: false,
    tags: ['Sinuca', 'Chopp', 'Divertido'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 255.00 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 425.00 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 680.00 },
    ]
  },
  {
    id: 'bolo-spiderman',
    name: 'Bolo Temático Homem-Aranha',
    description: 'Bolo temático do super-herói mais querido das crianças! Acabamento em azul royal texturizado com teias de aranha em rosetas de chantilly vermelho e topo com o Spiderman pronto para a ação.',
    category: 'bolos_festa',
    price: 165.00,
    priceUnit: 'kg',
    image: '/assets/bolo_spiderman.png',
    customizable: true,
    featured: false,
    tags: ['Homem-Aranha', 'Infantil', 'Herois'],
    sizes: [
      { sizeId: 'p', label: 'Pequeno (~1.5kg) — 1 andar', price: 247.50 },
      { sizeId: 'm', label: 'Médio (~2.5kg) — 1 andar alto', price: 412.50 },
      { sizeId: 'g', label: 'Grande (~4.0kg) — 2 andares', price: 660.00 },
    ]
  },

  // 4. Combos para Festas
  {
    id: 'combo-petit',
    name: 'Combo Petit Celebration',
    description: 'Perfeito para celebrar momentos íntimos com muito charme. Inclui 1 Bolo de Festa de sua escolha (tamanho P, ~1.5kg) + 25 Brigadeiros Gourmet + 25 Beijinhos. Serve perfeitamente até 15 convidados.',
    category: 'combos',
    price: 360.00,
    priceUnit: 'combo',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=1000&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['Prático', 'Melhor Custo-Benefício', 'Pequenas Festas'],
    sizes: [
      { sizeId: 'default', label: 'Combo Padrão (Até 15 pessoas)', price: 360.00 },
    ]
  },
  {
    id: 'combo-imperial',
    name: 'Combo Festa Pérola Imperial',
    description: 'A solução definitiva para uma festa inesquecível. Inclui 1 Bolo Personalizado de sua escolha (tamanho M, ~2.5kg) + 50 Brigadeiros Gourmet + 50 Beijinhos + 50 Camafeus de Nozes. Serve até 30 convidados com elegância máxima.',
    category: 'combos',
    price: 920.00,
    priceUnit: 'combo',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&auto=format&fit=crop&q=80',
    featured: true,
    tags: ['Completo', 'Festa Premium', 'Fácil de Escolher'],
    sizes: [
      { sizeId: 'default', label: 'Combo Premium (Até 30 pessoas)', price: 920.00 },
    ]
  }
];

export const OCCASIONS: Occasion[] = [
  {
    id: 'aniversarios',
    name: 'Aniversários',
    description: 'De pequenas comemorações a festas grandiosas, encontre o bolo perfeito para apagar as velinhas.',
    tagline: 'Celebre a vida com o sabor que faz história.',
    recommendedProductIds: ['bolo-pistache-framboesa', 'bolo-tres-leches', 'combo-petit', 'bolo-perola-dourada'],
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'casamentos',
    name: 'Casamentos',
    description: 'Doces finos e bolos decorados majestosos pensados para o dia mais especial de sua vida.',
    tagline: 'O amor é doce, seu casamento também deve ser.',
    recommendedProductIds: ['naked-cake-flores', 'camafeu-nozes', 'brigadeiro-pistache-flor-sal', 'bolo-perola-dourada'],
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'cha-bebe',
    name: 'Chá de Bebê / Revelação',
    description: 'Delicadeza em tons pastéis e sabores acolhedores para celebrar a chegada do seu maior tesouro.',
    tagline: 'Adoçando a doce espera de momentos mágicos.',
    recommendedProductIds: ['bolo-tres-leches', 'beijinho-coco-queimado', 'combo-petit', 'naked-cake-flores'],
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'comemoracoes',
    name: 'Reuniões & Comemorações',
    description: 'Aquela reunião em família ou conquista profissional merece ser brindada com uma mordida deliciosa.',
    tagline: 'Transforme o comum em uma memória especial.',
    recommendedProductIds: ['combo-petit', 'bolo-nozes-doce-leite', 'brigadeiro-gourmet', 'bolo-chocolate-belga'],
    image: 'https://images.unsplash.com/photo-1531058020387-3be344559be6?w=800&auto=format&fit=crop&q=80'
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
    caption: 'Bastidores da nossa cozinha: montando com amor cada camada do nosso campeão de pedidos, o Bolo de Pistache & Framboesa! 🌸🍰✨ #peroladoces #confeitariaartesanal #pistache',
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
    description: 'Usamos manteiga francesa, cacau belga 100%, creme de leite fresco e frutas higienizadas uma a uma. O sabor excepcional começa na escolha rigorosa.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Preparo Artesanal',
    description: 'Nossas caldas e geleias são feitas do zero em pequenos lotes. As massas são batidas manualmente para garantir a aeração ideal e leveza absoluta.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Decoração e Acabamento',
    description: 'Cada flor é higienizada e aplicada à mão. Cada pérola de açúcar é encaixada delicadamente. Cada folha de ouro é colocada com precisão de joalheiro.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Embalagem & Entrega',
    description: 'Nossos doces e bolos são colocados em caixas rígidas e reforçadas, projetadas para transporte seguro, finalizadas com nossas fitas elegantes.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&auto=format&fit=crop&q=80'
  }
];
