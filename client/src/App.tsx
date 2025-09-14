import React from 'react';
import { Router, Route, Switch } from 'wouter';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import MessagesInBlack from './pages/MessagesInBlack';
import Specials from './pages/Specials';
import AudioArchives from './pages/AudioArchives';
import Footer from './components/Footer';
import './styles/globals.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-yellow-100">
          <Router>
            <Navigation />
            <main className="container mx-auto px-4 py-8">
              <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/messages-in-black" component={MessagesInBlack} />
                <Route path="/specials" component={Specials} />
                <Route path="/audio-archives" component={AudioArchives} />
                <Route>
                  <div className="text-center py-16">
                    <h1 className="text-4xl font-bold text-yellow-400 mb-4">Page Not Found</h1>
                    <p className="text-yellow-100">The page you're looking for doesn't exist.</p>
                  </div>
                </Route>
              </Switch>
            </main>
            <Footer />
          </Router>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;