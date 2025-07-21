import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow-md lg:px-[100px] lg:py-[18px] px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
        <nav className="hidden lg:flex space-x-8 text-gray-600 xl:text-lg text-sm font-medium font-semibold">
          <Link href="#home" className="text-secondary transition font-bold">
            Home
          </Link>
          <Link
            href="#product"
            className="hover:text-secondary font-medium transition"
          >
            Feature
          </Link>
          <Link href="#features" className="hover:text-secondary transition">
            How it works
          </Link>
          <Link href="#pricing" className="hover:text-secondary transition">
            Resources
          </Link>
          <Link href="#faq" className="hover:text-secondary transition">
            Pricing
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <button className="bg-secondary text-white text-xl w-[140px] h-[46px] px-[14px] py-[9px] rounded-[12px] hover:hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl text-indigo-600"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="lg:hidden">
        {isOpen && (
          <nav className="lg:hidden px-4 pb-4 pt-2 space-y-4">
            <Link href="#" className="block text-indigo-600 font-medium">
              Home
            </Link>
            <Link href="#" className="block hover:text-indigo-600">
              Feature
            </Link>
            <Link href="#" className="block hover:text-indigo-600">
              How it works
            </Link>
            <Link href="#" className="block hover:text-indigo-600">
              Resources
            </Link>
            <Link href="#" className="block hover:text-indigo-600">
              Pricing
            </Link>
            <Link
              href="#"
              className="block bg-indigo-600 text-white px-5 py-2 rounded-md text-center font-medium hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
