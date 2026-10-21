# DYFI Karnataka Official Web Portal

Democratic Youth Federation of India (DYFI) - Karnataka State Committee Official Website & Central Administration Suite.

## 🚩 Overview

This portal serves as the digital front for DYFI Karnataka, enabling youth outreach, membership management, social initiatives (such as blood donation drives), campaign updates, and administrative management.

## ✨ Features

- **Public Web Portal (`index.html`)**:
  - State Committee leadership & district directory
  - Youth membership enrollment system
  - Blood donation emergency registry
  - News, campaigns, press releases, and publications
  - Event calendar & photo gallery
  - Responsive, modern mobile-friendly UI
- **Central Admin Suite (`admin.html`)**:
  - Secure management dashboard
  - Member verification & registration records
  - Blood donor database & blood request management
  - Announcements, news, and press release publishing
- **Local Dev Server (`serve.mjs`)**:
  - Zero-dependency Node.js HTTP static server

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- (Optional) [Node.js](https://nodejs.org/) installed to run the local development server

### Running Locally

You can simply open `index.html` in any browser, or run the local preview server using Node.js:

```bash
node serve.mjs
```

Then open your browser at:
```
http://127.0.0.1:3000
```

## 📁 Project Structure

```
├── .gitignore          # Git ignore rules for clean repository state
├── README.md           # Project documentation
├── index.html          # Public home page & member portal
├── admin.html          # Admin dashboard & management suite
├── serve.mjs           # Node.js static web server
├── css/
│   ├── style.css       # Main portal stylesheet
│   └── admin.css       # Admin dashboard stylesheet
├── js/
│   ├── app.js          # Main portal interactive scripts
│   ├── admin.js        # Admin dashboard logic
│   └── data-store.js   # Client-side data storage & state management
└── images/             # Organization banners, leadership photos, assets
```

## 📄 License

All rights reserved © Democratic Youth Federation of India (DYFI) Karnataka State Committee.
