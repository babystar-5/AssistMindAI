import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md px-[100px]  py-[18px] w-[1440px] mx-auto">
      <div className="max-w-7xl mx-auto  flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="AssistMind AI Logo"
            width={201} // adjust as needed
            height={32}
            priority
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-8 text-gray-600 text-lg font-medium font-semibold">
          <Link href="#home" className="text-secondary transition font-bold">Home</Link>
          <Link href="#product" className="hover:text-secondary font-medium transition">Feature</Link>
          <Link href="#features" className="hover:text-secondary transition">How it works</Link>
          <Link href="#pricing" className="hover:text-secondary transition">Resources</Link>
          <Link href="#faq" className="hover:text-secondary transition">Pricing</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-secondary text-white text-xl w-[140px] h-[46px] px-[14px] py-[9px] rounded-[12px] hover:bg-indigo-600 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Icon (optional for later) */}
        <div className="md:hidden">
          {/* You'll add a menu toggle here if making it responsive */}
        </div>
      </div>
    </header>
  );
}