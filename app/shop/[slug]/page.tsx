import Image from 'next/image';
import { notFound } from 'next/navigation';
import { StoreHeader } from '@/components/StoreHeader';
import { ProductDetails } from '@/components/ProductDetails';
import { getProduct, products } from '@/data/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <main>
      <StoreHeader />
      <section className="container product-detail">
        <div className="product-detail-image">
          <Image src={product.image} alt={product.name} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <ProductDetails product={product} />
      </section>
    </main>
  );
}
