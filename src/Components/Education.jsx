import React from "react";

function Education() {
  return (
    <section id="education" className="py-5 bg-light">

      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
            My Academic Background
          </span>

          <h2 className="fw-bold display-6 mb-3">
            Education
          </h2>

          <p className="text-secondary">
            My educational qualification
          </p>

        </div>

        {/* Education */}
        <div className="row justify-content-center">

          <div className="col-lg-9">

            <div className="card border-0 shadow-sm overflow-hidden">

              <div className="card-body p-4 p-md-5">

                <div className="row align-items-center">

                  {/* Icon */}
                  <div className="col-md-2 text-center mb-4 mb-md-0">

                    <div className="bg-primary-subtle text-primary rounded-circle
                                    d-inline-flex align-items-center justify-content-center"
                         style={{
                           width: "80px",
                           height: "80px"
                         }}>

                      <i className="bi bi-mortarboard-fill fs-1"></i>

                    </div>

                  </div>

                  {/* Details */}
                  <div className="col-md-10">

                    <div className="d-flex flex-wrap justify-content-between
                                    align-items-start gap-2">

                      <div>

                        <h4 className="fw-bold mb-2">
                          B.Sc. Computer Science
                        </h4>

                        <p className="text-primary fw-semibold mb-3">
                          MGM’s Dr. G. Y. Pathrikar College of Computer Science
                          & Information Technology, Aurangabad
                        </p>

                      </div>

                      <span className="badge bg-dark rounded-pill px-3 py-2">
                        2023
                      </span>

                    </div>

                    <hr className="my-3" />

                    {/* Achievement */}
                    <div className="d-flex align-items-center">

                      <i className="bi bi-award-fill text-primary fs-4 me-3"></i>

                      <div>
                        <small className="text-secondary d-block">
                          Academic Performance
                        </small>

                        <span className="fw-bold">
                          CGPA: 8.25
                        </span>
                      </div>

                    </div>

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

export default Education;