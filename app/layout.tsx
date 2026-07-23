import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Boutaleb Sweet | Pâtisserie & Gâteaux',
  description: 'Boutaleb Sweet — handmade cakes, pastries and desserts in Jeddah.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
