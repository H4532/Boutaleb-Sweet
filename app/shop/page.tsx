import { StoreHeader } from '@/components/StoreHeader';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export const metadata = {
  title: 'Boutique | Boutaleb Sweet Algérie',
  description: 'Découvrez les gâteaux, pâtisseries et box gourmandes Boutaleb Sweet avec livraison en Algérie.',
};

export default function ShopPage() {
  return (
    <main>
      <StoreHeader />
      <section className="page-hero container">
        <p className="eyebrow">Préparé avec soin</p>
        <h1>Notre collection gourmande</h1>
        <p>Découvrez nos gâteaux, pâtisseries et box préparés sur commande avec livraison disponible en Algérie.</p>
      </section>
      <section className="container shop-layout">
        <aside className="shop-filters">
          <strong>Catégories</strong>
          <a href="#all">Tous les produits</a>
          <a href="#cakes">Gâteaux personnalisés</a>
          <a href="#pastries">Pâtisseries</a>
          <a href="#boxes">Box gourmandes</a>
        </aside>
        <div>
          <div className="shop-toolbar"><span>{products.length} produits</span><span>Prix en dinar algérien</span></div>
          <div className="product-grid" id="all">
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
