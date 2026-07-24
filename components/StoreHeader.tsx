'use client';

import Link from 'next/link';
import { CakeSlice, Menu, Search, ShoppingBag } from 'lucide-react';
import { useCart } from './CartProvider';

export function StoreHeader() {
  const { count } = useCart();

  return (
    <>
      <div className="announcement">Préparé avec amour • Livraison disponible dans la wilaya d’Alger • Paiement à l’avance</div>
      <header className="site-header container">
        <button className="icon-button mobile-only" aria-label="Ouvrir le menu"><Menu size={21} /></button>
        <Link href="/" className="brand" aria-label="Accueil Boutaleb Sweet">
          <span className="brand-mark"><CakeSlice size={24} /></span>
          <span><strong>BOUTALEB</strong><small>SWEET · ALGÉRIE</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <Link href="/shop">Boutique</Link>
          <Link href="/#categories">Collections</Link>
          <Link href="/#about">Notre histoire</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <Link className="icon-button" href="/shop" aria-label="Rechercher des produits"><Search size={20} /></Link>
          <Link className="bag-button" href="/cart" aria-label={`Panier avec ${count} articles`}><ShoppingBag size={20} /><span>{count}</span></Link>
        </div>
      </header>
    </>
  );
}
