import React from 'react';

/**
 * AlbumCoverFlow Component
 * Standalone 3D perspective album fan carousel positioned above the Vinylist console.
 * Enables selecting between "Work Experience", "Featured Projects", and "Hackathons & Competitions".
 * Custom Emiliano Discography branding (strictly no Spotify).
 */
export const AlbumCoverFlow = ({
  albums,
  activeAlbumKey,
  onSelectAlbumKey,
}) => {
  const albumKeys = Object.keys(albums);
  const activeIndex = albumKeys.indexOf(activeAlbumKey);

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + albumKeys.length) % albumKeys.length;
    onSelectAlbumKey(albumKeys[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % albumKeys.length;
    onSelectAlbumKey(albumKeys[nextIdx]);
  };

  return (
    <div className="album-coverflow-standalone-section">
      {/* Custom Discography Header (NO Spotify branding) */}
      <div className="coverflow-brand-header">
        <div className="coverflow-brand-emblem">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="brand-vinyl-svg">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
          </svg>
          <span className="brand-title-discography">DISCOGRAPHY</span>
        </div>
        <span className="brand-subtitle-collection">EMILIANO'S VINYL VAULT</span>
      </div>

      {/* 3D Perspective Coverflow Deck */}
      <div className="coverflow-viewport">
        <button
          type="button"
          className="coverflow-nav-arrow arrow-left"
          onClick={handlePrev}
          aria-label="Previous Album"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="coverflow-3d-deck">
          {albumKeys.map((key, idx) => {
            const album = albums[key];
            const isCenter = idx === activeIndex;
            const diff = idx - activeIndex;

            // Determine 3D card position state
            let positionClass = 'pos-center';
            if (diff === -1 || (diff === albumKeys.length - 1 && activeIndex === 0)) {
              positionClass = 'pos-left';
            } else if (diff === 1 || (diff === -(albumKeys.length - 1) && activeIndex === albumKeys.length - 1)) {
              positionClass = 'pos-right';
            } else if (diff < -1) {
              positionClass = 'pos-far-left';
            } else if (diff > 1) {
              positionClass = 'pos-far-right';
            }

            return (
              <div
                key={key}
                className={`coverflow-card ${positionClass} ${isCenter ? 'is-active-album' : ''}`}
                onClick={() => onSelectAlbumKey(key)}
                tabIndex={0}
                role="button"
                aria-label={`Select Album: ${album.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectAlbumKey(key);
                  }
                }}
              >
                {/* Vinyl Disc Peeking Effect */}
                <div className="card-vinyl-peek">
                  <div className="vinyl-groove-lines" />
                  <div className="vinyl-center-mini-hole" />
                </div>

                {/* Card Artwork & Sleeve */}
                <div className="coverflow-card-inner" style={{ background: album.coverGradient }}>
                  <div className="card-glass-gloss" />

                  {/* Top Badge */}
                  <div className="card-top-row">
                    <span className="card-category-badge">{album.coverTag || album.badge}</span>
                    <span className="card-tracks-count">{album.tracks?.length || 0} Tracks</span>
                  </div>

                  {/* Center Artwork Emblem */}
                  <div className="card-artwork-emblem">
                    {key === 'experience' && (
                      <div className="art-emblem-box emblem-amber">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                        </svg>
                        <span className="art-emblem-sub">EXP • 2024-2026</span>
                      </div>
                    )}
                    {key === 'projects' && (
                      <div className="art-emblem-box emblem-gold">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="art-emblem-sub">PROJECTS • AI</span>
                      </div>
                    )}
                    {key === 'competitions' && (
                      <div className="art-emblem-box emblem-bronze">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
                        </svg>
                        <span className="art-emblem-sub">HACKATHONS • ICPC</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="card-bottom-info">
                    <h3 className="card-album-name">{album.title}</h3>
                    <p className="card-album-artist">{album.subtitle}</p>
                    <div className="card-active-indicator">
                      {isCenter ? (
                        <span className="indicator-pill active">
                          <span className="live-dot" /> LOADED ON TURNTABLE
                        </span>
                      ) : (
                        <span className="indicator-pill select">CLICK TO LOAD</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="coverflow-nav-arrow arrow-right"
          onClick={handleNext}
          aria-label="Next Album"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};
