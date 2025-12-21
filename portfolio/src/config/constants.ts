/**
 * Portfolio Configuration Constants
 * Replace placeholder values with your actual information
 */

export const config = {
  // Contact Information
  email: process.env.REACT_APP_EMAIL || "your.email@example.com",
  linkedIn: process.env.REACT_APP_LINKEDIN || "https://linkedin.com/in/yourprofile",
  github: process.env.REACT_APP_GITHUB || "https://github.com/",

  // Resume
  resumeUrl: process.env.REACT_APP_RESUME_URL || "#", // Replace with actual resume URL or PDF path

  // Social Links (used in SocialNetworks component)
  social: {
    facebook: process.env.REACT_APP_FACEBOOK || "https://facebook.com",
    linkedin: process.env.REACT_APP_LINKEDIN || "https://linkedin.com",
    github: process.env.REACT_APP_GITHUB || "https://github.com",
  },
} as const;

