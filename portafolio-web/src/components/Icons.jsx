import React from 'react';

/**
 * Technology and Tool Vector Icons
 * Crisp SVG logos with exact brand palettes.
 */
export const ToolIcon = ({ name, className = "tool-svg" }) => {
  switch (name.toLowerCase()) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M11.5 8H5.5V10.5H7.5V18H10V10.5H11.5V8Z" fill="#FFFFFF" />
          <path d="M19 10.5C18.5 9.5 17.5 9 16 9C14 9 13 10.2 13 11.8C13 15 17 14.5 17 16C17 16.8 16.2 17.2 15.2 17.2C14 17.2 13.2 16.4 13 15.5H11C11.3 17.5 12.8 19 15.2 19C17.6 19 19.2 17.6 19.2 15.8C19.2 13 15.2 13.2 15.2 11.8C15.2 11.2 15.8 10.8 16.5 10.8C17.2 10.8 17.8 11.2 18.2 11.8L19 10.5Z" fill="#FFFFFF" />
        </svg>
      );

    case 'java':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M8.5 17.5C8.5 17.5 9.5 18.5 12 18.5C14.5 18.5 15.5 17.5 15.5 17.5" stroke="#EA2D2E" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 19.5C7 19.5 9 21 12 21C15 21 17 19.5 17 19.5" stroke="#007396" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 14.5C15.5 13.5 16 11 13 9.5C10 8 13.5 6 12 4C11.5 5.5 10 6.5 11.5 7.5C13 8.5 11 10.5 9 11.5C7 12.5 9 14 10.5 14C12 14 12.5 14.5 14 14.5Z" fill="#5382A1" />
        </svg>
      );

    case 'springboot':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <polygon points="12,2 22,8 22,18 12,24 2,18 2,8" fill="#6DB33F" />
          <path d="M9 13C8.4 12.4 8 11.5 8 10.5C8 8.6 9.6 7 11.5 7C12.5 7 13.4 7.4 14 8L12.5 9.5C12.2 9.2 11.9 9 11.5 9C10.7 9 10 9.7 10 10.5C10 10.9 10.2 11.2 10.5 11.5L9 13ZM15 11C15.6 11.6 16 12.5 16 13.5C16 15.4 14.4 17 12.5 17C11.5 17 10.6 16.6 10 16L11.5 14.5C11.8 14.8 12.1 15 12.5 15C13.3 15 14 14.3 14 13.5C14 13.1 13.8 12.8 13.5 12.5L15 11Z" fill="#FFFFFF" />
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M11.9 2C6.5 2 6.8 4.3 6.8 4.3L6.8 6.7H12.1V7.5H4.2C2 7.5 2 10.2 2 10.2L2 12.8C2 15 4 15 4 15H5.4V13.2C5.4 11.3 7 11.3 7 11.3H12.2C13.9 11.3 14.2 9.8 14.2 9.8V4.3C14.2 2.7 11.9 2 11.9 2ZM9.5 3.5C10 3.5 10.4 3.9 10.4 4.4C10.4 4.9 10 5.3 9.5 5.3C9 5.3 8.6 4.9 8.6 4.4C8.6 3.9 9 3.5 9.5 3.5Z" fill="#3776AB" />
          <path d="M12.1 22C17.5 22 17.2 19.7 17.2 19.7L17.2 17.3H11.9V16.5H19.8C22 16.5 22 13.8 22 13.8L22 11.2C22 9 20 9 20 9H18.6V10.8C18.6 12.7 17 12.7 17 12.7H11.8C10.1 12.7 9.8 14.2 9.8 14.2V19.7C9.8 21.3 12.1 22 12.1 22ZM14.5 20.5C14 20.5 13.6 20.1 13.6 19.6C13.6 19.1 14 18.7 14.5 18.7C15 18.7 15.4 19.1 15.4 19.6C15.4 20.1 15 20.5 14.5 20.5Z" fill="#FFD43B" />
        </svg>
      );

    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <polygon points="12,2 22,7.8 22,16.2 12,22 2,16.2 2,7.8" fill="#339933" />
          <path d="M12 5.5L18 9V15L12 18.5L6 15V9L12 5.5Z" fill="#215732" opacity="0.4" />
          <path d="M12 8L15 10V14L12 16L9 14V10L12 8Z" fill="#FFFFFF" />
        </svg>
      );

    case 'postgresql':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <circle cx="12" cy="12" r="10" fill="#336791" />
          <path d="M12 5C8.5 5 6 7.5 6 11C6 14 7.5 16.5 10 17.5V19H14V17.5C16.5 16.5 18 14 18 11C18 7.5 15.5 5 12 5ZM12 7C14.5 7 16 8.5 16 11C16 13 14.5 14.5 12 14.5C9.5 14.5 8 13 8 11C8 8.5 9.5 7 12 7Z" fill="#FFFFFF" />
        </svg>
      );

    case 'docker':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <rect x="2" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
          <rect x="6" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
          <rect x="10" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
          <rect x="6" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
          <rect x="10" y="6" width="3" height="3" rx="0.5" fill="#2496ED" />
          <rect x="14" y="10" width="3" height="3" rx="0.5" fill="#2496ED" />
          <path d="M22 12.5C21.5 12 20 12 19 12.5C18 11.5 17 11.5 16 11.8V14H1V15.5C1 18.5 4 21 9 21C16 21 21 17.5 22 13.5C22.5 13.5 23 13 22 12.5Z" fill="#2496ED" />
        </svg>
      );

    case 'aws':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M7 11.5L8.5 8L10 11.5H7ZM4 15H6.2L7.3 12.8H11.2L12.3 15H14.5L10 5H8.5L4 15Z" fill="#FF9900" />
          <path d="M15 15H17.2V5H15V15Z" fill="#FF9900" />
          <path d="M4 18C8 20.5 16 20.5 20 17" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
          <path d="M18.5 16L20 17L18.5 18.5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'gemini':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" fill="url(#gemini-gradient)" />
          <defs>
            <linearGradient id="gemini-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4796E6" />
              <stop offset="0.5" stopColor="#9B72CB" />
              <stop offset="1" stopColor="#D96570" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'supabase':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M13.2 2.2L3.6 13.9C3.1 14.5 3.5 15.5 4.4 15.5H11.5L10.8 21.8C10.7 22.6 11.7 23.1 12.3 22.5L21.9 10.8C22.4 10.2 22 9.2 21.1 9.2H14L14.7 2.9C14.8 2.1 13.8 1.6 13.2 2.2Z" fill="url(#supabase-grad)" />
          <defs>
            <linearGradient id="supabase-grad" x1="3" y1="2" x2="22" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3ECF8E" />
              <stop offset="1" stopColor="#249361" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none">
          <path d="M21.6 10.9L13.1 2.4C12.3 1.6 11 1.6 10.2 2.4L8.7 3.9L11.2 6.4C12 6.1 12.9 6.3 13.5 6.9C14.2 7.6 14.3 8.6 13.9 9.4L16.2 11.7C17 11.3 18 11.4 18.7 12.1C19.6 13 19.6 14.3 18.7 15.2C17.8 16.1 16.5 16.1 15.6 15.2C15 14.6 14.8 13.7 15.1 12.9L12.9 10.7V15.7C13.2 16 13.4 16.4 13.4 16.8C13.4 17.8 12.6 18.6 11.6 18.6C10.6 18.6 9.8 17.8 9.8 16.8C9.8 16 10.3 15.3 11 15V9.9L8.7 7.6L2.4 13.9C1.6 14.7 1.6 16 2.4 16.8L10.9 25.3C11.7 26.1 13 26.1 13.8 25.3L21.6 17.5C22.4 16.7 22.4 15.4 21.6 14.6L21.6 10.9Z" fill="#F05032" />
        </svg>
      );

    default:
      return null;
  }
};

/**
 * Social Links Icons
 */
export const SocialIcon = ({ platform, className = "social-svg" }) => {
  switch (platform.toLowerCase()) {
    case 'linkedin':
      return (
        <div className="social-badge linkedin-badge" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" className={className} fill="#FFFFFF">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </div>
      );

    case 'github':
      return (
        <div className="social-badge github-badge" aria-label="GitHub">
          <svg viewBox="0 0 24 24" className={className} fill="#FFFFFF">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </div>
      );

    case 'email':
      return (
        <div className="social-badge email-badge" aria-label="Email">
          <svg viewBox="0 0 24 24" className={className} fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};

/**
 * Floating Dock Navigation Icons
 */
export const DockIcon = ({ name, className = "dock-svg" }) => {
  switch (name.toLowerCase()) {
    case 'home':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );

    case 'summary':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );

    case 'experience':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );

    case 'skills':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );

    case 'links':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );

    default:
      return null;
  }
};

/**
 * Contact and Action Icons
 */
export const MailIcon = ({ className = "contact-svg" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const PhoneIcon = ({ className = "contact-svg" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const ArrowUpRightIcon = ({ className = "arrow-svg" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);
