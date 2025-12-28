/**
 * Portfolio Configuration Constants
 * Replace placeholder values with your actual information
 */

export const config = {
  // Contact Information
  email: process.env.REACT_APP_EMAIL || "lamnguyen.hcmut@gmail.com",
  linkedIn: process.env.REACT_APP_LINKEDIN || "https://www.linkedin.com/in/lamnguyen-kn97/",
  github: process.env.REACT_APP_GITHUB || "https://github.com/lamnguyenkn97",

  // Resume
  resumeUrl: process.env.REACT_APP_RESUME_URL || "#", // Replace with actual resume URL or PDF path

  // Social Links (used in SocialNetworks component)
  social: {
    facebook: process.env.REACT_APP_FACEBOOK || "https://facebook.com",
    linkedin: process.env.REACT_APP_LINKEDIN || "https://www.linkedin.com/in/lamnguyen-kn97/",
    github: process.env.REACT_APP_GITHUB || "https://github.com/lamnguyenkn97",
  },
} as const;
