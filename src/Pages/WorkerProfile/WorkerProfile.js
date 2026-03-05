import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const workers = [
  {
    id: 1,
    name: "Rahim Uddin",
    skill: "Electrician",
    location: "Dhaka",
    phone: "017XXXXXXXX",
    experience: "5 years experience in home wiring and repair",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Karim Hasan",
    skill: "Plumber",
    location: "Mirpur",
    phone: "018XXXXXXXX",
    experience: "3 years experience in plumbing services",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 3,
    name: "Jamal Mia",
    skill: "Driver",
    location: "Uttara",
    phone: "019XXXXXXXX",
    experience: "7 years driving experience",
    image: "https://randomuser.me/api/portraits/men/60.jpg"
  }
];

const WorkerProfile = () => {
  const { id } = useParams();
  const worker = workers.find((w) => w.id === parseInt(id));

  if (!worker) {
    return <h2>Worker not found</h2>;
  }

  return (
    <>
      <Navbar />

      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <img
          src={worker.image}
          alt={worker.name}
          style={{ width: "150px", borderRadius: "50%" }}
        />
        <h2>{worker.name}</h2>
        <p><strong>Skill:</strong> {worker.skill}</p>
        <p><strong>Location:</strong> {worker.location}</p>
        <p><strong>Experience:</strong> {worker.experience}</p>
        <p><strong>Phone:</strong> {worker.phone}</p>

        <button style={{ padding: "10px 20px", marginTop: "10px" }}>
          Hire Now
        </button>
      </div>
    </>
  );
};

export default WorkerProfile;