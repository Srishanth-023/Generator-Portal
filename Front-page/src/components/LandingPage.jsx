import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Header with top blue bar matching the Faculty Request style */}
      <header className="landing-header">
        <div className="header-top-bar"></div>
        <div className="header-content">
          <div className="logo-container">
            <img src="/kite-logo.png" alt="KITE Logo" className="logo" />
          </div>
          <div className="title-section">
            <h1 className="main-title">Letter Generator Portal</h1>
            <p className="subtitle">KGiSL Institute of Technology</p>
          </div>
          <div className="tech-community-logo">
            <img
              src="/tech-community-logo.png"
              alt="Tech Community Logo"
              className="logo"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="intro-section">
          <h2 className="section-title">Choose Your Letter Type</h2>
          <p className="section-description">
            Select the type of letter you need to generate
          </p>
        </div>

        <div className="button-container">
          {/* Faculty Request Letter Button */}
          <button
            className="generator-button faculty-button"
            onClick={() => { window.location.href = "https://facultyrequest.netlify.app/"; }}
          >
            <div className="button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div className="button-content">
              <h3 className="button-title">Faculty Request Letter</h3>
              <p className="button-description">
                Generate official request letters for faculty members
              </p>
            </div>
            <div className="button-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </button>

          {/* Event Approval Letter Button */}
          <button
            className="generator-button event-button"
            onClick={() => { window.location.href = "https://eagen.netlify.app/"; }}
          >
            <div className="button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
              </svg>
            </div>
            <div className="button-content">
              <h3 className="button-title">Event Approval Letter</h3>
              <p className="button-description">
                Generate approval letters for events and activities
              </p>
            </div>
            <div className="button-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <p className="footer-left">© 2025 KGiSL Institute of Technology. All rights reserved.</p>
          <div className="footer-right">
            <span>Powered by IPS Tech Community</span>
            <img src="/tech-community-logo.png" alt="IPS Tech Community Logo" className="footer-logo" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
