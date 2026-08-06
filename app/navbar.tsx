import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <header className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center border-b border-slate-200">
      {/* Scaled-up crisp PNG Logo */}
      <Link href="/" className="flex items-center">
        <img 
          src="/logo.png" 
          alt="LunchVault Logo" 
          className="h-14 w-auto object-contain"
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