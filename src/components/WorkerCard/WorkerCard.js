import React from "react";
import "../WorkerCard/WorkerCard.css";
import { useNavigate } from "react-router-dom";

const WorkerCard = ({ worker }) => {
  const navigate = useNavigate();


  const handleViewProfile = () => {
    navigate(`/worker/${worker.id}`);
  };
  
  return (
    <div className="worker-card">
      <img src={worker.image} alt={worker.name} />
      <h3>{worker.name}</h3>
      <p>
        <strong>Skill:</strong> {worker.skill}
      </p>
      <p>
        <strong>Location:</strong> {worker.location}
      </p>
      <button onClick={handleViewProfile}>View Profile</button>
    </div>
  );
};

export default WorkerCard;
