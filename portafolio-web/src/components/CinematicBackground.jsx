import React from 'react';
import emilianoPhoto from '../assets/emiliano.jpg';

/**
 * Cinematic Background Component
 * Blends Emiliano's portrait with warm amber rim lighting and a deep obsidian background.
 */
export const CinematicBackground = ({ activeTab }) => {
  const isLinksOrHome = activeTab === 'links' || activeTab === 'home';

  return (
    <div className={`cinematic-bg-container ${isLinksOrHome ? 'high-contrast' : ''}`}>
      {/* Primary ambient warm backlight */}
      <div className="ambient-glow-layer glow-primary" />
      <div className="ambient-glow-layer glow-secondary" />
      <div className="ambient-glow-layer glow-warmth" />

      {/* Portrait silhouette & photo container */}
      <div className="portrait-silhouette-wrapper">
        <div className="portrait-image-container">
          <img
            src={emilianoPhoto}
            alt="Emiliano Gonzalez Perez"
            className="portrait-photo"
          />
          {/* Warm rim-light overlay layer on the portrait */}
          <div className="portrait-amber-rim-highlight" />
          <div className="portrait-dark-fade" />
        </div>
      </div>

      {/* Dark vignette gradient ensuring 100% crisp legibility of left-aligned text */}
      <div className="cinematic-vignette-overlay" />
    </div>
  );
};
