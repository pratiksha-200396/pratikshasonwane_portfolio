import React from "react";

function Projects() {

  let projects = [
    {
      title: "Bank Management System",
      description:
        "A full-stack banking application with account management, deposit, withdrawal, and transaction handling features.",
      technologies:
        "Java, Spring Boot, Spring Data JPA, MySQL, React.js, Axios",
      github: "https://github.com/pratiksha-200396/Bank_App_Backend",
      icon: "bi-bank"
    },
    {
      title: "Course Management System",
      description:
        "A full-stack application for managing courses, course details, and database operations.",
      technologies:
        "Spring Boot, Spring Data JPA, MySQL, React.js, Axios",
      github: "https://github.com/pratiksha-200396/Course_management",
      icon: "bi-book"
    },
    {
      title: "Tours & Travels",
      description:
        "A travel management application designed to manage tour details, destinations, hotels, and travel-related information.",
      technologies:
        "Java, Spring Boot, Spring Data JPA, MySQL, React.js",
      github: "https://github.com/pratiksha-200396/ToursandTravelsproject",
      icon: "bi-airplane"
    },
    {
      title: "Hospital Management System",
      description:
        "A hospital management application for managing patient information and performing basic healthcare-related operations.",
      technologies:
        "Java, Spring Boot, Spring Data JPA, MySQL, React.js",
      github: "https://github.com/pratiksha-200396/Hospitalmanagementproject",
      icon: "bi-hospital"
    },
    {
      title: "Hotel Management System",
      description:
        "A full-stack hotel management application for managing hotel-related information and operations.",
      technologies:
        "Java, Spring Boot, Spring Data JPA, MySQL, React.js",
      github: "https://github.com/pratiksha-200396/Hotel_management.git",
      icon: "bi-building"
    },
    {
      title: "Cafe Management System",
      description:
        "A full-stack cafe management application for managing cafe-related information and operations.",
      technologies:
        "Java, Spring Boot, Spring Data JPA, MySQL, React.js",
      github: "https://github.com/pratiksha-200396/Cafe_management.git",
      icon: "bi-cup-hot"
    },
    {
      title: "E-Commerce Project",
      description:
        "A full-stack e-commerce application designed for managing products, orders, customers, and shopping-related operations.",
      technologies:
        "Java, Spring Boot, Spring Data JPA, MySQL, React.js, Axios",
      github: "https://github.com/pratiksha-200396/E-commerce_project.git",
      icon: "bi-cart3"
    },
    {
  title: "Library Management System",
  description:
    "A Java-based library management application developed using Hibernate for database interaction and library-related operations.",
  technologies:
    "Java, Hibernate, MySQL",
  github: "https://github.com/pratiksha-200396/Libraryhibernateproject.git",
  icon: "bi-book-half"
}
  ];

  return (
    <section id="projects" className="py-5 bg-light">

      <div className="container py-5">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
            My Work
          </span>

          <h2 className="fw-bold display-6">
            Projects
          </h2>

          <p
            className="text-secondary mx-auto"
            style={{ maxWidth: "600px" }}
          >
            A collection of projects I have developed to gain practical
            experience in full-stack application development.
          </p>

        </div>

        {/* Project Cards */}
        <div className="row g-4">

          {projects.map((project, index) => (

            <div className="col-md-6 col-lg-6" key={index}>

              <div className="card border-0 shadow-sm h-100">

                <div className="card-body p-4">

                  {/* Icon */}
                  <div
                    className="d-flex align-items-center justify-content-center
                    bg-primary-subtle text-primary rounded-3 mb-4"
                    style={{
                      width: "60px",
                      height: "60px"
                    }}
                  >
                    <i className={`bi ${project.icon} fs-3`}></i>
                  </div>

                  {/* Title */}
                  <h4 className="fw-bold mb-3">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-secondary mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">

                    <small className="fw-bold text-dark d-block mb-2">
                      Technologies
                    </small>

                    <div className="d-flex flex-wrap gap-2">

                      {project.technologies
                        .split(", ")
                        .map((tech, techIndex) => (

                          <span
                            key={techIndex}
                            className="badge rounded-pill bg-light text-dark border"
                          >
                            {tech}
                          </span>

                        ))}

                    </div>

                  </div>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark px-4"
                  >
                    <i className="bi bi-github me-2"></i>
                    View on GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;