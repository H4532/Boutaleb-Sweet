import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { StoreHeader } from '@/components/StoreHeader';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

const categories = [
  ['Gâteaux personnalisés', 'Pour anniversaires, mariages et moments uniques'],
  ['Pâtisseries', 'Des douceurs artisanales préparées avec soin'],
  ['Box gourmandes', 'Des assortiments élégants pour offrir et partager'],
];

export default function HomePage() {
  return (
    <main>
      <StoreHeader />

      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> Créations artisanales à Alger</p>
          <h1>Des moments sucrés,<br /><em>faits avec amour.</em></h1>
          <p>Gâteaux, pâtisseries et box gourmandes préparés sur commande pour vos fêtes, cadeaux et envies du quotidien.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/shop">Découvrir la boutique</Link>
            <Link className="button button-secondary" href="/cart">Voir mon panier</Link>
          </div>
          <div className="hero-note"><span>Préparé sur commande</span><span>Paiement à l’avance</span><span>Livraison dans la wilaya d’Alger</span></div>
        </div>
        <div className="hero-visual">
          <Image
            src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1400&q=90"
            alt="Gâteau de fête élégant Boutaleb Sweet Algérie"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="floating-card"><strong>Fait avec amour</strong><span>صنعت بكل حب</span></div>
        </div>
      </section>

      <section className="section container delivery-benefits">
        <div><Truck size={24} /><strong>Livraison à Alger</strong><span>Disponible dans les communes de la wilaya d’Alger</span></div>
        <div><ShieldCheck size={24} /><strong>Paiement à l’avance</strong><span>La commande est confirmée après réception du paiement</span></div>
        <div><MapPin size={24} /><strong>Commande locale</strong><span>Une expérience pensée pour nos clients à Alger</span></div>
      </section>

      <section id="categories" className="section container">
        <div className="section-heading">
          <div><p className="eyebrow">Nos univers</p><h2>Achetez par collection</h2></div>
          <Link href="/shop">Voir tous les produits →</Link>
        </div>
        <div className="category-grid">
          {categories.map(([title, description], index) => (
            <article className={`category-card category-${index + 1}`} key={title}>
              <span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="shop" className="section products-section">
        <div className="container">
          <div className="section-heading centered">
            <div><p className="eyebrow">Nos favoris</p><h2>Meilleures ventes</h2><p>Des créations appréciées par nos clients, préparées spécialement pour chaque commande.</p></div>
          </div>
          <div className="product-grid">
            {products.slice(0, 3).map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section id="about" className="story container section">
        <div className="story-image"><Image src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=85" alt="Pâtisseries fraîches Boutaleb Sweet" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className="story-copy"><p className="eyebrow">Notre histoire</p><h2>Chaque détail rend vos célébrations plus belles.</h2><p>Boutaleb Sweet crée des desserts artisanaux pensés pour les familles algériennes. Chaque commande est préparée avec attention, de la saveur jusqu’à la présentation.</p><Link className="text-link" href="/shop">Découvrir nos créations</Link></div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div><p className="eyebrow">Prêt à commander ?</p><h2>Choisissez vos douceurs et indiquez votre commune dans la wilaya d’Alger.</h2></div>
          <div className="contact-actions"><Link className="button button-light" href="/shop">Commencer ma commande</Link><p><MapPin size={17} /> Livraison dans la wilaya d’Alger</p></div>
        </div>
      </section>

      <footer className="footer container">
        <div className="brand"><span><strong>BOUTALEB</strong><small>SWEET · ALGÉRIE</small></span></div>
        <p>Gâteaux, pâtisseries et douceurs artisanales. صنعت بكل حب</p>
        <div><Link href="/shop">Boutique</Link><Link href="/cart">Panier</Link></div>
      </footer>
    </main>
  );
}
