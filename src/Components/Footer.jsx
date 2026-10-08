
import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">

      <div className="container">

        <div className="row">

          {/* About */}
          <div className="col-md-5 mb-4">
            <h4 className="fw-bold">Pratiksha Sonwane</h4>

            <p className="text-secondary mt-3">
              Java Developer
            </p>

            <p className="text-secondary">
              B.Sc. Computer Science graduate passionate about
              software development and building full-stack applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>

              <li className="mb-2">
                <a href="#skills" className="text-white text-decoration-none">
                  Skills
                </a>
              </li>

              <li className="mb-2">
                <a href="#projects" className="text-white text-decoration-none">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Connect With Me</h5>

            <div className="d-flex gap-3">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-white fs-4"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="mailto:your-email@gmail.com"
                className="text-white fs-4"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>

            </div>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <p className="text-secondary mb-0">
            © 2026 Prateeksha. All Rights Reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;