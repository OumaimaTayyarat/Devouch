import { useState } from "react";
function Element2() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <nav id="nav" className="nav">
        <div className="nav-container">
          <a href="#" className="logo-wrapper">
            <div className="logo">
              <div id="container">
                <div id="border"></div>
                <div id="blocker-1"></div>
                <div id="blocker-2"></div>
                <h2>Welcome to </h2>
                <h1>ModaMind</h1>
                <h2>the fantasy</h2>
              </div>
            </div>
          </a>
          <div className="menu-wrapper">
            <div className="mobile-wrapper">
              <div className="mobile-mobile-head">
                <a href="#" className="logo-wrapper">
                  <img
                    className="logo-img"
                    src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/f06d7301a0e51d1ada45994de485c8872270c4c6/marketing-hero-section/assets/logo.svg"
                    alt="Open Props logo"
                    width="160"
                    height="29.44"
                  />
                </a>
                <button className="icon-btn" aria-label="Close Menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
                  </svg>
                </button>
              </div>
              <menu className="menu">
                <li>
                  <a href="#" className="nav-link">
                    Nos Collections
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    ModaMind Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link">
                    Contactez-nous
                  </a>
                </li>
              </menu>
            </div>

            <div className="actions">
              <a href="#" className="button-link">
                Login
              </a>
              <a href="#" className="button-link primary">
                Panier
              </a>
            </div>
          </div>

          <button className="icon-btn" aria-label="Open Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </button>
        </div>
      </nav>
      <main className="main">
        <div className="hero">
          <div className="hero-visual">
            <div className="hero-visual-wrapper">
              <video
                className="hero-video video-1"
                autoPlay // Corrected attribute name
                loop
                muted
                poster="https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/marketing-hero-section/assets/poster.avif"
                role="none"
              >
                <source
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/f06d7301a0e51d1ada45994de485c8872270c4c6/marketing-hero-section/assets/video-1.mp4"
                  type="video/mp4"
                />
              </video>
              <video
                className="hero-video video-2"
                autoPlay // Corrected attribute name
                loop
                muted
                role="none"
              >
                <source
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/f06d7301a0e51d1ada45994de485c8872270c4c6/marketing-hero-section/assets/video-2.mp4"
                  type="video/mp4"
                />
              </video>
              <video
                className="hero-video video-3"
                autoPlay // Corrected attribute name
                loop
                muted
                role="none"
              >
                <source
                  src="https://raw.githubusercontent.com/mobalti/open-props-interfaces/f06d7301a0e51d1ada45994de485c8872270c4c6/marketing-hero-section/assets/video-3.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="hero-content">
            <header className="hero-header">
              <div className="headline1">
                <span className="headline-container">
                  <div className="headline-scroller">
                    <span className="scroll-item">
                      Explorez nos collections uniques
                    </span>
                    <span className="scroll-item">
                      Inspirées des tendances mondiales
                    </span>
                    <span className="scroll-item">
                      Attention minutieuse aux détails
                    </span>
                    <span className="scroll-item">
                      Look décontracté pour le quotidien
                    </span>
                    <span className="scroll-item">Trouvez votre bonheur</span>
                  </div>
                </span>

                <span className="modaMind-highlight">Chez ModaMind</span>
              </div>
              <div className="content-actions">
                {/* <a href="#" className="button-link primary">
                  Get started
                </a> */}
              </div>
            </header>
            <a href="#" aria-label="Scroll" className="scroll-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Element2;
