'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CakeSlice, Menu, Search, ShoppingBag, UserRound, X } from 'lucide-react';
import { useCart } from './CartProvider';

export function StoreHeader() {
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">Préparé avec amour • Livraison disponible dans la wilaya d’Alger • Paiement à l’avance</div>
      <header className="site-header container">
        <button className="icon-button mobile-only" aria-label="Ouvrir le menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}><Menu size={21} /></button>
        <Link href="/" className="brand" aria-label="Accueil Boutaleb Sweet">
          <span className="brand-mark"><CakeSlice size={24} /></span>
          <span><strong>BOUTALEB</strong><small>SWEET · ALGÉRIE</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <Link href="/shop">Boutique</Link>
          <Link href="/#categories">Collections</Link>
          <Link href="/#about">Notre histoire</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/admin">Admin</Link>
        </nav>
        <div className="header-actions">
          <Link className="icon-button desktop-only" href="/admin" aria-label="Accès administrateur"><UserRound size={20} /></Link>
          <Link className="icon-button" href="/shop" aria-label="Rechercher des produits"><Search size={20} /></Link>
          <Link className="bag-button" href="/cart" aria-label={`Panier avec ${count} articles`}><ShoppingBag size={20} /><span>{count}</span></Link>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} aria-hidden={!menuOpen} />
      <aside className={`mobile-menu-panel ${menuOpen ? 'open' : ''}`} aria-label="Menu mobile">
        <div className="mobile-menu-head"><strong>Menu</strong><button className="icon-button" onClick={closeMenu} aria-label="Fermer le menu"><X size={22} /></button></div>
        <nav>
          <Link href="/" onClick={closeMenu}>Accueil</Link>
          <Link href="/shop" onClick={closeMenu}>Boutique</Link>
          <Link href="/#categories" onClick={closeMenu}>Collections</Link>
          <Link href="/#about" onClick={closeMenu}>Notre histoire</Link>
          <Link href="/#contact" onClick={closeMenu}>Contact</Link>
          <Link className="mobile-admin-link" href="/admin" onClick={closeMenu}><UserRound size={18} /> Accès administrateur</Link>
        </nav>
      </aside>
    </>
  );
}
