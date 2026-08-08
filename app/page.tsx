import Link from 'next/link';

function Navbar() {
  return (
    <header className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      {/* Crisp PNG Logo */}
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
          JOIN TODAY!
        </Link>
      </nav>
    </header>
  );
}

export default function Home() {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Monthly Grand Prize',
      description: 'Store leadership sets a high-value monthly reward (such as Free Catering or VIP perks) to entice high-spending corporate clients.',
      badge: 'Store Setup',
    },
    {
      num: '02',
      title: 'Promote to Local Corporate Clients',
      description: 'Announce your monthly competition on social media and with physical promotional materials. Give corporate spenders a compelling reason to choose your store over local competitors.',
      badge: 'Marketing',
    },
    {
      num: '03',
      title: 'Private, Low-Friction Onboarding',
      description: 'Catering clients create a quick account, accept standard EULA terms, and select an anonymous user alias to ensure complete individual privacy.',
      badge: 'User Privacy',
    },
    {
      num: '04',
      title: 'Snap & Upload Receipts (Zero POS Needed)',
      description: 'Clients order catering normally, snap a photo of their physical receipt, and upload it via GetLunchVault.com. No POS integration or IT approval required!',
      badge: 'Zero Friction',
    },
    {
      num: '05',
      title: 'Human Receipt Verification',
      description: 'Our team manually reviews every uploaded receipt for authenticity, accurate order totals, and store location validation.',
      badge: 'Security',
    },
    {
      num: '06',
      title: 'Live Competitive Leaderboard',
      description: 'Users track their ranking on a live real-time leaderboard. Gamified competition motivates corporate clients to place additional orders to hold their top rank.',
      badge: 'Gamification',
    },
    {
      num: '07',
      title: 'Monthly Winner Crowned',
      description: 'At the end of each month, the top-ranked catering customer wins your store’s grand prize—locking in long-term customer loyalty and repeat high-margin revenue.',
      badge: 'ROI & Growth',
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200/60 text-red-700 font-bold px-3.5 py-1.5 rounded-full text-xs sm:text-sm mb-6">
          <span>🚀</span> Gamified Catering Loyalty Platform
        </div>
        <h1 className="text-3xl sm:text-6xl font-black tracking-tight mb-4 sm:mb-6 text-slate-900 leading-tight">
          Turn Corporate Catering into a <span className="text-red-600">Competitive Sport</span>
        </h1>
        <p className="text-base sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          LunchVault helps fast-casual operators incentivize corporate spenders, drive thousands in high-margin catering revenue, and reward top accounts—all with <strong className="text-slate-900">zero POS integration</strong>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 px-2">
          <Link
            href="/join"
            className="w-full sm:w-auto bg-red-600 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 rounded-xl hover:bg-red-700 transition shadow-lg shadow-red-600/20 text-center"
          >
            Start Free Operator Trial
          </Link>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3.5 rounded-xl hover:bg-slate-100 transition text-center"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Overview Feature Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="text-2xl sm:text-3xl mb-3">🏢</div>
            <h3 className="text-base sm:text-lg font-bold mb-2">Target High Spenders</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Administrative assistants and corporate spenders use company credit cards. Give them a reason to choose your store every time.
            </p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="text-2xl sm:text-3xl mb-3">⚡</div>
            <h3 className="text-base sm:text-lg font-bold mb-2">Zero POS Integration</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              No complex corporate IT approvals. Customers simply snap a receipt photo to log points on your local store leaderboard.
            </p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="text-2xl sm:text-3xl mb-3">🏆</div>
            <h3 className="text-base sm:text-lg font-bold mb-2">Leaderboard Urgency</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Live monthly rankings turn catering orders into a friendly competition, driving repeat high-ticket orders month after month.
            </p>
          </div>
        </div>
      </section>

      {/* 7-Step Workflow Timeline (Mobile Optimized) */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2 sm:mb-3">
            How LunchVault Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg">
            A simple 7-step process designed for maximum store growth with zero operational friction.
          </p>
        </div>

        <div className="relative border-l-2 border-red-200 ml-3 sm:ml-8 space-y-6 sm:space-y-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Step Circle Marker */}
              <div className="absolute -left-[17px] top-0.5 sm:top-0 w-8 h-8 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center ring-4 ring-slate-50 shadow-sm">
                {step.num}
              </div>

              {/* Step Card Content */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:border-red-200 transition">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md">
                    {step.badge}
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="max-w-4xl mx-4 sm:mx-auto my-8 sm:my-12 bg-slate-900 text-white p-6 sm:p-12 rounded-2xl sm:rounded-3xl text-center relative overflow-hidden shadow-xl">
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-3 sm:mb-4">
          Ready to Claim Market Exclusivity?
        </h2>
        <p className="text-slate-300 text-sm sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
          We accept only <strong className="text-white">one store per market trade area</strong> to ensure maximum competitive advantage. Start your 30-day free trial today.
        </p>
        <Link
          href="/join"
          className="inline-block w-full sm:w-auto bg-red-600 text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-xl hover:bg-red-700 transition shadow-lg shadow-red-600/30"
        >
          Claim Your Store Territory
        </Link>
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