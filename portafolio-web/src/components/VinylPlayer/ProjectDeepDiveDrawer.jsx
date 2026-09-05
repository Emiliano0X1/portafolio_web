import React, { useEffect } from 'react';

/**
 * ProjectDeepDiveDrawer Component
 * Slide-over deep dive panel sliding in from the right.
 * Displays comprehensive bulletpoints, interactive image collage cards, tech stack, and prev/next track navigation.
 */
export const ProjectDeepDiveDrawer = ({
  isOpen,
  onClose,
  track,
  album,
  trackIndex,
  totalTracks,
  onPrevTrack,
  onNextTrack,
  onNavigateToProject,
}) => {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!track) return null;

  return (
    <div className={`deepdive-drawer-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <aside
        className={`deepdive-drawer-content ${isOpen ? 'open' : ''}`}
        onClick={(e) => e.stopPropagation()}
        aria-label={`Deep Dive: ${track.title}`}
      >
        {/* Top Control Bar */}
        <div className="drawer-top-bar">
          <div className="drawer-track-nav">
            <button
              type="button"
              className="drawer-nav-btn"
              onClick={onPrevTrack}
              title="Previous Track"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
              </svg>
              <span>Prev</span>
            </button>

            <span className="drawer-track-indicator">
              Track {trackIndex + 1} of {totalTracks}
            </span>

            <button
              type="button"
              className="drawer-nav-btn"
              onClick={onNextTrack}
              title="Next Track"
            >
              <span>Next</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
              </svg>
            </button>
          </div>

          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close deep dive panel"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Main Content */}
        <div className="drawer-body-scroll">
          {/* Header Banner */}
          <div className="drawer-hero-header">
            <div className="drawer-category-pill">{track.category || album?.title}</div>
            <h1 className="drawer-title">{track.title}</h1>
            <div className="drawer-subtitle-row">
              <span className="drawer-subtitle">{track.subtitle}</span>
              <span className="drawer-dot-sep">•</span>
              <span className="drawer-date-badge">{track.dateFull}</span>
              {track.location && (
                <>
                  <span className="drawer-dot-sep">•</span>
                  <span className="drawer-location">{track.location}</span>
                </>
              )}
            </div>
          </div>

          {/* Quick Metrics Cards */}
          {track.metrics && track.metrics.length > 0 && (
            <div className="drawer-metrics-grid">
              {track.metrics.map((m, idx) => (
                <div key={idx} className="drawer-metric-box">
                  <div className="drawer-metric-num">{m.value}</div>
                  <div className="drawer-metric-tag">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Technical Contributions & Bullet Points */}
          <section className="drawer-section">
            <h2 className="drawer-section-title">
              <span className="title-icon">⚡</span> Key Engineering Contributions & Impact
            </h2>
            <ul className="drawer-bullets-list">
              {track.bullets.map((bullet, idx) => (
                <li key={idx} className="drawer-bullet-item">
                  <div className="drawer-bullet-icon-box">
                    <span className="bullet-glow-dot" />
                  </div>
                  <p className="drawer-bullet-text">{bullet}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Image Collage / System Architecture Showcase */}
          {track.collage && track.collage.length > 0 && (
            <section className="drawer-section">
              <h2 className="drawer-section-title">
                <span className="title-icon">🖼️</span> Visual Showcase & Architecture Collage
              </h2>
              <div className="drawer-collage-grid">
                {track.collage.map((item, idx) => (
                  <div key={item.id || idx} className={`collage-card card-variant-${(idx % 3) + 1}`}>
                    <div className="collage-card-preview">
                      {/* Generative Tech Mockup Visualization */}
                      <div className="collage-mockup-screen">
                        <div className="mockup-top-bar">
                          <span className="mockup-dot red" />
                          <span className="mockup-dot yellow" />
                          <span className="mockup-dot green" />
                          <span className="mockup-title-text">{item.tag || 'SYSTEM VIEW'}</span>
                        </div>
                        <div className="mockup-content-body">
                          {idx === 0 && (
                            <div className="mockup-chart-flow">
                              <div className="flow-box start">API Ingest</div>
                              <div className="flow-arrow">➔</div>
                              <div className="flow-box highlight">AI / Engine</div>
                              <div className="flow-arrow">➔</div>
                              <div className="flow-box end">Production DB</div>
                            </div>
                          )}
                          {idx === 1 && (
                            <div className="mockup-code-terminal">
                              <div className="code-line"><span className="code-kw">const</span> pipeline = <span className="code-fn">execute</span>()</div>
                              <div className="code-line"><span className="code-cmt">// Latency: &lt;500ms • Zero Collisions</span></div>
                              <div className="code-line"><span className="code-ok">✔ 100% Status Verified</span></div>
                            </div>
                          )}
                          {idx >= 2 && (
                            <div className="mockup-stat-radial">
                              <div className="stat-circle-ring">
                                <span className="stat-giant-num">3x</span>
                              </div>
                              <div className="stat-caption-sub">Performance Acceleration</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="collage-card-info">
                      <h3 className="collage-item-title">{item.title}</h3>
                      <p className="collage-item-caption">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tech Stack Tags */}
          {track.tags && track.tags.length > 0 && (
            <section className="drawer-section">
              <h2 className="drawer-section-title">
                <span className="title-icon">🛠️</span> Technologies & Frameworks
              </h2>
              <div className="drawer-tags-wrap">
                {track.tags.map((tag, idx) => (
                  <span key={idx} className="drawer-tag-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Action Links & Footer */}
          <div className="drawer-action-footer">
            {onNavigateToProject && (track.id === 'smart-bussing' || track.hasDedicatedPage) && (
              <button
                type="button"
                className="drawer-primary-action-btn"
                style={{ background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)', border: '1px solid #f97316' }}
                onClick={() => {
                  onClose();
                  onNavigateToProject(track.id);
                }}
              >
                <span>Open Dedicated {track.title} Page</span>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {track.links && track.links.map((lnk, idx) => (
              <a
                key={idx}
                href={lnk.url}
                target="_blank"
                rel="noreferrer"
                className="drawer-primary-action-btn"
              >
                <span>{lnk.label}</span>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            ))}

            <button
              type="button"
              className="drawer-back-btn"
              onClick={onClose}
            >
              Return to Vinyl Player
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};
