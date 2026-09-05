import React, { useState, useEffect, useRef } from 'react';
import smartBussingLogo from '../../assets/smart-bussing-logo.png';
import heroHighwayImg from '../../assets/smart-bussing-hero.jpg';

// Real authentic photos uploaded by Emiliano
import trophy2025Img from '../../assets/smart-bussing-2025.jpg';
import trophy2026Img from '../../assets/1780380101043.jpg';
import booth2025Img from '../../assets/smart-bussing-2025-3.jpg';
import team2025Img from '../../assets/smartBussing-2025.jpg';
import team2026Img from '../../assets/smartBussing_2026.jpg';
import pitchEmilianoImg from '../../assets/smartBussing_2026-2.jpg';
import boothCrowd2026Img from '../../assets/smartBussing-2026-3.jpg';

// Real Video Demo
import presentationVideo from '../../assets/Smart Bussing Presentacion final.mp4';

import './SmartBussing.css';

/**
 * SmartBussingPage Component
 * Bespoke project page for Smart Bussing loaded with real authentic project media:
 * - 100% Real Expo-36 (2025) & Expo-37 (2026) 1st place championship photos and wooden trophies
 * - Real pitch stage presentation photos of Emiliano with microphone
 * - Real live video demo player embedding "Smart Bussing Presentacion final.mp4"
 * - Split Hero Dashboard matching reference design
 * - Origin Story ("Why was Smart Bussing created?") in collective team tone
 * - Backend Lead & A* Pathfinding Architecture
 * - Rich Photo Collage Mural with official Logo identity card
 * - Official repository & LinkedIn links
 */
