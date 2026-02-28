import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("dashboard");
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [editType, setEditType] = useState(null);

  const [projectForm, setProjectForm] = useState({
    title: "",
    location: "",
    description: "",
    duration: "",
    image: ""
  });

  const [teamForm, setTeamForm] = useState({
    name: "",
    role: "",
    specialty: "",   // FIXED (was specialist)
    experience: "",
    image: ""
  });

  // ================= LOAD DATA =================
  useEffect(() => {
    if (!localStorage.getItem("isAdmin")) navigate("/admin");

    setMessages(JSON.parse(localStorage.getItem("messages")) || []);
    setProjects(JSON.parse(localStorage.getItem("projects")) || []);
    setTeam(JSON.parse(localStorage.getItem("team")) || []);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  // ================= IMAGE UPLOAD =================
  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (type === "project") {
        setProjectForm({ ...projectForm, image: reader.result });
      } else {
        setTeamForm({ ...teamForm, image: reader.result });
      }
    };
    reader.readAsDataURL(file);
  };

  // ================= SUBMIT =================
  const handleSubmit = (type) => {

    // ===== PROJECT =====
    if (type === "project") {

      if (!projectForm.title || !projectForm.location || !projectForm.description || !projectForm.duration || !projectForm.image) {
        alert("All Project fields are required!");
        return;
      }

      if (projects.length >= 5 && editIndex === null) {
        alert("Maximum 5 Projects allowed.");
        return;
      }

      let updated = [...projects];

      if (editIndex !== null && editType === "project") {
        updated[editIndex] = projectForm;
      } else {
        updated.push(projectForm);
      }

      setProjects(updated);
      localStorage.setItem("projects", JSON.stringify(updated));
      window.dispatchEvent(new Event("storage")); // refresh homepage

      setProjectForm({ title: "", location: "", description: "", duration: "", image: "" });
    }

    // ===== TEAM =====
    if (type === "team") {

      if (!teamForm.name || !teamForm.role || !teamForm.specialty || !teamForm.experience || !teamForm.image) {
        alert("All Team fields are required!");
        return;
      }

      if (team.length >= 5 && editIndex === null) {
        alert("Maximum 5 Team Members allowed.");
        return;
      }

      let updated = [...team];

      if (editIndex !== null && editType === "team") {
        updated[editIndex] = teamForm;
      } else {
        updated.push(teamForm);
      }

      setTeam(updated);
      localStorage.setItem("team", JSON.stringify(updated));
      window.dispatchEvent(new Event("storage")); // refresh homepage

      setTeamForm({ name: "", role: "", specialty: "", experience: "", image: "" });
    }

    setEditIndex(null);
    setEditType(null);
  };

  // ================= EDIT =================
  const handleEdit = (index, type) => {
    setEditIndex(index);
    setEditType(type);

    if (type === "project") {
      setProjectForm(projects[index]);
      setActiveSection("projects");
    } else {
      setTeamForm(team[index]);
      setActiveSection("team");
    }
  };

  // ================= DELETE =================
  const handleDelete = (index, type) => {
    if (type === "project") {
      const updated = projects.filter((_, i) => i !== index);
      setProjects(updated);
      localStorage.setItem("projects", JSON.stringify(updated));
      window.dispatchEvent(new Event("storage"));
    } else {
      const updated = team.filter((_, i) => i !== index);
      setTeam(updated);
      localStorage.setItem("team", JSON.stringify(updated));
      window.dispatchEvent(new Event("storage"));
    }
  };

  // ================= DELETE MESSAGE =================
  const handleMessageDelete = (index) => {
    const updated = messages.filter((_, i) => i !== index);
    setMessages(updated);
    localStorage.setItem("messages", JSON.stringify(updated));
  };

  return (
    <div className="dashboard">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h3>Admin Panel</h3>
        <ul>
          <li onClick={() => setActiveSection("dashboard")}>Dashboard</li>
          <li onClick={() => setActiveSection("projects")}>Projects</li>
          <li onClick={() => setActiveSection("team")}>Team</li>
          <li onClick={() => setActiveSection("messages")}>Messages</li>
        </ul>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="content">

        {/* DASHBOARD */}
        {activeSection === "dashboard" && (
          <div className="stats-container">
            <div className="stat-card">
              <h2>{messages.length}</h2>
              <p>Total Messages</p>
            </div>
            <div className="stat-card">
              <h2>{projects.length}</h2>
              <p>Total Projects</p>
            </div>
            <div className="stat-card">
              <h2>{team.length}</h2>
              <p>Total Team Members</p>
            </div>
          </div>
        )}

        {/* PROJECTS */}
        {activeSection === "projects" && (
          <div>
            <h2>Add / Edit Project</h2>

            <label>Project Name</label><br />
            <input value={projectForm.title} onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })} /><br />

            <label>Location</label><br />
            <input value={projectForm.location} onChange={(e) => setProjectForm({ ...projectForm, location: e.target.value })} /><br />

            <label>Description</label><br />
            <textarea value={projectForm.description} onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })} /><br />

            <label>Duration</label><br />
            <input value={projectForm.duration} onChange={(e) => setProjectForm({ ...projectForm, duration: e.target.value })} /><br />

            <label>Upload Image</label><br />
            <input type="file" onChange={(e) => handleImageUpload(e, "project")} /><br />

            <button onClick={() => handleSubmit("project")}>
              {editIndex !== null && editType === "project" ? "Update Project" : "Add Project"}
            </button>

            <hr />

            <h2>Project List</h2>
            <table border="1" width="100%">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Duration</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{p.title}</td>
                    <td>{p.location}</td>
                    <td>{p.description}</td>
                    <td>{p.duration}</td>
                    <td><img src={p.image} alt="" width="60" /></td>
                    <td>
                      <button onClick={() => handleEdit(i, "project")}>Edit</button>
                      <button onClick={() => handleDelete(i, "project")}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TEAM */}
        {activeSection === "team" && (
          <div>
            <h2>Add / Edit Team Member</h2>

            <label>Name</label><br />
            <input value={teamForm.name} onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })} /><br />

            <label>Role</label><br />
            <input value={teamForm.role} onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })} /><br />

            <label>Specialty</label><br />
            <input value={teamForm.specialty} onChange={(e) => setTeamForm({ ...teamForm, specialty: e.target.value })} /><br />

            <label>Experience</label><br />
            <input value={teamForm.experience} onChange={(e) => setTeamForm({ ...teamForm, experience: e.target.value })} /><br />

            <label>Upload Image</label><br />
            <input type="file" onChange={(e) => handleImageUpload(e, "team")} /><br />

            <button onClick={() => handleSubmit("team")}>
              {editIndex !== null && editType === "team" ? "Update Member" : "Add Member"}
            </button>

            <hr />

            <h2>Team List</h2>
            <table border="1" width="100%">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Specialty</th>
                  <th>Experience</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {team.map((t, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{t.name}</td>
                    <td>{t.role}</td>
                    <td>{t.specialty}</td>
                    <td>{t.experience}</td>
                    <td><img src={t.image} alt="" width="60" /></td>
                    <td>
                      <button onClick={() => handleEdit(i, "team")}>Edit</button>
                      <button onClick={() => handleDelete(i, "team")}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* MESSAGES */}
        {activeSection === "messages" && (
          <div>
            <h2>Messages</h2>
            {messages.length === 0 ? <p>No messages yet.</p> : (
              <table border="1" width="100%">
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{msg.name}</td>
                      <td>{msg.email}</td>
                      <td>{msg.message}</td>
                      <td>
                        <button onClick={() => handleMessageDelete(i)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;