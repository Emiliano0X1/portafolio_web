import React, { useState, useEffect } from 'react';
import emilianoPhoto from '../assets/emiliano.jpg';
import heroPhoto from '../assets/hero.png';

/**
 * HeroPhotoCarousel Component
 * Dynamic multi-photo carousel for the Home / Hero section.
 * Automatically cycles through photos, supports manual controls, and renders high-aesthetic badges.
 */
export const HeroPhotoCarousel = ({ gallery = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Gallery items with image references
  const slides = [
    {
      id: 'slide-1',
      image: emilianoPhoto,
      title: 'Emiliano Gonzalez Perez',
      caption: 'Software Engineer & Full Stack Developer',
      tag: 'CETYS Universidad • Top GPA',
      accent: '#FFB800',
    },
    {
      id: 'slide-2',
      image: heroPhoto,
      title: 'SEMPRA Hackathon 1st Place',
      caption: 'Enterprise AI Safety Training Platform',
      tag: 'Winner 2026',
      accent: '#F59E0B',
    },
    {
      id: 'slide-3',
      image: emilianoPhoto,
      title: 'Smart Bussing Transit Engine',
      caption: '2x Champion Expo Ingeniería CETYS',
      tag: 'A* Shortest Path Routing',
      accent: '#EAB308',
    },
    {
      id: 'slide-4',
      image: heroPhoto,
      title: 'ICPC Regional Finalist',
      caption: 'Algorithms & Competitive Programming',
      tag: 'Top 3 Ensenada',
      accent: '#D97706',
    },
  ];

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="hero-carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Profile Showcase Carousel"
    >
      {/* Slides Viewport */}
      <div className="carousel-viewport">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          const isPrev = idx === (currentIndex - 1 + slides.length) % slides.length;
          const isNext = idx === (currentIndex + 1) % slides.length;

          let positionClass = 'slide-hidden';
          if (isActive) positionClass = 'slide-active';
          else if (isPrev) positionClass = 'slide-prev';
          else if (isNext) positionClass = 'slide-next';

          return (
            <div
              key={slide.id}
              className={`carousel-slide-item ${positionClass}`}
              aria-hidden={!isActive}
            >
              <div className="slide-image-frame">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-img"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                <div className="slide-amber-glow-overlay" />
                <div className="slide-vignette-overlay" />
              </div>

              {/* Floating Caption Badge */}
              <div className="slide-floating-badge">
                <div className="badge-tag-pill" style={{ borderColor: slide.accent }}>
                  <span className="badge-dot" style={{ backgroundColor: slide.accent }} />
                  <span>{slide.tag}</span>
                </div>
                <h4 className="badge-title">{slide.title}</h4>
                <p className="badge-caption">{slide.caption}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="carousel-nav-arrows">
        <button
          type="button"
          className="carousel-arrow-btn prev"
          onClick={handlePrev}
          title="Previous Photo"
          aria-label="Previous Photo"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className="carousel-arrow-btn next"
          onClick={handleNext}
          title="Next Photo"
          aria-label="Next Photo"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Bottom Progress Indicator Dots */}
      <div className="carousel-indicators-bar">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`carousel-dot-btn ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          >
            {idx === currentIndex && (
              <span className={`carousel-progress-fill ${isPaused ? 'paused' : ''}`} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
