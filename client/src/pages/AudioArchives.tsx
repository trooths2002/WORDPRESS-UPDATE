import React from 'react';

const AudioArchives = () => {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-cosmic-gold cosmic-text-glow mb-4">
          Audio Archives
        </h1>
        <p className="text-yellow-100 text-lg max-w-2xl mx-auto">
          Historical recordings including the famous Savior's Day 1958 speeches and other important audio content.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="bg-slate-800/50 p-6 rounded-lg border border-cosmic">
          <h2 className="text-xl font-bold text-cosmic-gold mb-3">
            Savior's Day 1958 - Historical Recording
          </h2>
          <p className="text-yellow-100 mb-4">
            A significant historical recording that preserves important teachings for future generations.
          </p>
          <div className="bg-slate-700/50 p-4 rounded-lg mb-4">
            <div className="flex items-center space-x-4">
              <button className="w-12 h-12 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-yellow-100 text-sm">Duration: 45:32</span>
                  <span className="text-yellow-400 text-sm">MP3 Format</span>
                </div>
                <div className="w-full bg-slate-600 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
            </div>
          </div>
          <button className="text-yellow-400 hover:text-yellow-300 font-semibold">
            Download Audio →
          </button>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-lg border border-cosmic">
          <h2 className="text-xl font-bold text-cosmic-gold mb-3">
            Educational Lectures
          </h2>
          <p className="text-yellow-100 mb-4">
            Collection of educational lectures and discussions on various topics.
          </p>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center py-2 border-b border-slate-600">
              <span className="text-yellow-100">Lecture Series 1</span>
              <span className="text-yellow-400 text-sm">25:14</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-600">
              <span className="text-yellow-100">Lecture Series 2</span>
              <span className="text-yellow-400 text-sm">32:08</span>
            </div>
          </div>
          <button className="text-yellow-400 hover:text-yellow-300 font-semibold">
            Browse All Lectures →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioArchives;