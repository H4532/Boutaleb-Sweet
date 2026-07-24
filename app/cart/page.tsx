'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { StoreHeader } from '@/components/StoreHeader';
import { useCart } from '@/components/CartProvider';

const formatPrice = (price: number) => new Intl.NumberFormat('fr-DZ').format(price);

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCart();

  return (
    <main>
      <StoreHeader />
      <section className="page-hero compact container">
        <p className="eyebrow">Votre commande</p>
        <h1>Panier</h1>
      </section>
      <section className="container cart-layout">
        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <h2>Votre panier est vide</h2>
              <p>Découvrez nos gâteaux, pâtisseries et box gourmandes préparés avec soin.</p>
              <Link className="button button-primary" href="/shop">Voir les produits</Link>
            </div>
          ) : items.map((item) => (
            <article className="cart-item" key={item.slug}>
              <Link href={`/shop/${item.slug}`} className="cart-item-image"><Image src={item.image} alt={item.name} fill sizes="120px" /></Link>
              <div className="cart-item-main">
                <Link href={`/shop/${item.slug}`}><h3>{item.name}</h3></Link>
                <p>{item.category}</p>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.slug, item.quantity - 1)} aria-label="Réduire la quantité"><Minus size={15} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.slug, item.quantity + 1)} aria-label="Augmenter la quantité"><Plus size={15} /></button>
                </div>
              </div>
              <div className="cart-item-end"><strong>{formatPrice(item.price * item.quantity)} DA</strong><button onClick={() => removeItem(item.slug)} aria-label={`Supprimer ${item.name}`}><Trash2 size={18} /></button></div>
            </article>
          ))}
        </div>
        <aside className="order-summary">
          <h2>Résumé de la commande</h2>
          <div><span>Sous-total</span><strong>{formatPrice(total)} DA</strong></div>
          <div><span>Livraison</span><span>Calculée selon la wilaya</span></div>
          <div className="summary-total"><span>Total produits</span><strong>{formatPrice(total)} DA</strong></div>
          {items.length > 0 && <button className="button button-primary" type="button">Continuer vers la livraison</button>}
          <p>Paiement à la livraison ou par virement/BaridiMob selon confirmation. Les frais et délais dépendent de la wilaya.</p>
        </aside>
      </section>
    </main>
  );
}
