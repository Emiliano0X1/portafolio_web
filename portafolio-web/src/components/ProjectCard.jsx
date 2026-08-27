import React from 'react';
import { ArrowUpRightIcon } from './Icons';

/**
 * ProjectCard Component
 * Showcases major engineering projects with interactive mockups, badges, and smooth hover dynamics.
 */
export const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link || '#'}
      className="project-card"
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${project.title} on GitHub`}
    >
      {/* Mockup Preview Area */}
      <div className="project-card-image-wrapper">
        {project.id === 'smart-bussing' && (
          <div className="project-mockup mockup-transit">
            <div className="mockup-screen">
              <div className="mockup-header-bar">
                <span className="mockup-pill">Transit Engine • 500ms</span>
                <span className="mockup-badge-yellow">{project.badge}</span>
              </div>
              <div className="mockup-body">
                <div className="transit-route-visual">
                  <div className="route-node node-start"></div>
                  <div className="route-path-line"></div>
                  <div className="route-node node-end"></div>
                </div>
                <div className="mockup-accent-tag">A* Algorithm • Mapbox</div>
              </div>
            </div>
          </div>
        )}

        {project.id === 'aura-sempra' && (
          <div className="project-mockup mockup-aura">
            <div className="mockup-screen">
              <div className="mockup-header-bar">
                <span className="mockup-pill">SEMPRA Safety AI</span>
                <span className="mockup-badge-yellow">{project.badge}</span>
              </div>
              <div className="mockup-body">
                <div className="ai-generation-stat">
                  <span className="stat-highlight">3h → 10s</span>
                  <span className="stat-label">Gemini Content Gen</span>
                </div>
                <div className="mockup-accent-tag tag-gemini">Gemini API • 1,000+ Users</div>
              </div>
            </div>
          </div>
        )}

        {project.id === 'leetarena' && (
          <div className="project-mockup mockup-leetarena">
            <div className="mockup-screen">
              <div className="mockup-header-bar">
                <span className="mockup-pill">WebSockets Sync</span>
                <span className="mockup-badge-yellow">{project.badge}</span>
              </div>
              <div className="mockup-body">
                <div className="match-prediction-bar">
                  <div className="prediction-fill" style={{ width: '78%' }}></div>
                </div>
                <div className="mockup-accent-tag">scikit-learn • Random Forest</div>
              </div>
            </div>
          </div>
        )}

        {/* Top-Right Arrow Indicator */}
        <div className="project-card-arrow-badge">
          <ArrowUpRightIcon />
        </div>
      </div>

      {/* Card Information */}
      <div className="project-card-content">
        <div className="project-card-header">
          <h3 className="project-card-title">{project.title}</h3>
        </div>
        <p className="project-card-subtitle">{project.subtitle}</p>
        <p className="project-card-tag">{project.tag}</p>
      </div>
    </a>
  );
};
