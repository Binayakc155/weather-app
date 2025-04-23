// src/app/layout.tsx

import React from 'react';
import Link from 'next/link';
import './globals.css';  // Import your global styles (already set up with Tailwind)

export const metadata = 
{
  title: 'Weather App',
  description: 'Check the weather for any city around the world!',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
      <body className="font-sans bg-gradient-to-r from-blue-200 to-indigo-300">
        {/* Header */}
        <header className="bg-blue-600 text-white py-4">
          <nav className="max-w-7xl mx-auto flex justify-between items-center px-4">
            <Link href="/" className="text-3xl font-bold hover:text-blue-200">
              Weather App
            </Link>
            <div className="flex space-x-4">
              <Link href="/" className="text-lg hover:text-blue-200">Home</Link>
              <Link href="#about" className="text-lg hover:text-blue-200">About</Link>
              <Link href="#contact" className="text-lg hover:text-blue-200">Contact</Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen py-4 px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white py-4">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Weather App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
