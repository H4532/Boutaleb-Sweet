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
    slug: 'chocolate-celebration-cake',
    name: 'Chocolate Celebration Cake',
    description: 'Rich chocolate sponge layered with silky chocolate cream and finished with an elegant celebration design.',
    price: 180,
    category: 'Custom Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85',
    tag: 'Bestseller',
  },
  {
    slug: 'strawberry-dream-cake',
    name: 'Strawberry Dream Cake',
    description: 'Light vanilla sponge, fresh strawberry filling and smooth cream for a soft and elegant finish.',
    price: 165,
    category: 'Custom Cakes',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=85',
    tag: 'New',
  },
  {
    slug: 'mini-dessert-box',
    name: 'Mini Dessert Box',
    description: 'A carefully selected box of mini desserts, ideal for gifting, gatherings and family occasions.',
    price: 95,
    category: 'Dessert Boxes',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85',
    tag: 'Popular',
  },
  {
    slug: 'classic-vanilla-cake',
    name: 'Classic Vanilla Cake',
    description: 'A timeless vanilla cake with light cream, delicate decoration and a soft handmade sponge.',
    price: 150,
    category: 'Custom Cakes',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'assorted-pastry-box',
    name: 'Assorted Pastry Box',
    description: 'A fresh assortment of handmade pastries, arranged for sharing at home or at special events.',
    price: 110,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'pistachio-dessert-cups',
    name: 'Pistachio Dessert Cups',
    description: 'Creamy pistachio dessert cups with a balanced nutty flavour and refined presentation.',
    price: 85,
    category: 'Dessert Boxes',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=85',
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
