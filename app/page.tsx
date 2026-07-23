import Image from 'next/image';
import Link from 'next/link';
import { CakeSlice, Heart, Instagram, MapPin, Menu, Search, ShoppingBag, Sparkles } from 'lucide-react';

const products = [
  {
    name: 'Chocolate Celebration Cake',
    price: '180 SAR',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
    tag: 'Bestseller',
  },
  {
    name: 'Strawberry Dream Cake',
    price: '165 SAR',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85',
    tag: 'New',
  },
  {
    name: 'Mini Dessert Box',
    price: '95 SAR',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1000&q=85',
    tag: 'Popular',
  },
];

const categories = [
  ['Custom Cakes', 'Made for birthdays and special moments'],
  ['Pastries', 'Freshly prepared sweet bites'],
  ['Dessert Boxes', 'Beautiful assortments for gifting'],
];

export default function HomePage() {
  return (
    <main>
      <div className="announcement">Freshly made with love • Delivery across Jeddah • WhatsApp 0538007073</div>

      <header className="site-header container">
        <button className="icon-button mobile-only" aria-label="Open menu"><Menu size={21} /></button>
        <Link href="/" className="brand" aria-label="Boutaleb Sweet home">
          <span className="brand-mark"><CakeSlice size={24} /></span>
          <span><strong>BOUTALEB</strong><small>SWEET · JEDDAH</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="#shop">Shop</Link>
          <Link href="#categories">Collections</Link>
          <Link href="#about">Our story</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search"><Search size={20} /></button>
          <button className="icon-button desktop-only" aria-label="Wishlist"><Heart size={20} /></button>
          <button className="bag-button" aria-label="Shopping cart"><ShoppingBag size={20} /><span>0</span></button>
        </div>
      </header>

      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> Handmade in Jeddah</p>
          <h1>Sweet moments,<br /><em>beautifully made.</em></h1>
          <p>Elegant cakes, pastries and dessert boxes prepared with care for celebrations, gifts and everyday cravings.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#shop">Shop our sweets</Link>
            <a className="button button-secondary" href="https://wa.me/966538007073">Order on WhatsApp</a>
          </div>
          <div className="hero-note"><span>Made to order</span><span>Fresh ingredients</span><span>Local delivery</span></div>
        </div>
        <div className="hero-visual">
          <Image
            src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1400&q=90"
            alt="Elegant celebration cake by Boutaleb Sweet"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="floating-card"><strong>Made with love</strong><span>صنعت بكل حب</span></div>
        </div>
      </section>

      <section id="categories" className="section container">
        <div className="section-heading">
          <div><p className="eyebrow">Explore</p><h2>Shop by collection</h2></div>
          <Link href="#shop">View all products →</Link>
        </div>
        <div className="category-grid">
          {categories.map(([title, description], index) => (
            <article className={`category-card category-${index + 1}`} key={title}>
              <span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="shop" className="section products-section">
        <div className="container">
          <div className="section-heading centered">
            <div><p className="eyebrow">Our favourites</p><h2>Best sellers</h2><p>Customer-loved treats, freshly prepared for every order.</p></div>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-image">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  <span className="product-tag">{product.tag}</span>
                  <button aria-label={`Add ${product.name} to wishlist`}><Heart size={18} /></button>
                </div>
                <div className="product-info"><div><h3>{product.name}</h3><p>Handmade to order</p></div><strong>{product.price}</strong></div>
                <button className="add-button"><ShoppingBag size={18} /> Add to cart</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="story container section">
        <div className="story-image"><Image src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=85" alt="Fresh Boutaleb Sweet pastries" fill sizes="(max-width: 900px) 100vw, 50vw" /></div>
        <div className="story-copy"><p className="eyebrow">Our story</p><h2>Small details make every celebration sweeter.</h2><p>Boutaleb Sweet creates beautiful handmade desserts in Jeddah. Every order is prepared with attention to flavour, presentation and the moment you are celebrating.</p><a className="text-link" href="https://www.tiktok.com/@boutaleb_sweet_jeddah"><Instagram size={18} /> Follow our latest creations</a></div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-inner">
          <div><p className="eyebrow">Ready to order?</p><h2>Let us make your next sweet moment.</h2></div>
          <div className="contact-actions"><a className="button button-light" href="https://wa.me/966538007073">WhatsApp us</a><p><MapPin size={17} /> Jeddah, Saudi Arabia</p></div>
        </div>
      </section>

      <footer className="footer container">
        <div className="brand"><span className="brand-mark"><CakeSlice size={24} /></span><span><strong>BOUTALEB</strong><small>SWEET · JEDDAH</small></span></div>
        <p>Handmade cakes, pastries and desserts. صنعت بكل حب</p>
        <div><a href="tel:+966538007073">0538007073</a><a href="https://www.tiktok.com/@boutaleb_sweet_jeddah">TikTok</a></div>
      </footer>
    </main>
  );
}
