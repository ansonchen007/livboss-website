import Link from 'next/link';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <>
      <Header isActive={true} />
      <div className="min-h-screen bg-gradient-to-b from-paper-bg to-white flex items-center justify-center px-4 pt-20">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-champagne-gold/30">
              404
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-deep-brown mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-lg text-deep-brown/70 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-champagne-gold"></div>
            <div className="w-2 h-2 rounded-full bg-champagne-gold"></div>
            <div className="w-16 h-px bg-champagne-gold"></div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              Back to Home
            </Link>

            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/products" className="text-primary hover:underline">
                Products
              </Link>
              <span className="text-deep-brown/30">•</span>
              <Link href="/health-center" className="text-primary hover:underline">
                Health Center
              </Link>
              <span className="text-deep-brown/30">•</span>
              <Link href="/contact" className="text-primary hover:underline">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
