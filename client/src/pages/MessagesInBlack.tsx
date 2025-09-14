import React from 'react';

const MessagesInBlack = () => {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-cosmic-gold cosmic-text-glow mb-4">
          Messages in Black
        </h1>
        <p className="text-yellow-100 text-lg max-w-2xl mx-auto">
          Community-focused content that provides insight into truth, justice, and the search for understanding.
        </p>
      </div>

      <div className="grid gap-6">
        <article className="bg-slate-800/50 p-6 rounded-lg border border-cosmic">
          <h2 className="text-xl font-bold text-cosmic-gold mb-3">
            The Importance of Research
          </h2>
          <p className="text-yellow-100 mb-4">
            Understanding the value of thorough research in discovering truth and building a foundation for knowledge.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-yellow-400">Community Teaching</span>
            <button className="text-yellow-400 hover:text-yellow-300 font-semibold">
              Read Full Article →
            </button>
          </div>
        </article>

        <article className="bg-slate-800/50 p-6 rounded-lg border border-cosmic">
          <h2 className="text-xl font-bold text-cosmic-gold mb-3">
            Truth and Justice
          </h2>
          <p className="text-yellow-100 mb-4">
            Exploring the relationship between seeking truth and promoting justice in our communities.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-yellow-400">Educational Content</span>
            <button className="text-yellow-400 hover:text-yellow-300 font-semibold">
              Read Full Article →
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MessagesInBlack;