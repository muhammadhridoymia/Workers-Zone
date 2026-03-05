import React from 'react'
import Navbar from "../../components/Navbar/Navbar";    
import WorkerCard from '../../components/WorkerCard/WorkerCard';
import { useParams } from "react-router-dom";
import "./Search.css";


function Search() {
    const { skill, location } = useParams();
    const [selected, setSelected] = React.useState(`Searching for ${skill || "any skill"} in ${location || "any location"}`);
    const [selectedSkill, setSelectedSkill] = React.useState(skill || "");
    const [selectedLocation, setSelectedLocation] = React.useState(location || "");
    const skills = ["Electrician", "Plumber", "Driver", "AC-Mechanic", "Cleaner", "Painter"];
    const locations = ["Dhaka", "Mirpur", "Uttara", "Gulshan", "Banani"];

    const handleSearch = () => {
        setSelected(`Searching for ${selectedSkill} in ${selectedLocation}`);
        // Implement search logic here
    };

    //demo data for search result
    const searchResults = [
        {
            id: 1,
            name: "Rahim Uddin",
            skill: "Electrician",
            location: "Dhaka",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "Karim Hasan",
            skill: "Plumber",
            location: "Mirpur",
            image: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            id: 3,
            name: "Jamal Mia",
            skill: "Driver",
            location: "Uttara",
            image: "https://randomuser.me/api/portraits/men/60.jpg"
        }
    ];

    //filter search results based on selected skill and location
    const filteredResults = searchResults.filter(worker => {
        return (
            (selectedSkill ? worker.skill === selectedSkill : true) &&
            (selectedLocation ? worker.location === selectedLocation : true)
        );
    });

  return (
    <div className='search-hero'>
      <Navbar />

      <div className="hero">
        <h1>Again Find Trusted Local Workers Near You</h1>

        <div className="search-box">
          <select
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            <option value="">Select Skill</option>
            {skills.map((skill, index) => (
              <option key={index} value={skill}>
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
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
        <h1>{selected}</h1>
        <div className='worker-card-container'>
            {filteredResults.map((worker)=>(
                <WorkerCard key={worker.id} worker={worker} />
            ))}
        </div>
    </div>
  )
}

export default Search