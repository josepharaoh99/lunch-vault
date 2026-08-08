import Link from 'next/link';

function Navbar() {
  return (
    <header className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      {/* Crisp PNG Logo without blur */}
      <Link href="/" className="flex items-center">
        <img 
          src="/logo.png" 
          alt="LunchVault Logo" 
          className="h-10 sm:h-12 w-auto object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-2 sm:gap-4">
        <Link
          href="/"
          className="text-slate-700 font-semibold hover:text-red-600 transition text-xs sm:text-base px-2 sm:px-3 py-2"
        >
          HOME
        </Link>
        <Link
          href="/join"
          className="bg-red-600 text-white font-semibold px-3 sm:px-4 py-2 rounded-xl hover:bg-red-700 transition shadow-sm hover:shadow text-xs sm:text-base whitespace-nowrap"
        >
          JOIN AS OPERATOR
        </Link>
      </nav>
    </header>
  );
}

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/60 text-red-700 font-bold px-3.5 py-1.5 rounded-full text-xs sm:text-sm mb-6">
          🔒 Exclusive Territory Reservation
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 sm:mb-6 text-slate-900 leading-tight">
          Low-Friction Catering Loyalty Growth
        </h1>
        <p className="text-base sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Designed specifically for fast-casual operators and management. Drive thousands in high-margin B2B catering revenue with <strong className="text-slate-900">zero POS integration</strong>.
        </p>
      </section>

      {/* How it Works Overview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200/80">
          <div className="text-2xl sm:text-3xl mb-3">1️⃣</div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">The Problem</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Corporate spenders use company cards and need extra motivation to cater with your store over competitors.
          </p>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200/80">
          <div className="text-2xl sm:text-3xl mb-3">2️⃣</div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">The Solution</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Clients snap photos of catering receipts, upload them, and compete on your store leaderboard for special rewards.
          </p>
        </div>

        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200/80">
          <div className="text-2xl sm:text-3xl mb-3">3️⃣</div>
          <h3 className="text-lg sm:text-xl font-bold mb-2">Zero Friction</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            No POS integrations needed. EULA compliant, receipt verified, and physical promotional materials provided.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section id="pilot-form" className="max-w-xl mx-auto px-4 sm:px-6 py-8 sm:py-16 w-full">
        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-md border border-slate-200/80">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-slate-900 mb-2">
            Start Your Free 30-Day Trial
          </h2>
          <p className="text-slate-600 text-center mb-6 text-xs sm:text-sm leading-relaxed">
            We provide graphics, materials, and tech. First month is free, with zero obligation to continue if results are not satisfactory.
          </p>

          <form
            action="https://formspree.io/f/xljrrkaq"
            method="POST"
            className="flex flex-col gap-4"
          >
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-slate-300 px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                Store / Location Name
              </label>
              <input
                type="text"
                name="store"
                required
                className="w-full border border-slate-300 px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition"
                placeholder="Chick-fil-A Midtown"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-slate-300 px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition"
                placeholder="john@store.com"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full border border-slate-300 px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition"
                placeholder="(555) 000-0000"
              />
            </div>

            <button
              type="submit"
              className="bg-red-600 text-white font-bold text-base py-3.5 rounded-xl hover:bg-red-700 transition shadow-lg shadow-red-600/20 mt-2 cursor-pointer"
            >
              Claim Free Store Pilot
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 sm:py-8 px-4 text-xs sm:text-sm text-slate-500 border-t border-slate-200 bg-white">
        <p className="mb-2 leading-relaxed">
          Questions? Email us directly at{' '}
          <a
            href="mailto:contact@getlunchvault.com"
            className="text-red-600 font-semibold underline"
          >
            contact@getlunchvault.com
          </a>{' '}
          or call us at <span className="text-slate-700 font-semibold whitespace-nowrap">(513) 399-6930</span>
        </p>
        <p>© {new Date().getFullYear()} LunchVault. All rights reserved.</p>
      </footer>
    </main>
  );
}