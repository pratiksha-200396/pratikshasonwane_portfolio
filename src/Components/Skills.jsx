
import React from "react";

function Skills() {

  let skillCategories = [
    {
      title: "Backend Development",
      icon: "bi-code-slash",
      skills: [
        "Core Java",
        "JDBC",
        "Hibernate",
        "Spring",
        "Spring Boot",
        "Spring Data JPA"
      ]
    },
    {
      title: "Frontend Development",
      icon: "bi-laptop",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Bootstrap"
      ]
    },
    {
      title: "Database & Tools",
      icon: "bi-database",
      skills: [
        "MySQL",
        "Axios"
      ]
    }
  ];

  return (
    <section id="skills" className="py-5 bg-light">

      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <p className="text-primary fw-semibold mb-2">
            My Expertise
          </p>

          <h2 className="fw-bold display-6 mb-3">
            Technical Skills
          </h2>

          <p className="text-secondary">
            Technologies I use for full-stack application development.
          </p>

        </div>

        {/* Skills */}
        <div className="row justify-content-center">

          <div className="col-lg-9">

            {skillCategories.map((category, index) => (

              <div key={index} className="mb-5">

                {/* Category */}
                <div className="d-flex align-items-center mb-3">

                  <i
                    className={`bi ${category.icon} text-primary fs-4 me-3`}
                  ></i>

                  <h5 className="fw-bold mb-0">
                    {category.title}
                  </h5>

                </div>

                {/* Skill Badges */}
                <div className="d-flex flex-wrap gap-2">

                  {category.skills.map((skill, skillIndex) => (

                    <span
                      key={skillIndex}
                      className="badge rounded-pill bg-white text-dark border px-3 py-2 fw-normal"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

                {index < skillCategories.length - 1 && (
                  <hr className="mt-4 text-secondary" />
                )}

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;