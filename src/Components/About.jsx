import React from "react";
import profile from "../assets/pratiksha.jpg";

function About() {
  return (
    <section id="about" className="py-5 bg-light">

      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
            Get To Know Me
          </span>

          <h2 className="fw-bold display-6 mb-3">
            About Me
          </h2>

          <p className="text-secondary">
            A little about my background and career journey
          </p>

        </div>

        {/* Main Content */}
        <div className="row align-items-center g-5">

          {/* Photo */}
          <div className="col-lg-5 text-center">

            <div className="position-relative d-inline-block">

              <img
                src={profile}
                alt="Pratiksha Sonwane"
                className="img-fluid rounded-circle shadow-lg border border-4 border-white"
                style={{
                  width: "360px",
                  height: "360px",
                  objectFit: "cover"
                }}
              />

              {/* Developer Badge */}
              <div className="position-absolute bottom-0 end-0 bg-white shadow rounded-pill px-4 py-2">
                <span className="text-primary fw-semibold">
                  <i className="bi bi-code-slash me-2"></i>
                  Java Developer
                </span>
              </div>

            </div>

          </div>

          {/* Content */}
          <div className="col-lg-7">

            <h3 className="fw-bold mb-4">
              Hello, I'm Pratiksha 👋
            </h3>

            <p className="text-secondary fs-5 lh-lg">
              I am a B.Sc. Computer Science graduate with a strong interest
              in Java development. I have developed full-stack applications
              through projects and gained practical experience in frontend,
              backend, and database integration.
            </p>

            <p className="text-secondary fs-5 lh-lg">
              I am a quick learner with good problem-solving skills and
              currently looking for an entry-level Java Developer opportunity
              to start my career in software development.
            </p>

            {/* Highlights */}
            <div className="row mt-4">

              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-center">

                  <div className="bg-primary-subtle rounded-circle p-3 me-3">
                    <i className="bi bi-mortarboard-fill text-primary fs-4"></i>
                  </div>

                  <div>
                    <small className="text-secondary d-block">
                      Education
                    </small>

                    <span className="fw-semibold">
                      B.Sc. Computer Science
                    </span>
                  </div>

                </div>
              </div>

              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-center">

                  <div className="bg-primary-subtle rounded-circle p-3 me-3">
                    <i className="bi bi-laptop-fill text-primary fs-4"></i>
                  </div>

                  <div>
                    <small className="text-secondary d-block">
                      Career Goal
                    </small>

                    <span className="fw-semibold">
                      Java Developer
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;