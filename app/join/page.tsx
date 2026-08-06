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

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
          Low Friction Catering Loyalty Growth
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Designed specifically for fast-casual operators and management. Drive thousands in high-margin B2B catering revenue with zero POS integration.
        </p>
      </section>

      {/* How it Works */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="text-3xl mb-4">1️⃣</div>
          <h3 className="text-xl font-bold mb-2">The Problem</h3>
          <p className="text-slate-600">
            Corporate spenders use company cards and need motivation to cater with your store over competitors.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="text-3xl mb-4">2️⃣</div>
          <h3 className="text-xl font-bold mb-2">The Solution</h3>
          <p className="text-slate-600">
            Clients snap photos of catering receipts, upload them, and compete on your store leaderboard for special rewards.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="text-3xl mb-4">3️⃣</div>
          <h3 className="text-xl font-bold mb-2">Zero Friction</h3>
          <p className="text-slate-600">
            No POS integrations needed. EULA compliant, receipt verified, and physical promotional materials provided.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section id="pilot-form" className="max-w-xl mx-auto px-6 py-16">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200">
          <h3 className="text-2xl font-bold text-center mb-2">
            Start a Free 30-Day Trial
          </h3>
          <p className="text-slate-600 text-center mb-6 text-sm">
            We provide graphics, materials, and tech. First month free, no obligation.
          </p>

          <form
            action="https://formspree.io/f/xljrrkaq"
            method="POST"
            className="flex flex-col gap-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Store / Location Name</label>
              <input
                type="text"
                name="store"
                required
                className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm"
                placeholder="Chick-fil-A Midtown"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm"
                placeholder="john@store.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full border border-slate-300 px-3 py-2 rounded-lg text-sm"
                placeholder="(555) 000-0000"
              />
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition mt-2"
            >
              Claim Free Store Pilot
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-slate-500 border-t border-slate-200">
        <p className="mb-2">
          Questions? Email us directly at{' '}
          <a
            href="mailto:contact@getlunchvault.com"
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