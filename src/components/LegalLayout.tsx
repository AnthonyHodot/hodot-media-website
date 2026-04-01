import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="bg-white/60 backdrop-blur-sm border-b border-slate-100 py-6 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-orange-600 transition-colors font-medium">
            <ArrowLeft size={20} />
            <span>Zurück zur Startseite</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              H
            </div>
            <span className="text-lg font-bold tracking-tight hidden sm:inline">HodotMedia</span>
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-12">{title}</h1>
          <div className="prose prose-slate max-w-none">
            {children}
          </div>
        </div>
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} HodotMedia. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
