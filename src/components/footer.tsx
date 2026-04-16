import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Promotion", href: "/#" },
  { name: "News & Events", href: "/about#news" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "About Us", href: "/about" },
];

export function Footer() {
  return (
    <footer className="border-t border-dark-700 bg-dark-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Links + Social */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-gray-400 transition-colors hover:text-coral-400"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-dark-700 text-gray-400 transition-colors hover:bg-coral-500 hover:text-white"
              aria-label="Twitter"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-dark-700 text-gray-400 transition-colors hover:bg-coral-500 hover:text-white"
              aria-label="Facebook"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-dark-700 pt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; All rights reserved. Claritas&trade; is registered trademark of Netster.
          </p>
        </div>
      </div>
    </footer>
  );
}
