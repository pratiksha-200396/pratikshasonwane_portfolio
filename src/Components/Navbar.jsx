import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top shadow-sm">
      <div className="container">

        <a className="navbar-brand fw-bold" href="#home">
          Pratiksha Sonwane
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link px-3" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link px-3" href="#contact">
                Contact
              </a>
            </li>

         {/* Resume */}
<li className="nav-item ms-lg-2 mt-2 mt-lg-0">
  <a
    href="/PRATIKSHA_SONWANE_FlowCV_Resume_2026-10-07%20(2).pdf"
    download
    className="btn btn-info text-dark fw-semibold px-3"
  >
    <i className="bi bi-download me-2"></i>
    Resume
  </a>
</li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;