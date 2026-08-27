import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from './data/portfolioData';
import { ToolIcon, SocialIcon, MailIcon, PhoneIcon } from './components/Icons';
import { ProjectCard } from './components/ProjectCard';
import { DockNavigation } from './components/DockNavigation';
import { CinematicBackground } from './components/CinematicBackground';
import './App.css';

/**
 * Main Portfolio Application
 * Implements pixel-perfect Framer UI recreation for Emiliano Gonzalez Perez.
 */
function App() {
  const [activeTab, setActiveTab] = useState('summary');
  const sectionRefs = {
    home: useRef(null),
    summary: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    links: useRef(null),
  };

  // Smooth scroll handler when clicking navigation dock items
  const handleTabClick = (tabId) => {
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
      rootMargin: '-25% 0px -35% 0px',
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

  return (
    <div className="portfolio-app-root">
      {/* Ambient background with warm amber rim lighting & portrait integration */}
      <CinematicBackground activeTab={activeTab} />

      {/* Top right action: Download CV button */}
      <header className="portfolio-top-header">
        <a
          href={portfolioData.personal.cvLink}
          className="download-cv-btn"
          target="_blank"
          rel="noreferrer"
          aria-label="Download Curriculum Vitae"
        >
          Download CV
        </a>
      </header>

      {/* Main Content Sections */}
      <main className="portfolio-main-content">
        {/* HOME / HERO SECTION */}
        <section id="home" ref={sectionRefs.home} className="portfolio-section hero-section">
          <div className="hero-content">
            <div className="hero-badge">SOFTWARE ENGINEER • CETYS</div>
            <h1 className="hero-title">{portfolioData.personal.name}</h1>
            <p className="hero-role">{portfolioData.personal.headline}</p>
            <p className="hero-subrole">{portfolioData.personal.subheadline}</p>
            <div className="hero-quick-actions">
              <button
                type="button"
                className="btn-primary-yellow"
                onClick={() => handleTabClick('summary')}
              >
                Explore Profile
              </button>
              <button
                type="button"
                className="btn-outline-glass"
                onClick={() => handleTabClick('experience')}
              >
                View Experience
              </button>
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
                  {portfolioData.summary.quote}
                </blockquote>
              </div>
            )}
          </div>
        </section>

        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" ref={sectionRefs.experience} className="portfolio-section experience-section">
          <div className="section-inner">
            <h2 className="section-title">{portfolioData.experience.title}</h2>

            {/* List of Positions */}
            <div className="experience-jobs-container">
              {portfolioData.experience.jobs.map((job) => (
                <div key={job.id} className="job-entry-card">
                  <div className="job-header">
                    <div className="job-role-wrapper">
                      <span className="yellow-dot">•</span>
                      <span className="job-role">{job.role}</span>
                    </div>
                    <span className="job-period">{job.period}</span>
                  </div>

                  <div className="job-company-row">
                    <span className="job-company">{job.company}</span>
                    <span className="job-location">• {job.location}</span>
                  </div>

                  <p className="job-description">{job.description}</p>

                  <ul className="job-bullets-list">
                    {job.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="job-bullet-item">
                        <span className="bullet-em-dash">—</span>
                        <span className="bullet-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Selected Projects */}
            <div className="selected-projects-wrapper">
              <h3 className="sub-section-title">{portfolioData.experience.selectedProjectsTitle}</h3>
              <div className="projects-grid">
                {portfolioData.experience.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS & TOOLS SECTION */}
        <section id="skills" ref={sectionRefs.skills} className="portfolio-section skills-section">
          <div className="section-inner">
            <h2 className="section-title">{portfolioData.skills.title}</h2>

            {/* Two Columns of Core Competencies with Yellow Bullets */}
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
