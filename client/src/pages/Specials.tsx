import React from 'react';

const Specials = () => {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-cosmic-gold cosmic-text-glow mb-4">
          Specials
        </h1>
        <p className="text-yellow-100 text-lg max-w-2xl mx-auto">
          Papers and documents by various authors sharing their research and discoveries.
        </p>
      </div>

      <div className="grid gap-6">
        <article className="bg-slate-800/50 p-6 rounded-lg border border-cosmic">
          <h2 className="text-xl font-bold text-cosmic-gold mb-3">
            Historical Research Papers
          </h2>
          <p className="text-yellow-100 mb-4">
            Collection of research papers exploring historical events and their significance.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-yellow-400">Research Archive</span>
            <button className="text-yellow-400 hover:text-yellow-300 font-semibold">
              Download PDF →
            </button>
          </div>
        </article>

        <article className="bg-slate-800/50 p-6 rounded-lg border border-cosmic">
          <h2 className="text-xl font-bold text-cosmic-gold mb-3">
            Educational Essays
          </h2>
          <p className="text-yellow-100 mb-4">
            Thoughtful essays on education, philosophy, and the pursuit of knowledge.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-yellow-400">Member Content</span>
            <button className="text-yellow-400 hover:text-yellow-300 font-semibold">
              Access Content →
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Specials;