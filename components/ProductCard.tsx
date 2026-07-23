'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import type { Product } from '@/data/products';
import { useCart } from './CartProvider';

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="product-card">
      <Link className="product-image" href={`/shop/${product.slug}`}>
        <Image src={product.image} alt={product.name} fill sizes="(max-width: 760px) 100vw, 33vw" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <span className="wishlist-icon" aria-hidden="true"><Heart size={18} /></span>
      </Link>
      <div className="product-info">
        <div><Link href={`/shop/${product.slug}`}><h3>{product.name}</h3></Link><p>{product.category}</p></div>
        <strong>{product.price} SAR</strong>
      </div>
      <button className="add-button" onClick={() => addItem(product)}><ShoppingBag size={18} /> Add to cart</button>
    </article>
  );
}
