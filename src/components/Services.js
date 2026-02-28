import React from "react";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="section-container">
        <div className="section-header">
          <div className="subtitle">Our Services</div>
          <h2>Comprehensive Engineering Solutions</h2>
        </div>

        <div className="services-grid">
          {[
            ["🏛️", "Architecture", "Innovative and functional architectural designs that blend aesthetics with practicality, creating spaces that inspire and serve their purpose."],
            ["🏗️", "Construction", "Professional construction management and execution services ensuring quality workmanship, safety standards, and timely project completion."],
            ["🏙️", "Urban Planning", "Comprehensive urban planning and development services for sustainable and well-organized communities and infrastructure."],
            ["🏢", "Structure Design", "Complete structural analysis and design for residential, commercial, and industrial buildings using latest software and international codes."],
            ["💰", "Financial Advisory", "Professional financial advisory with detailed reports and assessments."],
            ["🌳", "Landscape Design", "Creative landscape architecture and design services that harmonize natural and built environments for aesthetic and functional outdoor spaces"],
            // ["📊", "Business Analytics", "Data-driven insights for better business decisions."],
            ["📐", "Survey", "Accurate land surveying, topographic surveys, and geotechnical investigation services using modern equipment and techniques."],
            ["🌉", "Digital Transformation", "Modernizing business operations for growth."],
            ["🎓", "Training & Development", "Professional training programs and workshops for engineers, architects, and construction professionals on latest industry practices and technologies."]
          ].map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service[0]}</div>
              <h3>{service[1]}</h3>
              <p>{service[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
