import { StoreHeader } from '@/components/StoreHeader';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

export const metadata = {
  title: 'Shop | Boutaleb Sweet',
  description: 'Shop handmade cakes, pastries and dessert boxes from Boutaleb Sweet in Jeddah.',
};

export default function ShopPage() {
  return (
    <main>
      <StoreHeader />
      <section className="page-hero container">
        <p className="eyebrow">Freshly handmade</p>
        <h1>Our sweet collection</h1>
        <p>Browse cakes, pastries and dessert boxes made to order in Jeddah.</p>
      </section>
      <section className="container shop-layout">
        <aside className="shop-filters">
          <strong>Categories</strong>
          <a href="#all">All products</a>
          <a href="#cakes">Custom cakes</a>
          <a href="#pastries">Pastries</a>
          <a href="#boxes">Dessert boxes</a>
        </aside>
        <div>
          <div className="shop-toolbar"><span>{products.length} products</span><span>Prices in SAR</span></div>
          <div className="product-grid" id="all">
            {products.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
