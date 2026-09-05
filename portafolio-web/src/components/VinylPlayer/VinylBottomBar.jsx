import React from 'react';

/**
 * VinylBottomBar Component
 * Exact authentic reproduction of the Vinylist player bottom bar:
 * - Left: Angled white back arrow tab
 * - Controls: Stop button, Red Play triangle, Current time (e.g. 3:07)
 * - Center: Dynamic Red Soundwave Equalizer waveform
 * - Right: Angled black trapezoid dock with vintage glowing red "ON" power button
 */
export const VinylBottomBar = ({
  activeTrack,
  isPlaying,
  onTogglePlay,
  onPrevTrack,
  onNextTrack,
  isMuted,
  onToggleMute,
}) => {
  // 36 dynamic waveform equalizer bars
  const eqBars = [
    6, 12, 28, 45, 80, 95, 60, 40, 75, 90, 100, 85, 55, 30, 70, 90, 65, 45,
    30, 50, 80, 95, 70, 40, 60, 85, 100, 75, 45, 35, 60, 80, 50, 30, 20, 10,
  ];

  return (
    <div className="vinyl-bottom-bar-deck">
      {/* Left Angled White Tab with Back Arrow */}
      <div className="bottom-bar-left-tab" onClick={onPrevTrack} title="Previous / Return">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </div>

      {/* Playback Controls & Timestamp */}
      <div className="bottom-bar-controls">
        <button
          type="button"
          className="btn-vinyl-stop"
          onClick={() => isPlaying && onTogglePlay()}
          title="Stop Vinyl"
          aria-label="Stop Vinyl"
        >
          <span className="stop-square-glyph" />
        </button>

        <button
          type="button"
          className={`btn-vinyl-play ${isPlaying ? 'playing' : ''}`}
          onClick={onTogglePlay}
          title={isPlaying ? 'Pause' : 'Play'}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <span className="bottom-current-time">3:07</span>
      </div>

      {/* Center Dynamic Red Waveform Equalizer */}
      <div className="bottom-bar-waveform-center">
        <div className={`waveform-bars-wrap ${isPlaying ? 'animating' : 'paused'}`}>
          {eqBars.map((heightPercent, idx) => {
            const isPlayed = idx < 18; // Left half is active red, right half is grey
            return (
              <span
                key={idx}
                className={`wave-bar ${isPlayed ? 'bar-red' : 'bar-grey'}`}
                style={{
                  '--bar-height': `${heightPercent}%`,
                  '--anim-delay': `${(idx * 0.035) % 0.7}s`,
                }}
              />
            );
          })}
        </div>
        <span className="bottom-end-time">{activeTrack?.dateBadge || '6:28'}</span>
      </div>

      {/* Right Angled Black Trapezoid with Vintage Round Red "ON" Power Button */}
      <div className="bottom-bar-right-tab">
        <button
          type="button"
          className={`vintage-red-on-btn ${isPlaying ? 'is-on' : 'is-off'}`}
          onClick={onTogglePlay}
          title="Vinyl Turntable Power"
          aria-label="Vinyl Turntable Power"
        >
          <span className="red-btn-inner-ring">
            <span className="red-btn-text">On</span>
          </span>
        </button>
      </div>
    </div>
  );
};
