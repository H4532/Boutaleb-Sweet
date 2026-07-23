'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { StoreHeader } from '@/components/StoreHeader';
import { useCart } from '@/components/CartProvider';

export default function CartPage() {
  const { items, total, removeItem, updateQuantity } = useCart();

  const whatsappText = encodeURIComponent(
    `Hello Boutaleb Sweet, I would like to order:\n${items.map((item) => `- ${item.quantity} × ${item.name} (${item.price * item.quantity} SAR)`).join('\n')}\nTotal: ${total} SAR`
  );

  return (
    <main>
      <StoreHeader />
      <section className="page-hero compact container">
        <p className="eyebrow">Your order</p>
        <h1>Shopping cart</h1>
      </section>
      <section className="container cart-layout">
        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <h2>Your cart is empty</h2>
              <p>Discover our handmade cakes, pastries and dessert boxes.</p>
              <Link className="button button-primary" href="/shop">Browse products</Link>
            </div>
          ) : items.map((item) => (
            <article className="cart-item" key={item.slug}>
              <Link href={`/shop/${item.slug}`} className="cart-item-image"><Image src={item.image} alt={item.name} fill sizes="120px" /></Link>
              <div className="cart-item-main">
                <Link href={`/shop/${item.slug}`}><h3>{item.name}</h3></Link>
                <p>{item.category}</p>
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.slug, item.quantity - 1)} aria-label="Decrease quantity"><Minus size={15} /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.slug, item.quantity + 1)} aria-label="Increase quantity"><Plus size={15} /></button>
                </div>
              </div>
              <div className="cart-item-end"><strong>{item.price * item.quantity} SAR</strong><button onClick={() => removeItem(item.slug)} aria-label={`Remove ${item.name}`}><Trash2 size={18} /></button></div>
            </article>
          ))}
        </div>
        <aside className="order-summary">
          <h2>Order summary</h2>
          <div><span>Subtotal</span><strong>{total} SAR</strong></div>
          <div><span>Delivery</span><span>Confirmed on WhatsApp</span></div>
          <div className="summary-total"><span>Total</span><strong>{total} SAR</strong></div>
          {items.length > 0 && <a className="button button-primary" href={`https://wa.me/966538007073?text=${whatsappText}`}>Complete order on WhatsApp</a>}
          <p>Payment and delivery details will be confirmed with Boutaleb Sweet.</p>
        </aside>
      </section>
    </main>
  );
}
