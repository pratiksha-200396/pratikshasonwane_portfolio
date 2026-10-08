import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center text-white"
      style={{
        minHeight: "100vh",
        backgroundColor: "#1f2937"
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-8">

            {/* Small Intro */}
            <p className="text-info fw-semibold mb-3 fs-5">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="display-2 fw-bold mb-3">
              Pratiksha Sonwane
            </h1>

            {/* Role */}
            <h2 className="fw-semibold text-light mb-4">
              Java Developer
            </h2>

            {/* Line */}
            <div
              className="bg-info mb-4"
              style={{ width: "60px", height: "4px" }}
            ></div>

            {/* Description */}
            <p
              className="lead text-light opacity-75 mb-4"
              style={{ maxWidth: "650px" }}
            >
              B.Sc. Computer Science graduate with hands-on experience
              in full-stack application development through projects.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3">

              <a
                href="#projects"
                className="btn btn-info text-dark fw-semibold px-4 py-2"
              >
                <i className="bi bi-code-slash me-2"></i>
                View Projects
              </a>

              <a
                href="#contact"
                className="btn btn-outline-light px-4 py-2"
              >
                <i className="bi bi-envelope me-2"></i>
                Contact Me
              </a>

            </div>

            {/* Bottom Info */}
            <div className="d-flex flex-wrap gap-4 mt-5">

              <span className="text-light opacity-75">
                <i className="bi bi-mortarboard-fill text-info me-2"></i>
                B.Sc. Computer Science
              </span>

              <span className="text-light opacity-75">
                <i className="bi bi-briefcase-fill text-info me-2"></i>
                Entry-Level Developer
              </span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;