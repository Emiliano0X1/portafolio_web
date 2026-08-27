import React from 'react';
import { DockIcon } from './Icons';

/**
 * Floating Dock Navigation Component
 * Replicates the Framer-style frosted pill dock with smooth active states.
 */
export const DockNavigation = ({ activeTab, onTabClick }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'summary', label: 'Summary', icon: 'summary' },
    { id: 'experience', label: 'Experience', icon: 'experience' },
    { id: 'skills', label: 'Skills', icon: 'skills' },
    { id: 'links', label: 'Links', icon: 'links' },
  ];

  return (
    <nav className="dock-container" aria-label="Main Navigation Dock">
      <div className="dock-glass-pill">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`dock-item ${isActive ? 'active' : ''}`}
              onClick={() => onTabClick(item.id)}
              aria-current={isActive ? 'page' : undefined}
            >
              <DockIcon name={item.icon} className="dock-item-icon" />
              <span className="dock-item-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
