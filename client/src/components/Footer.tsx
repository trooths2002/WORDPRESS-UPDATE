import React from 'react';

const Footer = () => {
  return (
    <footer className="cosmic-bg border-t border-cosmic mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-cosmic-gold mb-4">The Righteous Teachers</h3>
            <p className="text-yellow-100 text-sm">
              "The rewards of research is to find the facts that verify the truth. The Truth - there is nothing Greater!"
            </p>
          </div>
          
          <div>
            <h4 className="text-cosmic-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-yellow-100">
              <li><a href="/messages-in-black" className="hover:text-yellow-400">Messages in Black</a></li>
              <li><a href="/specials" className="hover:text-yellow-400">Specials</a></li>
              <li><a href="/audio-archives" className="hover:text-yellow-400">Audio Archives</a></li>
              <li><a href="/general" className="hover:text-yellow-400">General Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-cosmic-gold font-semibold mb-4">Contact</h4>
            <p className="text-yellow-100 text-sm">
              Email: therighteousteachers@gmail.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-cosmic mt-8 pt-4 text-center text-sm text-yellow-100">
          <p>&copy; 2025 The Righteous Teachers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;