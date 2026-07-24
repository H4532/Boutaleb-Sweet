import type { Metadata } from 'next';
import { CartProvider } from '@/components/CartProvider';
import './globals.css';
import './commerce.css';

export const metadata: Metadata = {
  title: 'Boutaleb Sweet Algérie | Pâtisserie & Gâteaux',
  description: 'Boutaleb Sweet Algérie — gâteaux, pâtisseries et box gourmandes préparés sur commande avec livraison nationale.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
