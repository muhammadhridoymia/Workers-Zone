import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../Home/Home.css";
import WorkerCard from "../../components/WorkerCard/WorkerCard";

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
];

const Home = () => {
  const [workerList, setWorkerList] = React.useState(workers);
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Find Trusted Local Workers Near You</h1>

        <div className="search-box">
          <input type="text" placeholder="Enter skill (e.g. Electrician)" />
          <input type="text" placeholder="Enter location" />
          <button>Search</button>
        </div>
      </div>

      <div className="categories">
        <h2>Popular Categories</h2>

        <div className="category-grid">
          <div className="card">⚡ Electrician</div>
          <div className="card">🚰 Plumber</div>
          <div className="card">🚗 Driver</div>
          <div className="card">❄ AC Mechanic</div>
          <div className="card">🧹 Cleaner</div>
          <div className="card">🎨 Painter</div>
        </div>
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
