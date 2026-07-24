export type Product = {
  slug: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  {
    slug: 'gateau-chocolat-celebration',
    name: 'Gâteau chocolat célébration',
    description: 'Génoise moelleuse au chocolat, crème onctueuse et finition élégante pour anniversaires et grandes occasions.',
    price: 4800,
    category: 'Gâteaux personnalisés',
    image: '/products/chocolate-cake.svg',
    tag: 'Meilleure vente',
  },
  {
    slug: 'gateau-fraise-douceur',
    name: 'Gâteau douceur fraise',
    description: 'Génoise vanille légère, garniture à la fraise et crème délicate pour une finition fraîche et raffinée.',
    price: 4500,
    category: 'Gâteaux personnalisés',
    image: '/products/strawberry-cake.svg',
    tag: 'Nouveau',
  },
  {
    slug: 'box-mini-desserts',
    name: 'Box mini desserts',
    description: 'Un assortiment soigné de mini desserts, idéal pour les visites, fêtes familiales et cadeaux gourmands.',
    price: 2800,
    category: 'Box gourmandes',
    image: '/products/dessert-box.svg',
    tag: 'Populaire',
  },
  {
    slug: 'gateau-vanille-classique',
    name: 'Gâteau vanille classique',
    description: 'Un gâteau vanille intemporel avec crème légère, décoration délicate et génoise faite maison.',
    price: 4000,
    category: 'Gâteaux personnalisés',
    image: '/products/strawberry-cake.svg',
  },
  {
    slug: 'box-patisseries-assorties',
    name: 'Box pâtisseries assorties',
    description: 'Un assortiment frais de pâtisseries artisanales pour partager à la maison, au bureau ou pendant vos événements.',
    price: 3200,
    category: 'Pâtisseries',
    image: '/products/dessert-box.svg',
  },
  {
    slug: 'verrines-pistache',
    name: 'Verrines pistache',
    description: 'Des verrines crémeuses à la pistache, équilibrées et présentées avec une finition élégante.',
    price: 2400,
    category: 'Box gourmandes',
    image: '/products/dessert-box.svg',
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
