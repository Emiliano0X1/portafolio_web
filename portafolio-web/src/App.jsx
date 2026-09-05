import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from './data/portfolioData';
import { ToolIcon, SocialIcon, MailIcon, PhoneIcon } from './components/Icons';
import { DockNavigation } from './components/DockNavigation';
import { CinematicBackground } from './components/CinematicBackground';
import { HeroPhotoCarousel } from './components/HeroPhotoCarousel';
import { VinylPlayerSection } from './components/VinylPlayer/VinylPlayerSection';
import { SmartBussingPage } from './components/Projects/SmartBussingPage';
import './App.css';

/**
 * Main Portfolio Application
 * Redesigned with the Vinylist Music Player aesthetic for Emiliano Gonzalez Perez.
 */
function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.includes('project/smart-bussing') || hash === '#smart-bussing') {
        return { type: 'project', id: 'smart-bussing' };
      }
    }
    return { type: 'main' };
  });

  const sectionRefs = {
    home: useRef(null),
    summary: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    links: useRef(null),
  };

  // Sync hash changes (e.g. back/forward button)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('project/smart-bussing') || hash === '#smart-bussing') {
        setCurrentView({ type: 'project', id: 'smart-bussing' });
      } else {
        setCurrentView({ type: 'main' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigate to project handler
  const handleNavigateToProject = (projectId) => {
    if (projectId === 'smart-bussing') {
      setCurrentView({ type: 'project', id: 'smart-bussing' });
      window.location.hash = '#project/smart-bussing';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Return to discography
  const handleBackToDiscography = () => {
    setCurrentView({ type: 'main' });
    window.location.hash = '#experience';
    setTimeout(() => {
      sectionRefs.experience?.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // Smooth scroll handler when clicking navigation dock items
  const handleTabClick = (tabId) => {
    if (currentView.type !== 'main') {
      setCurrentView({ type: 'main' });
      window.location.hash = `#${tabId}`;
      setTimeout(() => {
        sectionRefs[tabId]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return;
    }

    setActiveTab(tabId);
    const element = sectionRefs[tabId]?.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // IntersectionObserver to synchronize active dock tab during scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -30% 0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    Object.entries(sectionRefs).forEach(([_, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // If viewing a dedicated project page, render that project's bespoke component
  if (currentView.type === 'project' && currentView.id === 'smart-bussing') {
    const smartBussingData = portfolioData.albums.projects.tracks.find(
      (t) => t.id === 'smart-bussing'
    );
    return (
      <SmartBussingPage
        onBackToDiscography={handleBackToDiscography}
        projectData={smartBussingData}
      />
    );
  }

  return (
    <div className="portfolio-app-root">
      {/* Ambient background with warm amber rim lighting */}
      <CinematicBackground activeTab={activeTab} />

      {/* Top Header with Vinyl Brand & Actions */}
      <header className="portfolio-top-header">
        <div className="top-header-brand" onClick={() => handleTabClick('home')}>
          <div className="top-brand-badge">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
            <span className="brand-text">Emiliano.vinyl</span>
          </div>
        </div>

        <div className="top-header-actions">
          <a
            href={portfolioData.personal.cvLink}
            className="download-cv-btn"
            target="_blank"
            rel="noreferrer"
            aria-label="Download Curriculum Vitae"
          >
            Download CV
          </a>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="portfolio-main-content">
        
        {/* HOME / HERO SECTION */}
        <section id="home" ref={sectionRefs.home} className="portfolio-section hero-section">
          <div className="hero-grid-layout">
            <div className="hero-content">
              <div className="hero-badge">SOFTWARE ENGINEER • CETYS</div>
              <h1 className="hero-title">{portfolioData.personal.name}</h1>
              <p className="hero-role">{portfolioData.personal.headline}</p>
              <p className="hero-subrole">{portfolioData.personal.subheadline}</p>
              <div className="hero-quick-actions">
                <button
                  type="button"
                  className="btn-primary-yellow"
                  onClick={() => handleTabClick('experience')}
                >
                  Explore Vinyl Discography
                </button>
                <button
                  type="button"
                  className="btn-outline-glass"
                  onClick={() => handleTabClick('summary')}
                >
                  About Emiliano
                </button>
              </div>
            </div>

            {/* Dynamic Auto-cycling Multi-Photo Carousel */}
            <div className="hero-carousel-column">
              <HeroPhotoCarousel gallery={portfolioData.personal.homeGallery} />
            </div>
          </div>
        </section>

        {/* SUMMARY SECTION */}
        <section id="summary" ref={sectionRefs.summary} className="portfolio-section summary-section">
          <div className="section-inner">
            <h2 className="section-title">{portfolioData.summary.title}</h2>

            <div className="summary-text-block">
              {portfolioData.summary.paragraphs.map((p, idx) => (
                <p key={idx} className="summary-paragraph">
                  {p}
                </p>
              ))}
            </div>

            {portfolioData.summary.quote && (
              <div className="summary-highlight-quote">
                <div className="quote-yellow-bar" />
                <blockquote className="quote-text">
                  "{portfolioData.summary.quote}"
                </blockquote>
              </div>
            )}
          </div>
        </section>

        {/* VINYL EXPERIENCE SECTION (Albums: Experience, Projects, Awards) */}
        <div ref={sectionRefs.experience}>
          <VinylPlayerSection onNavigateToProject={handleNavigateToProject} />
        </div>

        {/* SKILLS & TOOLS SECTION */}
        <section id="skills" ref={sectionRefs.skills} className="portfolio-section skills-section">
          <div className="section-inner">
            <h2 className="section-title">{portfolioData.skills.title}</h2>

            {/* Two Columns of Core Competencies */}
            <div className="skills-columns-wrapper">
              {portfolioData.skills.skillsColumns.map((col, colIdx) => (
                <ul key={colIdx} className="skills-column">
                  {col.map((skill, skillIdx) => (
                    <li key={skillIdx} className="skill-item">
                      <span className="yellow-dot">•</span>
                      <span className="skill-text">{skill}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            {/* Grid of Tools and Technologies */}
            <div className="tools-grid">
              {portfolioData.skills.tools.map((tool) => (
                <div key={tool.name} className="tool-card">
                  <div className="tool-icon-wrapper">
                    <ToolIcon name={tool.icon} />
                  </div>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>

            {/* Honors and Competitions */}
            {portfolioData.skills.awards && (
              <div className="awards-wrapper">
                <h3 className="sub-section-title">Honors & Competitions</h3>
                <div className="awards-list">
                  {portfolioData.skills.awards.map((award, aIdx) => (
                    <div key={aIdx} className="award-item">
                      <span className="yellow-dot">•</span>
                      <span className="award-title">{award.title}</span>
                      <span className="award-year">({award.year})</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* LINKS & CONTACT SECTION */}
        <section id="links" ref={sectionRefs.links} className="portfolio-section links-section">
          <div className="section-inner">
            <h2 className="section-title">{portfolioData.links.title}</h2>

            {/* Social Buttons Row */}
            <div className="socials-row">
              {portfolioData.links.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link-btn"
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                  aria-label={social.name}
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>

            {/* Direct Contact Information Row */}
            <div className="contact-info-row">
              <a href={`mailto:${portfolioData.personal.email}`} className="contact-item">
                <span className="contact-icon yellow-accent">
                  <MailIcon />
                </span>
                <span className="contact-text">{portfolioData.personal.email}</span>
              </a>

              <a href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`} className="contact-item">
                <span className="contact-icon yellow-accent">
                  <PhoneIcon />
                </span>
                <span className="contact-text">{portfolioData.personal.phone}</span>
              </a>
            </div>

            {/* Footer / Copyright */}
            <footer className="links-footer">
              <p className="footer-copyright-text">{portfolioData.personal.footerText}</p>
            </footer>
          </div>
        </section>
      </main>

      {/* Floating Bottom Pill Navigation Dock */}
      <DockNavigation activeTab={activeTab} onTabClick={handleTabClick} />
    </div>
  );
}

export default App;
