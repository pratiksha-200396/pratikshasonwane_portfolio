import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">

      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
            Get In Touch
          </span>

          <h2 className="fw-bold display-6 mb-3">
            Contact Me
          </h2>

          <p className="text-secondary">
            Let's connect and discuss opportunities.
          </p>

        </div>

        {/* Contact Details */}
        <div className="row justify-content-center">

          <div className="col-lg-9">

            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">

                <div className="row g-4">

                  {/* Email */}
                  <div className="col-md-6">
                    <a
                      href="mailto:pratikshasonwane03@gmail.com"
                      className="text-decoration-none text-dark"
                    >
                      <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">

                        <div className="bg-primary-subtle text-primary rounded-circle
                                        d-flex align-items-center justify-content-center me-3"
                             style={{ width: "50px", height: "50px" }}>
                          <i className="bi bi-envelope-fill fs-5"></i>
                        </div>

                        <div>
                          <small className="text-secondary d-block">
                            Email
                          </small>
                          <span className="fw-semibold">
                            pratikshasonwane03@gmail.com
                          </span>
                        </div>

                      </div>
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <a
                      href="tel:9370768313"
                      className="text-decoration-none text-dark"
                    >
                      <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">

                        <div className="bg-primary-subtle text-primary rounded-circle
                                        d-flex align-items-center justify-content-center me-3"
                             style={{ width: "50px", height: "50px" }}>
                          <i className="bi bi-telephone-fill fs-5"></i>
                        </div>

                        <div>
                          <small className="text-secondary d-block">
                            Phone
                          </small>
                          <span className="fw-semibold">
                            +91 9370768313
                          </span>
                        </div>

                      </div>
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <div className="col-md-6">
                    <a
                      href="https://www.linkedin.com/in/pratiksha-sonwane-1599a8370"
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">

                        <div className="bg-primary-subtle text-primary rounded-circle
                                        d-flex align-items-center justify-content-center me-3"
                             style={{ width: "50px", height: "50px" }}>
                          <i className="bi bi-linkedin fs-5"></i>
                        </div>

                        <div>
                          <small className="text-secondary d-block">
                            LinkedIn
                          </small>
                          <span className="fw-semibold">
                            Pratiksha Sonwane
                          </span>
                        </div>

                      </div>
                    </a>
                  </div>

                  {/* GitHub */}
                  <div className="col-md-6">
                    <a
                      href="https://github.com/pratiksha-200396"
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none text-dark"
                    >
                      <div className="d-flex align-items-center p-3 bg-light rounded-3 h-100">

                        <div className="bg-primary-subtle text-primary rounded-circle
                                        d-flex align-items-center justify-content-center me-3"
                             style={{ width: "50px", height: "50px" }}>
                          <i className="bi bi-github fs-5"></i>
                        </div>

                        <div>
                          <small className="text-secondary d-block">
                            GitHub
                          </small>
                          <span className="fw-semibold">
                            pratiksha-200396
                          </span>
                        </div>

                      </div>
                    </a>
                  </div>

                </div>

                {/* Bottom Message */}
                <div className="text-center mt-5 pt-4 border-top">

                  <p className="text-secondary mb-3">
                    I am currently looking for an entry-level Java Developer
                    opportunity.
                  </p>

                  <a
                    href="mailto:pratikshasonwane03@gmail.com"
                    className="btn btn-dark px-4 py-2"
                  >
                    <i className="bi bi-send-fill me-2"></i>
                    Get In Touch
                  </a>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;