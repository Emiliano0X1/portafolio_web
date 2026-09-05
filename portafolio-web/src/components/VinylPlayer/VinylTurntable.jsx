import React from 'react';

/**
 * VinylTurntable Component
 * Renders a realistic vinyl turntable with animated spinning record,
 * concentric vinyl grooves, dynamic light reflections, and an articulated tonearm.
 */
export const VinylTurntable = ({ activeTrack, activeAlbum, isPlaying, onTogglePlay }) => {
  return (
    <div className="vinyl-turntable-container" onClick={onTogglePlay} title="Click to play/pause vinyl">
      {/* Outer Platter Base */}
      <div className="turntable-platter-deck">

        {/* Turntable Platter Rim */}
        <div className="turntable-platter-rim">

          {/* Spinning Vinyl Record */}
          <div className={`vinyl-disc ${isPlaying ? 'spinning' : 'paused'}`}>
            {/* Concentric Vinyl Grooves */}
            <div className="vinyl-groove groove-outer" />
            <div className="vinyl-groove groove-mid" />
            <div className="vinyl-groove groove-inner" />

            {/* Dual Specular Light Reflections (Sheen) */}
            <div className="vinyl-sheen sheen-1" />
            <div className="vinyl-sheen sheen-2" />

            {/* Center Label / Sticker */}
            <div className="vinyl-center-label">
              <div className="center-label-inner">
                <div className="center-symbol">
                  <svg viewBox="0 0 40 40" className="center-triquetra-icon">
                    <circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
                    <path
                      d="M20,6 C13,15 13,25 20,34 C27,25 27,15 20,6 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M6,20 C15,13 25,13 34,20 C25,27 15,27 6,20 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <circle cx="20" cy="20" r="3.5" fill="currentColor" />
                  </svg>
                </div>
                <div className="center-album-text">{activeAlbum?.title || 'PORTFOLIO'}</div>
                <div className="center-track-badge">{activeTrack?.dateBadge || '33 RPM'}</div>
              </div>

              {/* Center Spindle Hole */}
              <div className="center-spindle-hole">
                <div className="center-spindle-pin" />
              </div>
            </div>
          </div>
        </div>

        {/* Articulated Tonearm (Turntable Arm & Needle) */}
        <div className={`turntable-tonearm-assembly ${isPlaying ? 'arm-on-record' : 'arm-at-rest'}`}>
          {/* Base Pivot */}
          <div className="tonearm-base">
            <div className="tonearm-pivot-ring" />
            <div className="tonearm-weight" />
          </div>

          {/* Metal Curved Arm Rod */}
          <div className="tonearm-rod">
            {/* Needle Head / Cartridge */}
            <div className="tonearm-headshell">
              <div className="needle-cartridge" />
              <div className="needle-point" />
              {isPlaying && <div className="needle-active-glow" />}
            </div>
          </div>
        </div>

        {/* Subtle Speed & Status Badge */}
        <div className="turntable-status-indicator">
          <span className={`status-led ${isPlaying ? 'active' : ''}`} />
          <span className="status-text">{isPlaying ? 'PLAYING 33⅓ RPM' : 'STANDBY'}</span>
        </div>
      </div>
    </div>
  );
};
