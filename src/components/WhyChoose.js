import React from "react";

const WhyChoose = () => {
  const features = [
    ["👥", "Experienced Professionals", "Highly qualified business consultants."],
    ["✓", "Quality Assurance", "Commitment to highest quality delivery."],
    ["⏰", "Timely Delivery", "Meeting deadlines without compromise."],
    ["💡", "Cost-Effective Solutions", "Maximizing ROI and value."],
    ["💻", "Latest Technology", "Using cutting-edge tools and practices."],
    ["⭐", "Client Satisfaction", "Building long-term relationships."]
  ];

  return (
    <section className="why-choose">
      <div className="section-container">
        <div className="section-header">
          <div className="subtitle">Why Choose Us</div>
          <h2>Your Success is Our Mission</h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature[0]}</div>
              <h3>{feature[1]}</h3>
              <p>{feature[2]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