export const SmartBussingPage = ({ onBackToDiscography }) => {
  const [activeTab, setActiveTab] = useState('highlights');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const GITHUB_REPO_URL = 'https://github.com/Dusuan/SmartBussingMobile';
  const LINKEDIN_POST_URL = 'https://lnkd.in/p/gFkZDfZ5';

  // Auto-scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Safe smooth scroll without mutating hash / breaking view router
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  // Video play/pause toggle
  const togglePlayVideo = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  // Discover Carousel Cards Data with Real Authentic Photos
  const discoverCards = [
    {
      id: 'expo-champ-2026',
      category: 'highlights',
      tag: '🏆 2026 1ST PLACE',
      title: 'Back-to-Back Champions',
      subtitle: 'ExpoIngeniería CETYS 37',
      location: 'Ensenada, B.C.',
      image: team2026Img,
      desc: 'Team awarded 1st Place Overall for Smart Bussing evaluated by academic and industry juries.',
    },
    {
      id: 'pitch-stage',
      category: 'architecture',
      tag: '🎤 STAGE DEFENSE',
      title: 'System Pitch & Defense',
      subtitle: 'Live Jury & Academic Pitch',
      location: 'CETYS Auditorium',
      image: pitchEmilianoImg,
      desc: 'Defending the A* shortest path routing engine, backend microservices, and urban impact before corporate judges.',
    },
    {
      id: 'booth-crowd',
      category: 'milestones',
      tag: '🎪 LIVE EXPO DEMO',
      title: 'Expo Booth Presentation',
      subtitle: 'Live Commuter Walkthrough',
      location: 'Expo Stage Booth',
      image: boothCrowd2026Img,
      desc: 'Demonstrating the live application, vector bus route overlays, and turn-by-turn stop guidance.',
    },
    {
      id: 'trophy-gear',
      category: 'awards',
      tag: '🥇 1ER LUGAR ALFA',
      title: 'Expo-36 Recognition & Trophy',
      subtitle: 'Awarded to Emiliano Gonzalez',
      location: 'Campus Ensenada',
      image: trophy2025Img,
      desc: 'Official 1st Place diploma and wooden gear trophy recognizing technical innovation.',
    },
    {
      id: 'team-2025',
      category: 'awards',
      tag: '👥 2025 CHAMPIONS',
      title: 'Expo-36 Engineering Team',
      subtitle: 'Medal & Diploma Ceremony',
      location: 'CETYS Universidad',
      image: team2025Img,
      desc: 'Our engineering squad celebrating our first 1st place championship win.',
    },
  ];

  const filteredCards =
    activeTab === 'highlights'
      ? discoverCards
      : discoverCards.filter((c) => c.category === activeTab || activeTab === 'all');

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % discoverCards.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + discoverCards.length) % discoverCards.length);
  };

  // Photo Mural Gallery Items (Real Photos + Logo Card)
  const muralGallery = [
    {
      id: 'mural-team2026',
      image: team2026Img,
      badge: '🏆 2026 1ST PLACE OVERALL',
      title: 'ExpoIngeniería 37 Championship Team',
      caption: 'Smart Bussing team winning back-to-back 1st place champion medals at CETYS Universidad.',
      span: 'wide',
    },
    {
      id: 'mural-pitch',
      image: pitchEmilianoImg,
      badge: '🎤 LIVE PITCH',
      title: 'System Defense on Main Stage',
      caption: 'Emiliano presenting the transit routing architecture before faculty and corporate jurors.',
      span: 'normal',
    },
    {
      id: 'mural-logo-card',
      image: smartBussingLogo,
      badge: '🌟 OFFICIAL BRAND IDENTITY',
      title: 'Smart Bussing Transit Engine',
      caption: '¡Más rutas, Menos dudas! Designed to modernize public transportation in Baja California.',
      span: 'normal',
    },
    {
      id: 'mural-booth-emiliano',
      image: booth2025Img,
      badge: '📱 BOOTH SHOWCASE',
      title: '¡Más rutas, Menos dudas!',
      caption: 'Emiliano at the Smart Bussing expo booth displaying live mobile app screen.',
      span: 'normal',
    },
    {
      id: 'mural-trophy2025',
      image: trophy2025Img,
      badge: '🥇 EXPO-36 TROPHY',
      title: '1er Lugar Alfa Diploma & Trophy',
      caption: 'Official recognition granted to Emiliano Gonzalez Perez for Smart Bussing.',
      span: 'normal',
    },
    {
      id: 'mural-trophy2026',
      image: trophy2026Img,
      badge: '🥇 EXPO-37 TROPHY',
      title: '1er Lugar Beta Wooden Gear Trophy',
      caption: 'Second consecutive 1st place wooden gear trophy awarded in May 2026.',
      span: 'normal',
    },
    {
      id: 'mural-booth-crowd',
      image: boothCrowd2026Img,
      badge: '👥 EXPO AUDIENCE',
      title: 'Live Commuter Demonstrations',
      caption: 'Crowd of university students, professors, and visitors testing Smart Bussing.',
      span: 'wide',
    },
    {
      id: 'mural-team2025',
      image: team2025Img,
      badge: '🥈 EXPO-36 CEREMONY',
      title: 'ExpoIngeniería 36 Medal Ceremony',
      caption: 'Our engineering team receiving medals on stage with the School of Engineering Director.',
      span: 'wide',
    },
  ];

  return (
    <div className="smart-bussing-page-root">
      {/* 1. TOP STICKY NAVIGATION BAR */}
      <header className="bussing-nav-header">
        <div className="bussing-nav-left">
          <button
            type="button"
            className="bussing-back-btn"
            onClick={onBackToDiscography}
            title="Return to Vinyl Discography"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to Discography</span>
          </button>

          <div className="bussing-brand-badge">
            <img src={smartBussingLogo} alt="Smart Bussing Logo" className="bussing-header-logo-img" />
            <div className="bussing-brand-texts">
              <span className="bussing-brand-title">SMART BUSSING</span>
              <span className="bussing-brand-sub">TRANSIT ENGINE</span>
            </div>
          </div>
        </div>

        {/* Section Navigation Links */}
        <nav className="bussing-nav-anchors">
          <button type="button" className="nav-link-btn" onClick={() => scrollToSection('hero')}>
            Overview
          </button>
          <button type="button" className="nav-link-btn" onClick={() => scrollToSection('story')}>
            Origin Story
          </button>
          <button type="button" className="nav-link-btn" onClick={() => scrollToSection('architecture')}>
            A* Architecture
          </button>
          <button type="button" className="nav-link-btn" onClick={() => scrollToSection('champion')}>
            2x Champion
          </button>
          <button type="button" className="nav-link-btn" onClick={() => scrollToSection('demo')}>
            Video Demo
          </button>
          <button type="button" className="nav-link-btn" onClick={() => scrollToSection('mural')}>
            Photo Mural
          </button>
        </nav>

        <div className="bussing-nav-actions">
          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="bussing-btn-code"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* 2. SPLIT HERO DASHBOARD (Matching Reference 2 Exact Style) */}
      <section id="hero" className="bussing-split-hero-section">
        <div className="bussing-hero-grid">
          {/* Left Hero Card with Rich Real Highway Photography & Dotted Route Overlay */}
          <div
            className="bussing-hero-card-left"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(11, 17, 22, 0.3) 0%, rgba(11, 17, 22, 0.75) 60%, #070b0e 100%), url(${heroHighwayImg})`,
            }}
          >
            {/* Top Logo / Brand mark */}
            <div className="hero-top-brand-row">
              <div className="hero-logo-pill">
                <img src={smartBussingLogo} alt="Smart Bussing Logo" className="hero-inline-logo" />
                <span className="hero-logo-text">smart bussing</span>
              </div>
            </div>

            {/* Dotted Curved Route Overlay with 2 Orange Waypoint Pins */}
            <div className="hero-route-overlay-layer">
              <svg viewBox="0 0 500 350" className="route-curve-svg" fill="none">
                <path
                  d="M 80 290 Q 200 160, 310 190 T 430 70"
                  stroke="#ffffff"
                  strokeWidth="3.5"
                  strokeDasharray="6 8"
                  strokeOpacity="0.85"
                />
                {/* Pin 1: Origin */}
                <circle cx="80" cy="290" r="10" fill="#ea580c" />
                <circle cx="80" cy="290" r="4" fill="#ffffff" />
                {/* Pin 2: Destination */}
                <circle cx="430" cy="70" r="12" fill="#ea580c" />
                <circle cx="430" cy="70" r="5" fill="#ffffff" />
              </svg>
            </div>

            {/* Main Hero Headline & Action */}
            <div className="hero-main-typography">
              <h1 className="hero-headline-bold">
                Transforming Urban Public Transportation in Ensenada
              </h1>
              <p className="hero-lead-description">
                A multiplatform transit application helping daily commuters find the shortest bus routes from Point A to Point B with live Mapbox navigation in Baja California.
              </p>

              <div className="hero-action-row">
                <button
                  type="button"
                  className="hero-btn-orange"
                  onClick={() => scrollToSection('demo')}
                >
                  Watch Video Demo
                </button>
                <button
                  type="button"
                  className="hero-btn-glass"
                  onClick={() => scrollToSection('story')}
                >
                  Read Origin Story
                </button>
              </div>

              {/* Bottom Pagination: 01 ——— 05 with < > Controls */}
              <div className="hero-bottom-pagination">
                <span className="pag-num-active">01</span>
                <div className="pag-line-track">
                  <div className="pag-line-thumb" />
                </div>
                <span className="pag-num-total">05</span>

                <div className="pag-arrow-controls">
                  <button type="button" className="pag-arrow-btn" onClick={prevSlide} aria-label="Previous">
                    ❮
                  </button>
                  <button type="button" className="pag-arrow-btn" onClick={nextSlide} aria-label="Next">
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Discover Dashboard Column */}
          <div className="bussing-hero-dashboard-right">
            <div className="discover-top-section">
              {/* Header & Category Tabs */}
              <div className="discover-header-row">
                <h2 className="discover-main-title">Discover</h2>
                <span className="discover-project-role">Backend Lead & Co-Leader</span>
              </div>

              <div className="discover-category-tabs">
                <button
                  type="button"
                  className={`category-tab-btn ${activeTab === 'highlights' ? 'active' : ''}`}
                  onClick={() => setActiveTab('highlights')}
                >
                  Highlights
                  {activeTab === 'highlights' && <span className="tab-active-dot" />}
                </button>
                <button
                  type="button"
                  className={`category-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
                  onClick={() => setActiveTab('architecture')}
                >
                  Architecture
                  {activeTab === 'architecture' && <span className="tab-active-dot" />}
                </button>
                <button
                  type="button"
                  className={`category-tab-btn ${activeTab === 'milestones' ? 'active' : ''}`}
                  onClick={() => setActiveTab('milestones')}
                >
                  Milestones
                  {activeTab === 'milestones' && <span className="tab-active-dot" />}
                </button>
                <button
                  type="button"
                  className={`category-tab-btn ${activeTab === 'awards' ? 'active' : ''}`}
                  onClick={() => setActiveTab('awards')}
                >
                  Awards
                  {activeTab === 'awards' && <span className="tab-active-dot" />}
                </button>
              </div>
            </div>

            {/* Discover Photographic Cards Carousel */}
            <div className="discover-cards-row">
              {filteredCards.map((card, idx) => (
                <div
                  key={card.id}
                  className={`discover-photo-card ${idx === activeSlide % filteredCards.length ? 'focused' : ''}`}
                  onClick={() => {
                    if (card.id.includes('champ') || card.id.includes('trophy')) scrollToSection('champion');
                    if (card.id.includes('pitch')) scrollToSection('architecture');
                    if (card.id.includes('booth')) scrollToSection('demo');
                  }}
                >
                  <img src={card.image} alt={card.title} className="discover-card-img" />
                  <div className="discover-card-gradient" />
                  <span className="discover-card-tag">{card.tag}</span>

                  <div className="discover-card-content">
                    <h3 className="discover-card-title">{card.title}</h3>
                    <p className="discover-card-sub">{card.subtitle}</p>
                    <div className="discover-card-location">
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="#ea580c">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span>{card.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Controls for Carousel */}
            <div className="discover-carousel-controls">
              <div className="discover-arrows">
                <button type="button" className="disc-arrow-btn" onClick={prevSlide} aria-label="Previous card">
                  ❮
                </button>
                <button type="button" className="disc-arrow-btn" onClick={nextSlide} aria-label="Next card">
                  ❯
                </button>
              </div>
              <span className="discover-counter">
                {activeSlide + 1} of {filteredCards.length}
              </span>
            </div>

            {/* Bottom Core Engineering Mood / Stack Chips */}
            <div className="discover-tech-mood-section">
              <span className="tech-mood-label">Core Technology Stack:</span>
              <div className="tech-mood-icons-grid">
                <div className="tech-mood-pill">
                  <span className="mood-icon">⚡</span>
                  <span className="mood-text">A* Shortest Path</span>
                </div>
                <div className="tech-mood-pill">
                  <span className="mood-icon">🗺️</span>
                  <span className="mood-text">Mapbox GL SDK</span>
                </div>
                <div className="tech-mood-pill">
                  <span className="mood-icon">☕</span>
                  <span className="mood-text">Spring Boot API</span>
                </div>
                <div className="tech-mood-pill">
                  <span className="mood-icon">📱</span>
                  <span className="mood-text">React Native / iOS</span>
                </div>
                <div className="tech-mood-pill">
                  <span className="mood-icon">🐳</span>
                  <span className="mood-text">Docker Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE ORIGIN STORY & MOTIVATION (Collective & Team Narrative) */}
      <section id="story" className="bussing-section-wrapper story-section">
        <div className="bussing-container">
          <div className="bussing-section-header">
            <span className="section-pill-tag">THE INSPIRATION & PURPOSE</span>
            <h2 className="section-title-large">Why was Smart Bussing created?</h2>
          </div>

          <div className="story-content-grid">
            {/* Left Quote Editorial Card */}
            <div className="story-quote-card">
              <div className="story-quote-symbol">“</div>
              <blockquote className="story-quote-text">
                When relying on public transportation in Ensenada, navigating bus routes, transfers, and schedules has historically been complicated and uncertain. Many daily commuters get lost or overspend on private transportation simply due to a lack of route clarity. Smart Bussing was built to solve this problem for our entire community.
              </blockquote>
              <div className="story-quote-author">
                <img src={pitchEmilianoImg} alt="Smart Bussing Team" className="author-photo-small" />
                <div>
                  <span className="author-name-text">Smart Bussing Initiative</span>
                  <span className="author-title-text">Urban Mobility Innovation • Ensenada, B.C.</span>
                </div>
              </div>
            </div>

            {/* Right Narrative Paragraphs & Impact Numbers */}
            <div className="story-narrative-column">
              <p className="story-lead-para">
                For daily students, workers, and families in Baja California, missing a bus or not knowing transfer points leads to costly private ride-hailing and significant lost time.
              </p>
              <p className="story-body-para">
                With <strong>Smart Bussing</strong>, our team's mission was to make public transit intuitive, reliable, and accessible for daily commuters so they can better manage their financial resources, while simultaneously providing city planners and transit concessionaires with real-time route telemetry and commuter density analytics.
              </p>

              <div className="story-metrics-row">
                <div className="story-metric-box">
                  <span className="metric-big-num">3x</span>
                  <span className="metric-label-text">Commuter Savings vs Private Ride-Hailing</span>
                </div>
                <div className="story-metric-box">
                  <span className="metric-big-num">100%</span>
                  <span className="metric-label-text">Ensenada Main Route Network Mapping</span>
                </div>
                <div className="story-metric-box">
                  <span className="metric-big-num">&lt;500ms</span>
                  <span className="metric-label-text">Shortest Route Calculation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BACKEND LEAD & A* PATHFINDING ARCHITECTURE */}
      <section id="architecture" className="bussing-section-wrapper architecture-section">
        <div className="bussing-container">
          <div className="bussing-section-header">
            <span className="section-pill-tag">SYSTEM DESIGN & ENGINEERING</span>
            <h2 className="section-title-large">Backend Architecture & A* Shortest Path</h2>
          </div>

          <div className="architecture-layout-grid">
            <div className="arch-main-column">
              <div className="arch-role-header">
                <div className="arch-role-badge">LEADERSHIP & ENGINEERING</div>
                <h3 className="arch-role-headline">Backend Lead & Co-Project Leader</h3>
                <p className="arch-role-summary">
                  As Backend Lead and Project Co-Leader, Emiliano Gonzalez Perez architected and engineered the Java / Spring Boot backend microservices, implemented the A* algorithm to calculate the shortest path from Point A to Point B across bus routes, integrated vector mapping with Mapbox GL, and contributed to mobile deployment.
                </p>
              </div>

              <div className="arch-bullets-block">
                <h4 className="arch-bullets-title">Technical Contributions:</h4>
                <ul className="arch-bullets-list">
                  <li className="arch-bullet-item">
                    <span className="arch-bullet-indicator" />
                    <div>
                      <strong>A* Shortest Path Routing:</strong> Implemented the A* pathfinding algorithm to calculate the shortest and most direct transit route from Point A to Point B across Ensenada's bus network.
                    </div>
                  </li>
                  <li className="arch-bullet-item">
                    <span className="arch-bullet-indicator" />
                    <div>
                      <strong>Mapbox GL Vector Overlays:</strong> Developed dynamic GeoJSON route layers and custom interactive stop markers, rendering smooth GPS tracking and route recalculation.
                    </div>
                  </li>
                  <li className="arch-bullet-item">
                    <span className="arch-bullet-indicator" />
                    <div>
                      <strong>Spring Boot REST Microservices:</strong> Implemented backend APIs with fast response latency, backed by PostgreSQL and containerized with Docker.
                    </div>
                  </li>
                  <li className="arch-bullet-item">
                    <span className="arch-bullet-indicator" />
                    <div>
                      <strong>Cross-Platform Mobile Client:</strong> Contributed to the React Native mobile codebase and iOS TestFlight packaging for user testing.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Growth & Product Card */}
            <div className="arch-growth-column">
              <div className="growth-editorial-card">
                <span className="growth-icon-badge">💡</span>
                <h3 className="growth-card-title">Building a Product Beyond Code</h3>
                <p className="growth-card-desc">
                  A foundational lesson from Smart Bussing was understanding that engineering a successful technology product requires far more than writing clean algorithms.
                </p>

                <div className="growth-list">
                  <div className="growth-item">
                    <span className="growth-check">✔</span>
                    <div>
                      <strong>Business Model Formulation:</strong> Designed sustainable concessionaire partnership models and municipal monetization strategies.
                    </div>
                  </div>
                  <div className="growth-item">
                    <span className="growth-check">✔</span>
                    <div>
                      <strong>Corporate Pitch Defense:</strong> Defended technical architecture, scalability, and civic ROI before academic deans and industry directors.
                    </div>
                  </div>
                  <div className="growth-item">
                    <span className="growth-check">✔</span>
                    <div>
                      <strong>User Feedback Iteration:</strong> Conducted field interviews across Ensenada bus stops to iteratively refine mobile navigation clarity.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 2X FIRST PLACE CHAMPION SHOWCASE */}
      <section id="champion" className="bussing-section-wrapper champion-section">
        <div className="bussing-container">
          <div className="champion-banner-layout">
            <div className="champion-trophies-duo">
              <div className="trophy-duo-item">
                <img src={trophy2025Img} alt="Expo 36 1er Lugar Alfa" className="champ-duo-photo" />
                <span className="champ-duo-caption">2025 • Expo-36 Alfa</span>
              </div>
              <div className="trophy-duo-item">
                <img src={trophy2026Img} alt="Expo 37 1er Lugar Beta" className="champ-duo-photo" />
                <span className="champ-duo-caption">2026 • Expo-37 Beta</span>
              </div>
            </div>

            <div className="champion-text-col">
              <span className="champion-uni-badge">CETYS UNIVERSIDAD • EXPOINGENIERÍA</span>
              <h2 className="champion-headline-text">Back-to-Back 1st Place Overall Champion</h2>
              <p className="champion-body-text">
                Smart Bussing won First Place twice in a row at CETYS Universidad’s premier annual engineering exposition (ExpoIngeniería 36 in 2025 & ExpoIngeniería 37 in 2026). Evaluated rigorously on algorithmic complexity, system architecture, UX design, and tangible civic impact on Baja California.
              </p>

              <div className="champion-pills-row">
                <div className="champ-stat-card">
                  <span className="champ-stat-val">300+</span>
                  <span className="champ-stat-lbl">Attendees & Jury</span>
                </div>
                <div className="champ-stat-card">
                  <span className="champ-stat-val">#1</span>
                  <span className="champ-stat-lbl">Software Engineering Project</span>
                </div>
                <div className="champ-stat-card">
                  <span className="champ-stat-val">2x</span>
                  <span className="champ-stat-lbl">Consecutive Champions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LIVE VIDEO DEMO SECTION ("Cargue el demo") */}
      <section id="demo" className="bussing-section-wrapper demo-video-section">
        <div className="bussing-container">
          <div className="bussing-section-header">
            <span className="section-pill-tag">OFFICIAL PRESENTATION & DEMO</span>
            <h2 className="section-title-large">Smart Bussing Final Presentation Demo</h2>
            <p className="section-subtitle-muted">
              Watch the official final project presentation demonstrating the live mobile application, map navigation, and transit routing architecture.
            </p>
          </div>

          <div className="demo-video-player-wrapper">
            <div className="video-window-bar">
              <div className="window-dots">
                <span className="w-dot red" />
                <span className="w-dot yellow" />
                <span className="w-dot green" />
              </div>
              <span className="window-title-text">Smart Bussing • Presentacion Final Demo.mp4</span>
            </div>

            <div className="video-viewport-box">
              <video
                ref={videoRef}
                className="html5-video-player"
                controls
                playsInline
                preload="metadata"
                poster={boothCrowd2026Img}
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
              >
                <source src={presentationVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!isVideoPlaying && (
                <div className="video-custom-overlay-btn" onClick={togglePlayVideo}>
                  <div className="pulse-play-ring">
                    <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="overlay-play-text">Click to Play Demo Video</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. RICH PHOTO MURAL & VISUAL COLLAGE (Real Photos + Brand Logo Feature) */}
      <section id="mural" className="bussing-section-wrapper mural-section">
        <div className="bussing-container">
          <div className="bussing-section-header">
            <span className="section-pill-tag">PHOTO COLLAGE & MEDIA</span>
            <h2 className="section-title-large">Project Photo Mural & Visual Showcase</h2>
            <p className="section-subtitle-muted">
              Authentic visual records from ExpoIngeniería championships (Expo 36 & 37), stage pitches, and live booth demonstrations in Ensenada.
            </p>
          </div>

          <div className="mural-gallery-masonry">
            {muralGallery.map((item) => (
              <div key={item.id} className={`mural-photo-frame span-${item.span}`}>
                <img src={item.image} alt={item.title} className="mural-img-element" />
                <div className="mural-photo-overlay" />
                <span className="mural-photo-badge">{item.badge}</span>

                <div className="mural-caption-box">
                  <h3 className="mural-caption-title">{item.title}</h3>
                  <p className="mural-caption-desc">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FOOTER & RETURN TO VINYL DISCOGRAPHY */}
      <footer className="bussing-page-footer">
        <div className="bussing-container footer-flex-wrap">
          <div className="footer-left-brand">
            <p className="footer-tagline-text">
              Smart Bussing • Engineered by Emiliano Gonzalez Perez with passion for Baja California's urban mobility.
            </p>
          </div>

          <div className="footer-right-actions">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="footer-btn-outline"
            >
              GitHub Code
            </a>
            <a
              href={LINKEDIN_POST_URL}
              target="_blank"
              rel="noreferrer"
              className="footer-btn-outline"
            >
              LinkedIn Post
            </a>
            <button
              type="button"
              className="footer-btn-return"
              onClick={onBackToDiscography}
            >
              ← Return to Vinyl Discography
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
