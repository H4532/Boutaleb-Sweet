'use client';

import { ShoppingBag } from 'lucide-react';
import type { Product } from '@/data/products';
import { useCart } from './CartProvider';

const formatPrice = (price: number) => new Intl.NumberFormat('fr-DZ').format(price);

export function ProductDetails({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="product-detail-copy">
      <p className="eyebrow">{product.category}</p>
      <h1>{product.name}</h1>
      <p className="detail-price">{formatPrice(product.price)} DA</p>
      <p className="detail-description">{product.description}</p>
      <div className="detail-list">
        <span>✓ Préparé sur commande</span>
        <span>✓ Ingrédients frais</span>
        <span>✓ Livraison disponible dans les 58 wilayas</span>
      </div>
      <button className="button button-primary detail-add" onClick={() => addItem(product)}><ShoppingBag size={19} /> Ajouter au panier</button>
      <a className="button button-secondary detail-whatsapp" href="/cart">Finaliser la commande</a>
    </div>
  );
}
