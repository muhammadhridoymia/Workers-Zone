import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../Home/Home.css";
import WorkerCard from "../../components/WorkerCard/WorkerCard";
import { useNavigate } from "react-router-dom";

const workers = [
  {
    id: 1,
    name: "Rahim Uddin",
    skill: "Electrician",
    location: "Dhaka",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Karim Hasan",
    skill: "Plumber",
    location: "Mirpur",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Jamal Mia",
    skill: "Driver",
    location: "Uttara",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 1,
    name: "Rahim Uddin",
    skill: "Electrician",
    location: "Dhaka",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Karim Hasan",
    skill: "Plumber",
    location: "Mirpur",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Jamal Mia",
    skill: "Driver",
    location: "Uttara",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 1,
    name: "Rahim Uddin",
    skill: "Electrician",
    location: "Dhaka",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Karim Hasan",
    skill: "Plumber",
    location: "Mirpur",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Jamal Mia",
    skill: "Driver",
    location: "Uttara",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [selectedSkill, setSelectedSkill] = React.useState("");
  const [selectedLocation, setSelectedLocation] = React.useState("");
  const skills = ["Electrician", "Plumber", "Driver", "AC-Mechanic", "Cleaner", "Painter"];
  const locations = ["Dhaka", "Mirpur", "Uttara", "Gulshan", "Banani"];

  const handleSearch = () => {
    navigate(`/search/${selectedSkill}/${selectedLocation}`);
  };
  const handleCategoryClick = (skill) => {
    const location = "Dhaka"; // You can also add location if needed
    navigate(`/search/${skill}/${location}`);
  }
  const [workerList, setWorkerList] = React.useState(workers);
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Find Trusted Local Workers Near You</h1>

        <div className="search-box">
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            <option value="">Select Skill</option>
            {skills.map((skill, index) => (
              <option key={index} value={skill||skill}>
                {skill}
              </option>
            ))}
          </select>

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}
              onClick={()=>{}}
              >
                {loc}
              </option>
            ))}
          </select>

          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="categories">
        <h2>Popular Categories</h2>

        <div className="category-grid">
          {skills.map((skill, index) => (
            <div key={index} className="card"
            onClick={() => handleCategoryClick(skill)}
            >
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="featured-workers">
        <div>
            <div className="featured">
          <h2>Featured Workers</h2>

          <div className="worker-grid">
            {workerList.map((worker) => (
              <WorkerCard key={worker.id} worker={worker} />
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
