'use client'

import Image from 'next/image';
import { useState } from 'react';

// Note: This is the full code for src/app/page.tsx based on the wireframe.
// I've made it fully in English for simplicity. For bilingual support (English/Indonesian switch),
// I've added a simple language toggle using useState. You can expand it with i18n libraries like next-intl if needed.
// Content is defined in objects for easy switching.
// Replace placeholder images with your actual cropped screenshots (e.g., in /public/images/).
// Styles are based on your globals.css – ensure it's imported in layout.tsx.

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'id'>('en');

  const content = {
    en: {
      nav: {
        brand: 'Brew Logs',
        links: ['Overview', 'Screens', 'FAQ', 'Repo'],
        cta: 'Open App (Beta)'
      },
      hero: {
        title: 'Log Brew. Repeat.',
        subtitle: 'Track every brew. Discover your best patterns. Brew more consistently.',
        primaryBtn: 'Open App (Beta)',
        secondaryBtn: 'See How It Works'
      },
      stats: {
        title: 'Quick Stats',
        items: [
          { label: 'Total Brews', value: '42' },
          { label: 'Avg Rating', value: '8.7' },
          { label: 'Best Brew', value: '★★★★★9' },
          { label: 'Most Used Method', value: 'V60 (68%)' }
        ]
      },
      inside: {
        title: 'What\'s Inside Brew Logs',
        items: [
          'Comprehensive brew list with quick filters',
          'Real-time live timer',
          'Duplicate and compare previous brews',
          'Insights: average ratings and favorite patterns'
        ]
      },
      screens: {
        title: 'Brew Logs in Action',
        items: [
          {
            title: 'Neat Brew List',
            description: 'All brews neatly recorded, with quick filters by method/beans/rating',
            image: '/images/brew-list.avif' // Crop: Full list + search/filter bar
          },
          {
            title: 'Brew Details + Comparison',
            description: 'View full details + compare with similar previous brews',
            image: '/images/brew-details.avif' // Crop: Single brew view + "Previous Similar Brews"
          },
          {
            title: 'Quick New Brew',
            description: 'Create new brews fast with presets and advanced options',
            image: '/images/new-brew.avif' // Crop: New Brew form with preset ratio
          },
          {
            title: 'Live Brew Timer',
            description: 'Real-time timer + automatic step logging during brew',
            image: '/images/live-brew.avif' // Crop: Live Brew with timer running
          }
          ///{
          ///  title: 'Stats Insights',
          ///  description: 'Quick insights: your best brews and patterns',
          ///  image: '/images/stats.avif' // Crop: Overview stats
          ///}
        ]
      },
      cta: {
        title: 'Ready to Brew More Consistently?',
        subtitle: 'Open Brew Logs Beta now - free and easy to start.',
        btn: 'Open App (Beta)'
      },
      faq: {
        title: 'FAQ',
        items: [
          { q: 'What is Brew Logs?', a: 'A simple app to track your coffee brews for consistency.' },
          { q: 'Works on Mobile?', a: 'Yes, fully responsive for phones.' },
          { q: 'Why Duplicate Feature?', a: 'Easily repeat and tweak successful brews.' },
          { q: 'Is Data Secure?', a: 'Yes, stored privately with full user control.' },
          { q: 'Can I Export Data?', a: 'CSV and PDF exports coming soon.' }
        ]
      },
      footer: {
        copyright: '© 2026 Brew Logs',
        links: ['GitHub', 'Contact', 'Open App']
      }
    },
    id: {
      nav: {
        brand: 'Brew Logs',
        links: ['Ringkasan', 'Layar', 'FAQ', 'Repo'],
        cta: 'Buka App (Beta)'
      },
      hero: {
        title: 'Log Brew. Repeat.',
        subtitle: 'Catat setiap seduhan. Temukan pola terbaikmu. Brew lebih konsisten.',
        primaryBtn: 'Buka App (Beta)',
        secondaryBtn: 'Lihat Cara Kerja'
      },
      stats: {
        title: 'Statistik Cepat',
        items: [
          { label: 'Total Brews', value: '42' },
          { label: 'Rata-rata Rating', value: '8.7' },
          { label: 'Brew Terbaik', value: '★★★★★9' },
          { label: 'Metode Paling Sering', value: 'V60 (68%)' }
        ]
      },
      inside: {
        title: 'Apa yang Ada di Dalam Brew Logs',
        items: [
          'Daftar brew lengkap dengan filter cepat',
          'Timer live real-time',
          'Duplikat dan bandingkan brew sebelumnya',
          'Insight: rating rata-rata dan pola favorit'
        ]
      },
      screens: {
        title: 'Brew Logs in Action',
        items: [
          {
            title: 'Daftar Brew Rapi',
            description: 'Semua brew tercatat rapi, dengan filter cepat by method/beans/rating',
            image: '/images/brew-list.avif'
          },
          {
            title: 'Detail Brew + Perbandingan',
            description: 'Lihat detail lengkap + bandingkan dengan brew sebelumnya',
            image: '/images/brew-details.avif'
          },
          {
            title: 'Buat Brew Baru Cepat',
            description: 'Buat brew baru cepat dengan preset & opsi advanced',
            image: '/images/new-brew.avif'
          },
          {
            title: 'Timer Live Brew',
            description: 'Timer real-time + catat step otomatis saat brew',
            image: '/images/live-brew.avif'
          },
          {
            title: 'Insight Statistik',
            description: 'Insight cepat: brew terbaikmu & pola favorit',
            image: '/images/stats.avif'
          }
        ]
      },
      cta: {
        title: 'Siap Brew Lebih Konsisten?',
        subtitle: 'Buka Brew Logs Beta sekarang – gratis & mudah mulai.',
        btn: 'Buka App (Beta)'
      },
      faq: {
        title: 'FAQ',
        items: [
          { q: 'Apa itu Brew Logs?', a: 'Aplikasi sederhana untuk catat seduhan kopi agar konsisten.' },
          { q: 'Bisa di HP?', a: 'Ya, sepenuhnya responsif untuk ponsel.' },
          { q: 'Kenapa Ada Fitur Duplicate?', a: 'Mudah ulangi dan tweak brew sukses.' },
          { q: 'Data Aman?', a: 'Ya, disimpan pribadi dengan kontrol penuh pengguna.' },
          { q: 'Bisa Ekspor Data?', a: 'Ekspor CSV dan PDF segera hadir.' }
        ]
      },
      footer: {
        copyright: '© 2026 Brew Logs',
        links: ['GitHub', 'Kontak', 'Buka App']
      }
    }
  };

  const lang = content[language];

  return (
    <>
      {/* Language Switcher – simple button in nav */}
      <div className="nav">
        <div className="container navInner">
          <div className="brand">
            <Image src="/images/brew-logs-grey.png" alt="Logo" width={32} height={32} />
            {lang.nav.brand}
          </div>
          <div className="navLinks">
            {lang.nav.links.map((link, i) => (
              <a key={i} href={`#${link.toLowerCase()}`}>{link}</a>
            ))}
            <button className="btn btnPrimary">{lang.nav.cta}</button>
            {/* Language Toggle */}
            <button 
              className="btn" 
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            >
              {language === 'en' ? 'ID' : 'EN'}
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section" id="hero">
        <div className="container heroGrid">
          <div>
            <h1 className="h1">{lang.hero.title}</h1>
            <p className="sub">{lang.hero.subtitle}</p>
            <div className="actions">
              <button className="btn btnPrimary">{lang.hero.primaryBtn}</button>
              <button className="btn">{lang.hero.secondaryBtn}</button>
            </div>
          </div>
          <div className="imageWrap">
            <Image src="/images/hero.avif" alt="Brew List Mockup" width={600} height={800}/>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="section" id="overview">
        <div className="container">
          <h2 className="sectionTitle">{lang.stats.title}</h2>
          <div className="twoCards"> {/* Reuse your twoCards class for 4 items */}
            {lang.stats.items.map((stat, i) => (
              <div key={i} className="card cardPad">
                <h3 className="blockTitle">{stat.label}</h3>
                <p className="blockText">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">{lang.inside.title}</h2>
          <ul className="bullets">
            {lang.inside.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Screens Section */}
      <section className="section" id="screens">
        <div className="container">
          <h2 className="sectionTitle">{lang.screens.title}</h2>
          <div className="gridZigZag"> {/* Your grid for desktop */}
            {lang.screens.items.map((screen, i) => (
              <div key={i} className="card">
                <div className="imageWrap">
                  <Image src={screen.image} alt={screen.title} width={400} height={600} />
                </div>
                <div className="cardPad">
                  <h3 className="blockTitle">{screen.title}</h3>
                  <p className="blockText">{screen.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA Section */}
      <section className="section">
        <div className="container ctaBar">
          <div>
            <h2 className="sectionTitle">{lang.cta.title}</h2>
            <p className="sectionDesc">{lang.cta.subtitle}</p>
          </div>
          <button className="btn btnPrimary">{lang.cta.btn}</button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" id="faq">
        <div className="container">
          <h2 className="sectionTitle">{lang.faq.title}</h2>
          <div className="stack">
            {lang.faq.items.map((faq, i) => (
              <div key={i} className="card cardPad">
                <h3 className="blockTitle">{faq.q}</h3>
                <p className="blockText">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>{lang.footer.copyright}</p>
          <div className="footerLinks">
            {lang.footer.links.map((link, i) => (
              <a key={i} href={`#${link.toLowerCase()}`}>{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}