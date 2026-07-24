'use client';

import { FormEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import { CheckCircle2, MapPin, PackageCheck, WalletCards } from 'lucide-react';
import { StoreHeader } from '@/components/StoreHeader';
import { useCart } from '@/components/CartProvider';

const wilayas = [
  '01 - Adrar','02 - Chlef','03 - Laghouat','04 - Oum El Bouaghi','05 - Batna','06 - Béjaïa','07 - Biskra','08 - Béchar','09 - Blida','10 - Bouira','11 - Tamanrasset','12 - Tébessa','13 - Tlemcen','14 - Tiaret','15 - Tizi Ouzou','16 - Alger','17 - Djelfa','18 - Jijel','19 - Sétif','20 - Saïda','21 - Skikda','22 - Sidi Bel Abbès','23 - Annaba','24 - Guelma','25 - Constantine','26 - Médéa','27 - Mostaganem','28 - M’Sila','29 - Mascara','30 - Ouargla','31 - Oran','32 - El Bayadh','33 - Illizi','34 - Bordj Bou Arréridj','35 - Boumerdès','36 - El Tarf','37 - Tindouf','38 - Tissemsilt','39 - El Oued','40 - Khenchela','41 - Souk Ahras','42 - Tipaza','43 - Mila','44 - Aïn Defla','45 - Naâma','46 - Aïn Témouchent','47 - Ghardaïa','48 - Relizane','49 - Timimoun','50 - Bordj Badji Mokhtar','51 - Ouled Djellal','52 - Béni Abbès','53 - In Salah','54 - In Guezzam','55 - Touggourt','56 - Djanet','57 - El M’Ghair','58 - El Meniaa'
];

const formatDzd = (value: number) => `${new Intl.NumberFormat('fr-DZ').format(value)} DA`;

export default function CheckoutPage() {
  const { items, total } = useCart();
  const [delivery, setDelivery] = useState('domicile');
  const [payment, setPayment] = useState('cod');
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
      `Wilaya : ${form.get('wilaya')}`,
      `Commune : ${form.get('commune')}`,
      `Adresse : ${form.get('address')}`,
      `Livraison : ${delivery === 'domicile' ? 'À domicile' : 'Bureau de livraison'}`,
      `Paiement : ${payment === 'cod' ? 'Paiement à la livraison' : payment === 'baridimob' ? 'BaridiMob' : 'Virement'}`,
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
        <p>Renseignez vos coordonnées. Les frais et délais de livraison seront confirmés avant expédition.</p>
      </section>

      <form className="checkout-layout container" onSubmit={submitOrder}>
        <div className="checkout-form">
          <section className="checkout-card">
            <div className="checkout-card-title"><MapPin size={21} /><div><h2>Coordonnées de livraison</h2><p>Informations nécessaires pour vous contacter.</p></div></div>
            <div className="form-grid">
              <label>Nom complet<input name="name" required autoComplete="name" placeholder="Nom et prénom" /></label>
              <label>Numéro de téléphone<input name="phone" required inputMode="tel" autoComplete="tel" placeholder="05 / 06 / 07…" /></label>
              <label>Wilaya<select name="wilaya" required defaultValue=""><option value="" disabled>Sélectionnez votre wilaya</option>{wilayas.map((wilaya) => <option key={wilaya}>{wilaya}</option>)}</select></label>
              <label>Commune<input name="commune" required placeholder="Votre commune" /></label>
              <label className="full-field">Adresse complète<input name="address" required autoComplete="street-address" placeholder="Quartier, rue, numéro…" /></label>
              <label className="full-field">Note de commande<textarea name="note" rows={4} placeholder="Date souhaitée, message sur le gâteau, allergies…" /></label>
            </div>
          </section>

          <section className="checkout-card">
            <div className="checkout-card-title"><PackageCheck size={21} /><div><h2>Mode de livraison</h2><p>Le tarif dépend de la wilaya et de la commune.</p></div></div>
            <div className="choice-grid">
              <label className={`choice-card ${delivery === 'domicile' ? 'selected' : ''}`}><input type="radio" name="delivery" value="domicile" checked={delivery === 'domicile'} onChange={() => setDelivery('domicile')} /><strong>Livraison à domicile</strong><span>À l’adresse indiquée</span></label>
              <label className={`choice-card ${delivery === 'bureau' ? 'selected' : ''}`}><input type="radio" name="delivery" value="bureau" checked={delivery === 'bureau'} onChange={() => setDelivery('bureau')} /><strong>Bureau de livraison</strong><span>Retrait auprès du transporteur</span></label>
            </div>
          </section>

          <section className="checkout-card">
            <div className="checkout-card-title"><WalletCards size={21} /><div><h2>Mode de paiement</h2><p>Le paiement est confirmé avec le vendeur.</p></div></div>
            <div className="choice-grid payment-choices">
              {[['cod','Paiement à la livraison'],['baridimob','BaridiMob'],['transfer','Virement']].map(([value,label]) => <label key={value} className={`choice-card ${payment === value ? 'selected' : ''}`}><input type="radio" name="payment" value={value} checked={payment === value} onChange={() => setPayment(value)} /><strong>{label}</strong></label>)}
            </div>
          </section>
        </div>

        <aside className="order-summary checkout-summary">
          <h2>Résumé</h2>
          <div className="checkout-products">{items.map((item) => <div key={item.slug}><span>{item.quantity} × {item.name}</span><strong>{formatDzd(item.price * item.quantity)}</strong></div>)}</div>
          <div><span>Sous-total</span><strong>{formatDzd(total)}</strong></div>
          <div><span>Livraison</span><span>À confirmer</span></div>
          <div className="summary-total"><span>Total produits</span><strong>{formatDzd(total)}</strong></div>
          <button className="button button-primary" type="submit">Envoyer la commande</button>
          {submitted && <p className="checkout-success"><CheckCircle2 size={16} /> Résumé préparé dans WhatsApp.</p>}
          <p>En envoyant la commande, vous demandez une confirmation de disponibilité, du tarif de livraison et du délai.</p>
        </aside>
      </form>
    </main>
  );
}
