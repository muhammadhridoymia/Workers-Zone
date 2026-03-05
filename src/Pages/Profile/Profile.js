import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Profile.css";

function Profile() {
  const user = {
    name: "Rahim Uddin",
    skill: "Electrician",
    location: "Dhaka",
    phone: "+880123456789",
    whatsapp: "+880123456789",
    education: "Diploma in Electrical Engineering",
    experience: "10 years",
    bio: "Experienced electrician with 10 years of service. I specialize in residential and commercial electrical work, ensuring safety and quality in every project.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  };

  const portfolio = [
    "https://picsum.photos/300?1",
    "https://picsum.photos/300?2",
    "https://picsum.photos/300?3",
    "https://picsum.photos/300?4",
    "https://picsum.photos/300?5",
    "https://picsum.photos/300?6",
  ];

  const reviews = [
    { id: 1, name: "Karim", comment: "Very professional work!", rating: 5 },
    { id: 2, name: "Hasan", comment: "Quick and reliable.", rating: 4 },
    { id: 3, name: "Jamal", comment: "Good service but a bit pricey.", rating: 3 },
    { id: 4, name: "Sakib", comment: "Excellent workmanship.", rating: 5 },
    { id: 5, name: "Nabil", comment: "Will hire again!", rating: 4 },
    { id: 6, name: "Rahim", comment: "Great communication and timely delivery.", rating: 5 },
  ];

  return (
    <div className="profile-container">
        <Navbar />

      {/* LEFT SIDE */}
      <div className="profile-left">
        <img src={user.image} alt="profile" className="profile-img" />

        <div className="user-info">
            <p></p>
          <h2>{user.name}</h2>
          <p><strong>Skill:</strong> {user.skill}</p>
          <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>WhatsApp:</strong> {user.whatsapp}</p>
            <p><strong>Education:</strong> {user.education}</p>
            <p><strong>Experience:</strong> {user.experience}</p>
          <p>{user.bio}</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="profile-right">

        {/* Portfolio */}
        <h2>My Portfolio</h2>
        <div className="portfolio-grid">
          {portfolio.map((photo, index) => (
            <img key={index} src={photo} alt="work" />
          ))}
        </div>

        {/* Reviews */}
        <h2>Work Reviews</h2>
        <div className="review-section">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h4>{review.name}</h4>
              <p>{review.comment}</p>
              <p>⭐ {review.rating}/5</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Profile;