import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B0E29] text-white px-6 py-10">
      <div className="flex flex-col text-center md:flex-row md:text-left justify-between">
        <div className="w-full md:w-1/4 mb-4">
          <Image
            src="/assets/logo-footer.png"
            alt="Footer Logo"
            width={201} // adjust as needed
            height={32}
            className="mb-2"
          />
          <p className="text-sm text-gray-300">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Quick links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#how_it_works">How it works</Link>
            </li>
            <li>
              <Link href="#resources">Resources</Link>
            </li>
            <li>
              <Link href="#pricing">Pricing</Link>
            </li>
            <li>
              <Link href="#faqs">FAQs</Link>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Quick links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link href="#get_demo">Get A Demo</Link>
            </li>
            <li>
              <Link href="#start_free_trial">Start Free Trial</Link>
            </li>
            <li>
              <Link href="#privacy_policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h4 className="font-semibold mb-2">Contact us</h4>
          <Link href="email" className="text-sm text-gray-300">
            <Image
              src="/assets/icon-email.png"
              alt="Email Icon"
              width={20} // adjust as needed
              height={18}
              className="inline-block mr-2 "
            />
            <span className="inline-block text-base weight-500">
              Info@assistantmindai.com
            </span>
          </Link>

          <div className="space-x-4 mt-2">
            <Image
              src="/assets/icon-facebook.png"
              alt="Facebook Icon"
              width={24} // adjust as needed
              height={24}
              className="inline-block"
            />
            <Image
              src="/assets/icon-linkedin.png"
              alt="LinkedIn Icon"
              width={24} // adjust as needed
              height={24}
              className="inline-block"
            />
            <Image
              src="/assets/icon-gmail.png"
              alt="Gmail Icon"
              width={24} // adjust as needed
              height={24}
              className="inline-block"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
