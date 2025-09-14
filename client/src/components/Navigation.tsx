import React from 'react';
import { Link } from 'wouter';

const Navigation = () => {
  return (
    <nav className="cosmic-bg border-b border-cosmic">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-bold text-sm">RT</span>
            </div>
            <span className="text-xl font-bold text-cosmic-gold cosmic-text-glow">
              The Righteous Teachers
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-yellow-100 hover:text-yellow-400 transition-colors">
              Home
            </Link>
            <Link href="/messages-in-black" className="text-yellow-100 hover:text-yellow-400 transition-colors">
              Messages in Black
            </Link>
            <Link href="/specials" className="text-yellow-100 hover:text-yellow-400 transition-colors">
              Specials
            </Link>
            <Link href="/audio-archives" className="text-yellow-100 hover:text-yellow-400 transition-colors">
              Audio Archives
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="text-yellow-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;