import type { Metadata } from 'next';
import { CartProvider } from '@/components/CartProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Boutaleb Sweet | Pâtisserie & Gâteaux',
  description: 'Boutaleb Sweet — handmade cakes, pastries and desserts in Jeddah.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
