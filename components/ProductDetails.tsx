'use client';

import { ShoppingBag } from 'lucide-react';
import type { Product } from '@/data/products';
import { useCart } from './CartProvider';

export function ProductDetails({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="product-detail-copy">
      <p className="eyebrow">{product.category}</p>
      <h1>{product.name}</h1>
      <p className="detail-price">{product.price} SAR</p>
      <p className="detail-description">{product.description}</p>
      <div className="detail-list">
        <span>✓ Handmade to order</span>
        <span>✓ Fresh ingredients</span>
        <span>✓ Delivery across Jeddah</span>
      </div>
      <button className="button button-primary detail-add" onClick={() => addItem(product)}><ShoppingBag size={19} /> Add to cart</button>
      <a className="button button-secondary detail-whatsapp" href={`https://wa.me/966538007073?text=${encodeURIComponent(`Hello Boutaleb Sweet, I would like to order ${product.name}.`)}`}>Ask about customization</a>
    </div>
  );
}
