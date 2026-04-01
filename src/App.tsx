/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  Globe, 
  TrendingUp, 
  Search, 
  AlertCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Start', href: '#start' },
  { name: 'Leistungen', href: '#leistungen' },
  { name: 'Über uns', href: '#ueber-uns' },
  { name: 'Referenzen', href: '#referenzen' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontakt', href: '#kontakt' },
];

const FAQS = [
  {
    q: "Was ist Webentwicklung eigentlich?",
    a: "Webentwicklung umfasst die Erstellung und Umsetzung von Webseiten. Ziel ist eine funktionale, moderne und benutzerfreundliche Online-Präsenz, die Kunden überzeugt."
  },
  {
    q: "Warum ist eine professionelle Webseite wichtig?",
    a: "Eine professionelle Webseite ist oft der erste Eindruck eines Unternehmens und entscheidet über Vertrauen und Anfragen."
  },
  {
    q: "Was bedeutet responsives Design?",
    a: "Die Website passt sich automatisch an alle Geräte an und funktioniert auf Smartphone, Tablet und Desktop optimal."
  },
  {
    q: "Wie wichtig sind Ladezeiten?",
    a: "Sehr wichtig. Langsame Webseiten verlieren Kunden und ranken schlechter bei Google."
  },
  {
    q: "Was umfasst professionelle Webentwicklung?",
    a: "Design, Technik, Struktur, Performance und Conversion-Optimierung."
  },
  {
    q: "Wie beeinflusst Webentwicklung die SEO?",
    a: "Sauberer Code, schnelle Ladezeiten und Struktur verbessern die Sichtbarkeit bei Google."
  },
  {
    q: "Mit welchen Systemen arbeiten Sie?",
    a: "Mit modernen, flexiblen und skalierbaren Technologien – individuell passend zum Projekt."
  },
  {
    q: "Wie lange dauert die Erstellung?",
    a: "Je nach Umfang wenige Tage bis mehrere Wochen."
  },
  {
    q: "Was kostet eine Webseite?",
    a: "Ab mind. 600\u00A0€, abhängig vom Umfang."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-600">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              H
            </div>
            <span className="text-xl font-bold tracking-tight">HodotMedia</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={(e) => scrollToSection(e, '#kontakt')}
              className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200"
            >
              Kostenlose Beratung
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="block text-lg font-medium text-slate-600 hover:text-orange-600"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#kontakt"
                  onClick={(e) => scrollToSection(e, '#kontakt')}
                  className="block w-full text-center bg-orange-600 text-white py-3 rounded-xl font-semibold"
                >
                  Kostenlose Beratung
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section id="start" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-orange-50/50 rounded-l-[100px] hidden lg:block" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  Webdesign für Handwerker & KMU
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                  Mehr Kunden für dein Unternehmen – mit einer <span className="text-orange-600">Website, die verkauft</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                  HodotMedia erstellt moderne, schnelle und verkaufsstarke Webseiten für Handwerker und lokale Unternehmen – damit du online gefunden wirst und mehr Anfragen bekommst.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#kontakt"
                    onClick={(e) => scrollToSection(e, '#kontakt')}
                    className="flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 group"
                  >
                    Kostenlose Beratung sichern
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </a>
                  <a 
                    href="#kontakt"
                    onClick={(e) => scrollToSection(e, '#kontakt')}
                    className="flex items-center justify-center bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-orange-600 hover:text-orange-600 transition-all"
                  >
                    Angebot anfragen
                  </a>
                </div>

                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-orange-600" size={20} />
                    <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">Festpreise ab mind. 600 €</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-orange-600" size={20} />
                    <span className="text-sm font-semibold text-slate-700">Handwerker & Gastro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-orange-600" size={20} />
                    <span className="text-sm font-semibold text-slate-700">Fokus auf Ergebnisse</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                  <img 
                    src="https://picsum.photos/seed/webdesign/800/600" 
                    alt="Modernes Webdesign" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 z-20 hidden sm:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">+145%</div>
                      <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Mehr Anfragen</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Verlierst du täglich Kunden?
              </h2>
              <p className="text-lg text-slate-600">
                Viele Unternehmen verlieren täglich potenzielle Kunden, weil ihre Website nicht überzeugt oder gar nicht vorhanden ist.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Keine Website', desc: 'Du bist unsichtbar für Kunden, die online nach deinen Leistungen suchen.', icon: Globe },
                { title: 'Veraltete Website', desc: 'Ein schlechter erster Eindruck sorgt dafür, dass Kunden zur Konkurrenz gehen.', icon: AlertCircle },
                { title: 'Keine Anfragen', desc: 'Deine Seite sieht zwar gut aus, bringt aber keine neuen Aufträge ein.', icon: TrendingUp },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lösung Section */}
        <section className="py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Ich erstelle Webseiten, die genau das ändern
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Meine Mission ist es, lokale Unternehmen digital so aufzustellen, dass sie nicht nur gefunden werden, sondern auch überzeugen.
              </p>
              <ul className="space-y-4 mb-10 inline-block text-left">
                {[
                  'Modern & professionell gestaltet',
                  'Auf Kundenanfragen optimiert (Conversion)',
                  'Mobil optimiert für alle Endgeräte',
                  'Schnell & strukturiert aufgebaut',
                  'Google Ads für sofortige Sichtbarkeit (Optional)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-orange-100 rounded-full p-1 text-orange-600">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a 
                  href="#kontakt"
                  onClick={(e) => scrollToSection(e, '#kontakt')}
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Jetzt Projekt starten
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Leistungen Section */}
        <section id="leistungen" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meine Leistungen</h2>
              <p className="text-slate-400 text-lg">
                Alles, was du brauchst, um online erfolgreich zu sein und neue Kunden zu gewinnen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Webdesign', 
                  desc: 'Individuelle Webseiten, die Vertrauen schaffen und Kunden gewinnen.',
                  icon: Globe
                },
                { 
                  title: 'Conversion-Optimierung', 
                  desc: 'Struktur und Inhalte sind darauf ausgelegt, dass Besucher zu Anfragen werden.',
                  icon: TrendingUp
                },
                { 
                  title: 'Google Ads', 
                  desc: 'Gezielte Werbung, um sofort neue Kunden zu gewinnen.',
                  icon: Search
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700 hover:border-orange-500 transition-all group">
                  <div className="w-16 h-16 bg-orange-600/10 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Über uns Section */}
        <section id="ueber-uns" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Über HodotMedia</h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    HodotMedia steht für klare, funktionale und verkaufsstarke Webseiten. In einer Welt, in der jeder online sucht, reicht es nicht mehr aus, einfach nur "da" zu sein.
                  </p>
                  <p>
                    Der Fokus liegt nicht nur auf Design, sondern auf Ergebnissen. Eine Website ist erst dann gut, wenn sie dir neue Kunden bringt.
                  </p>
                  <p>
                    Jede Website wird individuell erstellt – angepasst an dein Unternehmen und deine Zielgruppe. Kein Standard-Baukasten, sondern echte Handarbeit für echtes Handwerk.
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-600">
                    <img src="/anthony-bild.jpg" alt="Anthony Hodot" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Anthony Hodot</div>
                    <div className="text-sm text-slate-500">Gründer von HodotMedia</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <img 
                    src="/anthony-bild.jpg" 
                    alt="Anthony Hodot" 
                    className="rounded-3xl shadow-2xl w-full object-cover aspect-[3/4]" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-50 z-20 hidden lg:block max-w-[200px]">
                  <div className="text-orange-600 font-bold text-3xl mb-2">100%</div>
                  <div className="text-slate-900 font-bold text-lg leading-tight">Leidenschaft für dein Projekt</div>
                </div>
                <div className="absolute -top-10 -right-10 bg-slate-900 p-8 rounded-3xl shadow-xl z-20 hidden lg:block max-w-[200px]">
                  <div className="text-white font-bold text-xl leading-tight">Fokus auf <span className="text-orange-500">Conversion</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Referenzen Section */}
        <section id="referenzen" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Referenzen</h2>
              <p className="text-slate-600 text-lg">
                Qualität, die überzeugt. Hier siehst du einen Auszug meiner aktuellen Projekte.
              </p>
              <p className="text-slate-500 text-sm mt-4 italic">
                Hinweis: Die folgenden Projekte sind Vorzeigeprojekte zur Veranschaulichung meiner Arbeit und keine echten Kundenprojekte.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1: Vogue Hair Studio */}
              <a 
                href="https://vogue-hair-studio.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img 
                    src="/hero vogue studio.png" 
                    alt="Vogue Hair Studio Hero" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">Website besuchen <ArrowRight size={16} /></span>
                  </div>
                </div>
                <div className="p-6 h-full">
                  <h3 className="font-bold text-slate-900 text-xl mb-2">Vogue Hair Studio</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ein eleganter Friseursalon, der modernen Lifestyle mit erstklassigem Handwerk verbindet. Die Webseite präsentiert das Team und die Services.
                  </p>
                </div>
              </a>

              {/* Project 2: Auto Tech Werkstatt */}
              <a 
                href="https://auto-tech-werkstatt.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img 
                    src="/hero autotech.png" 
                    alt="Auto Tech Werkstatt Hero" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">Website besuchen <ArrowRight size={16} /></span>
                  </div>
                </div>
                <div className="p-6 h-full">
                  <h3 className="font-bold text-slate-900 text-xl mb-2">Auto Tech Werkstatt</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Die digitale Visitenkarte einer modernen Kfz-Meisterwerkstatt. Hier finden Kunden alle Informationen zu Reparaturen und Inspektionen.
                  </p>
                </div>
              </a>

              {/* Project 3: Neon Void */}
              <a 
                href="https://neon-void3.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img 
                    src="/hero neon void.png" 
                    alt="Neon Void Hero" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">Website besuchen <ArrowRight size={16} /></span>
                  </div>
                </div>
                <div className="p-6 h-full">
                  <h3 className="font-bold text-slate-900 text-xl mb-2">Neon Void</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ein futuristisches Web-Erlebnis mit Fokus auf modernes Design. Die Seite besticht durch ihre neonfarbene Ästhetik und interaktive Elemente.
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-16 bg-white p-10 rounded-3xl border border-slate-100 shadow-sm text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Willst du die nächste Erfolgsgeschichte sein?</h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Ich helfe dir dabei, dein Unternehmen online so zu präsentieren, dass Kunden gar nicht anders können, als anzufragen.
              </p>
              <a 
                href="#kontakt"
                onClick={(e) => scrollToSection(e, '#kontakt')}
                className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all"
              >
                Jetzt unverbindlich anfragen <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Häufig gestellte Fragen</h2>
              <p className="text-slate-600 text-lg">Alles, was du über Webentwicklung und meine Arbeitsweise wissen musst.</p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div 
                  key={i} 
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                >
                  <button 
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                    {activeFaq === i ? <ChevronUp className="text-orange-600 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preise Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparente Preise</h2>
              <p className="text-slate-400 text-lg">
                Keine unnötigen Kosten – du zahlst nur für das, was du wirklich brauchst.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-800 p-10 rounded-3xl border border-slate-700 relative overflow-hidden">
                <div className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">Basis</div>
                <h3 className="text-3xl font-bold mb-2">Einfache Website</h3>
                <div className="text-4xl font-extrabold mb-6 whitespace-nowrap">ab mind. 600 €</div>
                <ul className="space-y-4 mb-10">
                  {['One-Page Design', 'Mobil optimiert', 'Kontaktformular', 'Impressum & Datenschutz', 'Schnelle Ladezeit'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 size={18} className="text-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#kontakt"
                  onClick={(e) => scrollToSection(e, '#kontakt')}
                  className="block w-full text-center bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all"
                >
                  Jetzt anfragen
                </a>
              </div>

              <div className="bg-orange-600 p-10 rounded-3xl relative overflow-hidden shadow-2xl shadow-orange-900/20">
                <div className="absolute top-4 right-4 bg-white/20 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">Beliebt</div>
                <div className="text-white/80 font-bold uppercase tracking-widest text-xs mb-4">Pro</div>
                <h3 className="text-3xl font-bold mb-2">Erweiterte Website</h3>
                <div className="text-4xl font-extrabold mb-6 whitespace-nowrap">ab 1500 €</div>
                <ul className="space-y-4 mb-10">
                  {['Mehrere Unterseiten', 'Individuelle Funktionen', 'SEO Grundoptimierung', 'Google Maps Integration', 'Premium Design'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white">
                      <CheckCircle2 size={18} className="text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a 
                  href="#kontakt"
                  onClick={(e) => scrollToSection(e, '#kontakt')}
                  className="block w-full text-center bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  Jetzt anfragen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-orange-600 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Bereit für mehr Kunden?</h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Lass uns gemeinsam deine Website erstellen und dein Unternehmen online sichtbar machen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#kontakt"
                onClick={(e) => scrollToSection(e, '#kontakt')}
                className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all shadow-xl shadow-orange-700/30"
              >
                Jetzt kostenlose Beratung sichern
              </a>
              <a 
                href="#kontakt"
                onClick={(e) => scrollToSection(e, '#kontakt')}
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-800 transition-all shadow-xl shadow-orange-700/30"
              >
                Angebot anfragen
              </a>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section id="kontakt" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Kontakt aufnehmen</h2>
                <p className="text-lg text-slate-600 mb-10">
                  Hast du Fragen oder möchtest direkt ein Angebot? Schreib mir eine Nachricht oder ruf mich einfach an.
                </p>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:anthonyhodot4@gmail.com" 
                    className="flex items-center gap-6 p-6 rounded-2xl border border-slate-100 hover:border-orange-600 hover:bg-orange-50 transition-all group"
                  >
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <Mail size={28} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">E-Mail</div>
                      <div className="text-lg font-bold text-slate-900 truncate max-w-[200px] sm:max-w-none">anthonyhodot4@gmail.com</div>
                    </div>
                  </a>

                  <a 
                    href="tel:015734470430" 
                    className="flex items-center gap-6 p-6 rounded-2xl border border-slate-100 hover:border-orange-600 hover:bg-orange-50 transition-all group"
                  >
                    <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <Phone size={28} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Telefon</div>
                      <div className="text-lg font-bold text-slate-900">01573 4470430</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Name</label>
                      <input 
                        type="text" 
                        placeholder="Dein Name" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">E-Mail</label>
                      <input 
                        type="email" 
                        placeholder="Deine E-Mail" 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Betreff</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all appearance-none bg-white">
                      <option>Kostenlose Beratung</option>
                      <option>Angebot anfragen</option>
                      <option>Allgemeine Frage</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Nachricht</label>
                    <textarea 
                      rows={4} 
                      placeholder="Wie kann ich dir helfen?" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-200"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                H
              </div>
              <span className="text-lg font-bold tracking-tight">HodotMedia</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-orange-600 transition-colors">Impressum</a>
              <a href="#" className="hover:text-orange-600 transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-orange-600 transition-colors">AGB</a>
            </div>

            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} HodotMedia. Alle Rechte vorbehalten.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
