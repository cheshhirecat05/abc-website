import React, { useEffect, useState } from "react";

const Team = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Load members from localStorage or default data
    const storedTeam = JSON.parse(localStorage.getItem("team")) || [
      { name: "Mr. Rajesh Sharma", role: "Managing Director", specialty: "Business Consultant", experience: "10+ years", image: "" },
      { name: "Ms. Priya Thapa", role: "Director", specialty: "Strategic Planning", experience: "10+ years", image: "" },
      { name: "Mr. Amit Karki", role: "Senior Consultant", specialty: "Financial Advisory", experience: "10+ years", image: "" },
      { name: "Ms. Sneha Rai", role: "Marketing Head", specialty: "Brand Development", experience: "10+ years", image: "" },
      { name: "Ms. Anjali Poudel", role: "Business Analyst", specialty: "Data Analytics", experience: "2+ years", image: "" }
    ];
    setMembers(storedTeam);
  }, []);

  return (
    <section id="team" className="team">
      <div className="section-container">
        <div className="section-header">
          <div className="subtitle">Our Team</div>
          <h2>Meet Our Expert Professionals</h2>
        </div>

        <div className="team-grid">
          {members.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="team-img" />
                ) : (
                  <div className="team-placeholder">👨‍💼</div>
                )}
              </div>
              <div className="team-content">
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <div className="team-specialty">{member.specialty}</div>
                <div className="team-experience">Experience: {member.experience}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
