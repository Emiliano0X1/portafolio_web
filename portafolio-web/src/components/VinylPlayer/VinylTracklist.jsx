import React from 'react';

/**
 * VinylTracklist Component
 * Renders the left-side panel of the Vinylist console:
 * - Active Album Cover Photo/Sleeve (replacing old tabs & category descriptions)
 * - Curator Info & "A side" header
 * - Clean Tracklist Rows with Company/Project name only and date duration stamps (no subtitle noise)
 */
export const VinylTracklist = ({
  album,
  tracks,
  activeTrack,
  isPlaying,
  onSelectTrack,
}) => {
  return (
    <div className="vinyl-tracklist-panel">
      {/* Top Vinylist Brand Identifier */}
      <div className="tracklist-header-clean">
        <div className="vinyllist-brand">
          <span className="vinylist-logo-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
          </span>
          <span className="vinylist-brand-name">vinylist</span>
        </div>
      </div>

      {/* Active Album Cover Photo Card (Replacing old tabs) */}
      <div className="active-album-cover-card-wrapper">
        <div
          className="active-album-cover-card"
          style={{ background: album?.coverGradient || 'linear-gradient(135deg, #1f1406 0%, #3d2305 100%)' }}
        >
          <div className="album-card-overlay-sheen" />
          <div className="album-card-content-wrap">
            <div className="album-card-top-badge">
              <span className="album-badge-tag">{album?.coverTag || album?.badge || 'ALBUM'}</span>
              <span className="album-badge-year">{album?.year || '2026'}</span>
            </div>
            <div className="album-card-title-group">
              <h3 className="album-card-title">{album?.title}</h3>
              <p className="album-card-curator">Curated by Emiliano Gonzalez</p>
            </div>
          </div>
        </div>
      </div>

      {/* Curator Info Row */}
      <div className="tracklist-curator-row">
        <div className="curator-avatar-badge">
          <span className="curator-initials">EG</span>
        </div>
        <div className="curator-info">
          <div className="curator-name-row">
            <span className="curator-name">Emiliano Gonzalez</span>
            <span className="curator-pro-pill">PRO</span>
          </div>
          <span className="curator-collection-label">{album?.subtitle || 'ENGINEERING TRACKS'}</span>
        </div>
      </div>

      {/* Tracklist Title Section: "A side" */}
      <div className="aside-title-row">
        <div className="aside-title-wrapper">
          <h2 className="aside-large-title">A side</h2>
          <span className="aside-track-count">({tracks.length} Tracks)</span>
        </div>
        <div className="aside-repeat-icon" title="Ordered newest to oldest">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
          </svg>
        </div>
      </div>

      {/* Clean Tracks Container (No subtitles, clean titles & durations) */}
      <div className="tracks-list-container" role="list">
        {tracks.map((track, idx) => {
          const isSelected = activeTrack?.id === track.id;

          return (
            <div
              key={track.id}
              role="listitem"
              tabIndex={0}
              className={`track-item-row clean-track-item ${isSelected ? 'active-selected' : ''}`}
              onClick={() => onSelectTrack(track)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectTrack(track);
                }
              }}
            >
              {/* Active track angled highlight polygon background */}
              <div className="track-item-bg-shape" />

              {/* Track Number */}
              <span className="track-index-num">{track.trackNumber || `0${idx + 1}`}</span>

              {/* Track Thumbnail / Custom Mini Artwork */}
              <div className="track-art-mini">
                {isSelected && isPlaying ? (
                  <div className="mini-equalizer-bars">
                    <span className="bar bar-1" />
                    <span className="bar bar-2" />
                    <span className="bar bar-3" />
                  </div>
                ) : (
                  <div className="track-art-symbol">
                    {album?.id === 'experience' ? (
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                      </svg>
                    ) : album?.id === 'projects' ? (
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    )}
                  </div>
                )}
              </div>

              {/* Play / Status Indicator */}
              <div className="track-play-indicator">
                {isSelected && isPlaying ? '▶' : '▸'}
              </div>

              {/* Clean Track Title (Bold company/project title with no subtitle clutter) */}
              <div className="track-meta clean-meta">
                <h3 className="track-title clean-title">{track.title}</h3>
              </div>

              {/* Track Duration (Formatted date stamp: 06:26, 05:26, etc.) */}
              <div className="track-duration-stamp" title={`Date: ${track.dateFull}`}>
                {track.dateBadge}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
