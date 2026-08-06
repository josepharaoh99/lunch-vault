import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <header className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center border-b border-slate-200">
      {/* Scaled-up PNG Logo without text */}
      <Link href="/" className="flex items-center">
        <Image 
          src="/logo.png" 
          alt="LunchVault Logo" 
          width={64} 
          height={64} 
          className="object-contain h-14 w-auto"
          priority
        />
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-4">
        <Link
          href="/"
          className="text-slate-600 font-semibold hover:text-slate-900 transition text-sm sm:text-base px-3 py-2"
        >
          HOME
        </Link>
        <Link
          href="/join"
          className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm sm:text-base"
        >
          JOIN
        </Link>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between">
      <Navbar />

      {/* Customer Hero Section */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center flex-1 flex flex-col justify-center items-center">
        <Image
          src="/logo.png"
          alt="LunchVault"
          width={112}
          height={112}
          className="mb-6 object-contain"
        />
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 text-slate-900">
          Catering Rewards Are <span className="text-red-600">COMING SOON</span>
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-lg">
          Earn exclusive rewards and perks on corporate catering orders from your favorite local restaurants.
        </p>
        <div className="inline-block bg-red-100 text-red-700 font-semibold px-6 py-3 rounded-full text-sm">
          🚀 Platform launching soon in select trade areas.
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-slate-500 border-t border-slate-200">
        <p className="mb-2">
          Questions? Email us directly at{' '}
          <a
            href="contact:hello@getlunchvault.com"
            className="text-red-600 font-semibold underline"
          >
            contact@getlunchvault.com or call us at (513) 399-6930
          </a>
        </p>
        <p>© {new Date().getFullYear()} LunchVault. All rights reserved.</p>
      </footer>
    </main>
  );
}