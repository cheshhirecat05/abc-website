import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));

    if (storedProjects && storedProjects.length > 0) {
      setProjects(storedProjects);
    } else {
      // Default fallback projects (object format)
      setProjects([
        {
          icon: "🏢",
          title: "Enterprise Transformation",
          location: "Kathmandu, Nepal",
          description:
            "Digital transformation resulting in 40% efficiency improvement.",
          year: "2022-2023",
        },
        {
          icon: "🏪",
          title: "Retail Chain Expansion",
          location: "Pokhara, Nepal",
          description:
            "Strategic planning for expansion across 5 locations.",
          year: "2023",
        }
      ]);
    }
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <div className="subtitle">Our Projects</div>
          <h2>Excellence in Every Project</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">

                {/* SHOW IMAGE IF EXISTS */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                ) : (
                  <div className="project-placeholder">
                    {project.icon || "📁"}
                  </div>
                )}

              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <div className="project-location">
                  📍 {project.location}
                </div>
                <p>{project.description}</p>
                <span className="project-year">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
