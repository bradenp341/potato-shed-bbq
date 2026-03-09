import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Potato Shed BBQ</h3>
            <p className="text-amber-500 text-sm font-medium">The Midwest&apos;s Best</p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-stone-300 font-semibold text-sm uppercase tracking-wide mb-2">
              Location
            </h4>
            <p className="text-sm leading-relaxed">
              28229 Rochester Blvd<br />
              Randolph, MN 55065
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-stone-300 font-semibold text-sm uppercase tracking-wide mb-2">
              Contact
            </h4>
            <a
              href="mailto:info@potatoshedbbq.com"
              className="text-sm text-amber-500 hover:text-amber-400 transition-colors"
            >
              info@potatoshedbbq.com
            </a>
            <div className="mt-4 flex gap-3">
              <Link href="/menu" className="text-sm hover:text-white transition-colors">
                Menu
              </Link>
              <span className="text-stone-700">|</span>
              <Link href="/about" className="text-sm hover:text-white transition-colors">
                About
              </Link>
              <span className="text-stone-700">|</span>
              <Link href="/contact" className="text-sm hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-800 text-center text-xs text-stone-600">
          &copy; {new Date().getFullYear()} Potato Shed BBQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
