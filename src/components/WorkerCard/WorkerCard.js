import React from "react";
import '../WorkerCard/WorkerCard.css';

const WorkerCard = ({ worker }) => {
  return (
    <div className="worker-card">
      <img src={worker.image} alt={worker.name} />
      <h3>{worker.name}</h3>
      <p><strong>Skill:</strong> {worker.skill}</p>
      <p><strong>Location:</strong> {worker.location}</p>
      <button>View Profile</button>
    </div>
  );
};

export default WorkerCard;