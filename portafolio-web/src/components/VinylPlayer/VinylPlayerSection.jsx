import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { AlbumCoverFlow } from './AlbumCoverFlow';
import { VinylTracklist } from './VinylTracklist';
import { VinylTurntable } from './VinylTurntable';
import { VinylInfoPanel } from './VinylInfoPanel';
import { VinylBottomBar } from './VinylBottomBar';
import { ProjectDeepDiveDrawer } from './ProjectDeepDiveDrawer';
import { vinylAudio } from './SoundEffects';

/**
 * VinylPlayerSection Component
 * Master component integrating:
 * 1. Top Standalone 3D Album CoverFlow Carousel
 * 2. Main Vinylist Split Console (Left active cover + clean tracks, Center Turntable, Right Info Panel)
 * 3. Modern Floating Pill Bottom Player Dock
 * 4. Slide-over Deep Dive Case Study Drawer
 */
export const VinylPlayerSection = ({ onNavigateToProject }) => {
  const albums = portfolioData.albums;
  const [activeAlbumKey, setActiveAlbumKey] = useState('experience');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const currentAlbum = albums[activeAlbumKey] || albums.experience;
  const tracks = currentAlbum?.tracks || [];

  // Active track defaults to first track of the album
  const [activeTrackId, setActiveTrackId] = useState(tracks[0]?.id);

  // Sync track when album changes
  useEffect(() => {
    if (tracks.length > 0) {
      setActiveTrackId(tracks[0].id);
    }
  }, [activeAlbumKey]);

  const activeTrack = tracks.find((t) => t.id === activeTrackId) || tracks[0];
  const currentTrackIndex = tracks.findIndex((t) => t.id === activeTrackId);

  // Toggle Play/Pause
  const handleTogglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (nextState) {
      vinylAudio.playNeedleDrop();
    }
  };

  // Select track
  const handleSelectTrack = (track) => {
    setActiveTrackId(track.id);
    setIsPlaying(true);
    vinylAudio.playNeedleDrop();
  };

  // Select album key from CoverFlow
  const handleSelectAlbumKey = (key) => {
    if (key !== activeAlbumKey) {
      setActiveAlbumKey(key);
      setIsPlaying(true);
      vinylAudio.playTrackClick();
    }
  };

  // Previous Track
  const handlePrevTrack = () => {
    if (tracks.length === 0) return;
    const prevIdx = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setActiveTrackId(tracks[prevIdx].id);
    setIsPlaying(true);
    vinylAudio.playNeedleDrop();
  };

  // Next Track
  const handleNextTrack = () => {
    if (tracks.length === 0) return;
    const nextIdx = (currentTrackIndex + 1) % tracks.length;
    setActiveTrackId(tracks[nextIdx].id);
    setIsPlaying(true);
    vinylAudio.playNeedleDrop();
  };

  // Toggle audio mute
  const handleToggleMute = () => {
    const newMute = !isMuted;
    setIsMuted(newMute);
    vinylAudio.isMuted = newMute;
  };

  return (
    <section id="experience" className="portfolio-section vinyl-player-experience-section">
      {/* 1. TOP STANDALONE 3D COVERFLOW SECTION (Synchronized with Vinyl Player) */}
      <AlbumCoverFlow
        albums={albums}
        activeAlbumKey={activeAlbumKey}
        onSelectAlbumKey={handleSelectAlbumKey}
      />

      {/* 2. MAIN VINYLIST SPLIT CONSOLE (Obsidian Dark Left & Warm Sand Cream Right) */}
      <div className="vinyl-player-outer-deck">
        <div className="vinyl-console-grid">

          {/* Left Column: Active Album Cover & Clean Tracklist */}
          <div className="vinyl-console-left">
            <VinylTracklist
              album={currentAlbum}
              tracks={tracks}
              activeTrack={activeTrack}
              isPlaying={isPlaying}
              onSelectTrack={handleSelectTrack}
            />
          </div>

          {/* Center Column: Turntable with Grooves, Sticker & Tonearm */}
          <div className="vinyl-console-center">
            <VinylTurntable
              activeTrack={activeTrack}
              activeAlbum={currentAlbum}
              isPlaying={isPlaying}
              onTogglePlay={handleTogglePlay}
            />
          </div>

          {/* Right Column: Sand/Cream Info Panel with Descriptions & Metrics */}
          <div className="vinyl-console-right">
            <VinylInfoPanel
              album={currentAlbum}
              track={activeTrack}
              trackIndex={currentTrackIndex}
              totalTracks={tracks.length}
              onOpenDeepDive={() => setIsDrawerOpen(true)}
              onNavigateToProject={onNavigateToProject}
            />
          </div>
        </div>

        {/* 3. VINYLIST BOTTOM CONTROLS & WAVEFORM BAR */}
        <VinylBottomBar
          activeTrack={activeTrack}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
          onPrevTrack={handlePrevTrack}
          onNextTrack={handleNextTrack}
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
        />
      </div>

      {/* 4. SLIDE-OVER DEEP DIVE DRAWER */}
      <ProjectDeepDiveDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        track={activeTrack}
        album={currentAlbum}
        trackIndex={currentTrackIndex}
        totalTracks={tracks.length}
        onPrevTrack={handlePrevTrack}
        onNextTrack={handleNextTrack}
        onNavigateToProject={onNavigateToProject}
      />
    </section>
  );
};
