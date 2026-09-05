import React, { useState } from 'react';

/**
 * VinylInfoPanel Component
 * Exact reproduction of the right-side Sand/Cream panel from the user's screenshot:
 * - Top 3D Album Stack mockup showing active track badge, title, company, date
 * - Header Row: Company/Category uppercase on left, Track ratio "2 - 3" on right
 * - Main Track Title: Large bold title with heart bookmark icon
 * - Subtitle: Full Date • Location
 * - Heading: "EXECUTIVE SUMMARY"
 * - Description: Full project summary
 * - Metrics Grid: 2-3 metric cards with value and label
 * - Buttons: Dark "Explore Details & Collage →" and outline "Project Details"
 */
export const VinylInfoPanel = ({
  album,
  track,
  trackIndex,
  totalTracks,
  onOpenDeepDive,
  onNavigateToProject,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  if (!track) return null;

  return (
    <div className="vinyl-info-panel-cream">
      {/* Top 3D Album Covers Stack Mockup */}
      <div className="cream-album-stack-wrap">
        <div
          className="cream-cover-card cover-main-card"
          style={{ background: album?.coverGradient || '#181920' }}
        >
          <div className="cover-art-content">
            <div className="cover-badge-top">{album?.badge || 'PRODUCTION'}</div>
            <div className="cover-title-large">{track.title}</div>
            <div className="cover-sub-text">{track.company || track.role || album?.title}</div>
            <div className="cover-date-watermark">{track.dateBadge}</div>
          </div>
        </div>
        <div className="cream-cover-card cover-shadow-card-1" />
        <div className="cream-cover-card cover-shadow-card-2" />
      </div>

      {/* Header Row: Company/Category + Track Ratio */}
      <div className="cream-meta-block">
        <div className="cream-header-top-row">
          <span className="cream-company-tag">
            {track.company ? track.company.toUpperCase() : (track.category || album?.title || 'WORK EXPERIENCE').toUpperCase()}
          </span>
          <span className="cream-track-ratio">
            {trackIndex + 1} - {totalTracks}
          </span>
        </div>

        {/* Main Track Title + Heart Favorite Button */}
        <div className="cream-title-fav-row">
          <h2 className="cream-track-main-title">{track.title}</h2>
          <button
            type="button"
            className={`cream-heart-btn ${isFavorited ? 'favorited' : ''}`}
            onClick={() => setIsFavorited(!isFavorited)}
            title="Bookmark this track"
            aria-label="Bookmark this track"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill={isFavorited ? '#d97706' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>

        {/* Date Full & Location */}
        <div className="cream-date-location-row">
          <span className="cream-date-full">{track.dateFull}</span>
          {track.location && (
            <span className="cream-location-text">• {track.location}</span>
          )}
        </div>
      </div>

      {/* Executive Summary Block */}
      <div className="cream-info-section">
        <h4 className="cream-info-heading">EXECUTIVE SUMMARY</h4>
        <p className="cream-info-text">{track.summary}</p>
      </div>

      {/* Highlight Metrics Cards Grid */}
      {track.metrics && track.metrics.length > 0 && (
        <div className="cream-metrics-grid">
          {track.metrics.map((m, idx) => (
            <div key={idx} className={`cream-metric-card ${idx === 2 ? 'metric-full-width' : ''}`}>
              <div className="cream-metric-val">{m.value}</div>
              <div className="cream-metric-lbl">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Action Buttons: Dark "Explore Details & Collage →" and Outline "Project Details" */}
      <div className="cream-actions-row">
        <button
          type="button"
          className="btn-cream-deepdive"
          onClick={() => {
            if (onNavigateToProject && (track.id === 'smart-bussing' || track.hasDedicatedPage)) {
              onNavigateToProject(track.id);
            } else if (onNavigateToProject) {
              onNavigateToProject(track.id);
            } else {
              onOpenDeepDive();
            }
          }}
        >
          <span>Explore Details & Collage</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        {track.links && track.links.length > 0 && (
          <a
            href={track.links[0].url}
            target="_blank"
            rel="noreferrer"
            className="btn-cream-secondary-outline"
          >
            {track.links[0].label || 'Project Details'}
          </a>
        )}
      </div>
    </div>
  );
};
