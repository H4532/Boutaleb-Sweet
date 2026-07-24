'use client';

import { FormEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, MapPin, PackageCheck, WalletCards } from 'lucide-react';
import { StoreHeader } from '@/components/StoreHeader';
import { useCart } from '@/components/CartProvider';

const formatDzd = (value: number) => `${new Intl.NumberFormat('fr-DZ').format(value)} DA`;

export default function CheckoutPage() {
  const { items, total } = useCart();
  const [delivery, setDelivery] = useState('domicile');
  const [payment, setPayment] = useState('baridimob');
  const [submitted, setSubmitted] = useState(false);

  const orderLines = useMemo(() => items.map((item) => `• ${item.quantity} × ${item.name} — ${formatDzd(item.price * item.quantity)}`).join('\n'), [items]);

  function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      'Bonjour Boutaleb Sweet, je souhaite confirmer cette commande :',
      '', orderLines, '', `Total produits : ${formatDzd(total)}`,
      `Nom : ${form.get('name')}`,
      `Téléphone : ${form.get('phone')}`,
      'Wilaya : Alger',
      `Commune : ${form.get('commune')}`,
      `Adresse : ${form.get('address')}`,
      `Livraison : ${delivery === 'domicile' ? 'À domicile' : 'Point de retrait'}`,
      `Paiement à l’avance : ${payment === 'baridimob' ? 'BaridiMob' : 'Virement'}`,
      `Note : ${form.get('note') || 'Aucune'}`
    ].join('\n');

    setSubmitted(true);
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  if (items.length === 0) {
    return <main><StoreHeader /><section className="page-hero compact container"><p className="eyebrow">Commande</p><h1>Votre panier est vide</h1><p>Ajoutez des produits avant de passer à la validation.</p><Link className="button button-primary" href="/shop">Voir la boutique</Link></section></main>;
  }

  return (
    <main>
      <StoreHeader />
      <section className="page-hero compact container">
        <p className="eyebrow">Finalisation sécurisée</p>
        <h1>Valider ma commande</h1>
        <p>Livraison disponible uniquement dans la wilaya d’Alger. La commande est confirmée après paiement à l’avance.</p>
      </section>

      <form className="checkout-layout container" onSubmit={submitOrder}>
        <div className="checkout-form">
          <section className="checkout-card">
            <div className="checkout-card-title"><MapPin size={21} /><div><h2>Coordonnées de livraison</h2><p>Informations nécessaires pour vous contacter.</p></div></div>
            <div className="form-grid">
              <label>Nom complet<input name="name" required autoComplete="name" placeholder="Nom et prénom" /></label>
              <label>Numéro de téléphone<input name="phone" required inputMode="tel" autoComplete="tel" placeholder="05 / 06 / 07…" /></label>
              <label>Wilaya<input name="wilaya" value="16 - Alger" readOnly /></label>
              <label>Commune<input name="commune" required placeholder="Votre commune à Alger" /></label>
              <label className="full-field">Adresse complète<input name="address" required autoComplete="street-address" placeholder="Quartier, rue, numéro…" /></label>
              <label className="full-field">Note de commande<textarea name="note" rows={4} placeholder="Date souhaitée, message sur le gâteau, allergies…" /></label>
            </div>
          </section>

          <section className="checkout-card">
            <div className="checkout-card-title"><PackageCheck size={21} /><div><h2>Mode de livraison</h2><p>Livraison disponible dans la wilaya d’Alger.</p></div></div>
            <div className="choice-grid">
              <label className={`choice-card ${delivery === 'domicile' ? 'selected' : ''}`}><input type="radio" name="delivery" value="domicile" checked={delivery === 'domicile'} onChange={() => setDelivery('domicile')} /><strong>Livraison à domicile</strong><span>À l’adresse indiquée</span></label>
              <label className={`choice-card ${delivery === 'retrait' ? 'selected' : ''}`}><input type="radio" name="delivery" value="retrait" checked={delivery === 'retrait'} onChange={() => setDelivery('retrait')} /><strong>Point de retrait</strong><span>Après confirmation avec le vendeur</span></label>
            </div>
          </section>

          <section className="checkout-card">
            <div className="checkout-card-title"><WalletCards size={21} /><div><h2>Paiement à l’avance</h2><p>La commande est préparée après confirmation du paiement.</p></div></div>
            <div className="choice-grid payment-choices">
              {[['baridimob','BaridiMob'],['transfer','Virement']].map(([value,label]) => <label key={value} className={`choice-card ${payment === value ? 'selected' : ''}`}><input type="radio" name="payment" value={value} checked={payment === value} onChange={() => setPayment(value)} /><strong>{label}</strong></label>)}
            </div>
          </section>
        </div>

        <aside className="order-summary checkout-summary">
          <h2>Résumé</h2>
          <div className="checkout-products">{items.map((item) => <div key={item.slug}><span>{item.quantity} × {item.name}</span><strong>{formatDzd(item.price * item.quantity)}</strong></div>)}</div>
          <div><span>Sous-total</span><strong>{formatDzd(total)}</strong></div>
          <div><span>Livraison à Alger</span><span>À confirmer</span></div>
          <div className="summary-total"><span>Total produits</span><strong>{formatDzd(total)}</strong></div>
          <button className="button button-primary" type="submit">Envoyer la commande</button>
          {submitted && <p className="checkout-success"><CheckCircle2 size={16} /> Résumé préparé dans WhatsApp.</p>}
          <p>Le paiement à l’avance et le tarif de livraison seront confirmés avant la préparation de votre commande.</p>
        </aside>
      </form>
    </main>
  );
}
