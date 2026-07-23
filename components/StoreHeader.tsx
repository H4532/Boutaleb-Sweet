'use client';

import Link from 'next/link';
import { CakeSlice, Menu, Search, ShoppingBag } from 'lucide-react';
import { useCart } from './CartProvider';

export function StoreHeader() {
  const { count } = useCart();

  return (
    <>
      <div className="announcement">Freshly made with love • Delivery across Jeddah • WhatsApp 0538007073</div>
      <header className="site-header container">
        <button className="icon-button mobile-only" aria-label="Open menu"><Menu size={21} /></button>
        <Link href="/" className="brand" aria-label="Boutaleb Sweet home">
          <span className="brand-mark"><CakeSlice size={24} /></span>
          <span><strong>BOUTALEB</strong><small>SWEET · JEDDAH</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/shop">Shop</Link>
          <Link href="/#categories">Collections</Link>
          <Link href="/#about">Our story</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <Link className="icon-button" href="/shop" aria-label="Search products"><Search size={20} /></Link>
          <Link className="bag-button" href="/cart" aria-label={`Shopping cart with ${count} items`}><ShoppingBag size={20} /><span>{count}</span></Link>
        </div>
      </header>
    </>
  );
}
