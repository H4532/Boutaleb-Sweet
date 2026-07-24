import Link from 'next/link';
import { LockKeyhole, PackagePlus, Settings, ShieldCheck } from 'lucide-react';
import { StoreHeader } from '@/components/StoreHeader';

export const metadata = {
  title: 'Accès administrateur | Boutaleb Sweet',
  description: 'Accès sécurisé à la gestion de la boutique Boutaleb Sweet.',
};

export default function AdminPage() {
  return (
    <main>
      <StoreHeader />
      <section className="admin-page container">
        <div className="admin-login-card">
          <span className="admin-lock"><LockKeyhole size={28} /></span>
          <p className="eyebrow">Espace privé</p>
          <h1>Accès administrateur</h1>
          <p className="admin-intro">La boutique est actuellement hébergée sur GitHub Pages. L’administration sécurisée utilise donc votre compte GitHub autorisé, sans mot de passe exposé dans le site public.</p>
          <a className="button button-primary admin-login-button" href="https://github.com/H4532/Boutaleb-Sweet" target="_blank" rel="noreferrer">Se connecter avec GitHub</a>
          <Link className="button button-secondary admin-back-button" href="/">Retour à la boutique</Link>
          <div className="admin-security-note"><ShieldCheck size={18} /><span>Aucun identifiant administrateur n’est enregistré dans le navigateur.</span></div>
        </div>

        <div className="admin-capabilities">
          <article><PackagePlus size={23} /><div><strong>Produits et prix</strong><span>Modifier le catalogue dans le fichier de données du dépôt.</span></div></article>
          <article><Settings size={23} /><div><strong>Contenu du site</strong><span>Mettre à jour les textes, images, livraison et paiement.</span></div></article>
          <article><ShieldCheck size={23} /><div><strong>Publication contrôlée</strong><span>Chaque modification est tracée puis publiée par GitHub Actions.</span></div></article>
        </div>
      </section>
    </main>
  );
}
