import React from 'react';

const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 cosmic-bg rounded-lg cosmic-glow">
        <h1 className="text-5xl md:text-6xl font-bold text-cosmic-gold cosmic-text-glow mb-6">
          The Righteous Teachers
        </h1>
        <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
          "The rewards of research is to find the facts that verify the truth. The Truth - there is nothing Greater!"
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
            Explore Messages
          </button>
          <button className="border border-cosmic text-cosmic-gold px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400/10 transition-colors">
            Audio Archives
          </button>
        </div>
      </section>

      {/* Content Sections */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-slate-800/50 p-6 rounded-lg border border-cosmic cosmic-glow">
          <h3 className="text-xl font-bold text-cosmic-gold mb-4">Messages in Black</h3>
          <p className="text-yellow-100 mb-4">
            Community-focused content and teachings that provide insight into truth and justice.
          </p>
          <a href="/messages-in-black" className="text-yellow-400 hover:text-yellow-300 font-semibold">
            Read More →
          </a>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-lg border border-cosmic cosmic-glow">
          <h3 className="text-xl font-bold text-cosmic-gold mb-4">Specials</h3>
          <p className="text-yellow-100 mb-4">
            Papers and documents by various authors sharing research and discoveries.
          </p>
          <a href="/specials" className="text-yellow-400 hover:text-yellow-300 font-semibold">
            View Specials →
          </a>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-lg border border-cosmic cosmic-glow">
          <h3 className="text-xl font-bold text-cosmic-gold mb-4">Audio Archives</h3>
          <p className="text-yellow-100 mb-4">
            Historical recordings including the famous Savior's Day 1958 speeches.
          </p>
          <a href="/audio-archives" className="text-yellow-400 hover:text-yellow-300 font-semibold">
            Listen Now →
          </a>
        </div>
      </section>

      {/* Featured Content */}
      <section className="cosmic-bg p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-cosmic-gold text-center mb-8">Featured Content</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-3">Latest Teaching</h4>
            <p className="text-yellow-100 text-sm">
              Explore the latest insights on truth-seeking through research and the importance of understanding our history.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-3">Historical Archive</h4>
            <p className="text-yellow-100 text-sm">
              Access historical recordings and documents that preserve important teachings for future generations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;