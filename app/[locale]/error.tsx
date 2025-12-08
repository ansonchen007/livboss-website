'use client';

import {useEffect} from 'react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <>
      <Header isActive={true} />
      <div className="min-h-screen bg-gradient-to-b from-paper-bg to-white flex items-center justify-center px-4 pt-20">
        <div className="max-w-2xl w-full text-center">
          {/* Error Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100">
              <svg
                className="w-12 h-12 text-red-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>

          {/* Error Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-deep-brown mb-4">
            Oops! Something went wrong
          </h1>

          {/* Error Message */}
          <p className="text-lg text-deep-brown/70 mb-8">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>

          {/* Error Details (in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mb-8 p-4 bg-red-50 rounded-lg text-left">
              <p className="text-sm text-red-800 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Go Home
            </Link>
          </div>

          {/* Contact Support */}
          <p className="mt-8 text-sm text-deep-brown/60">
            If the problem persists, please{' '}
            <Link href="/contact" className="text-primary hover:underline">
              contact our support team
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
