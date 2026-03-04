import React from "react";
import Navbar from "../../components/Navbar/Navbar";




const Register = () => {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h2>Register</h2>
        <input type="text" placeholder="Full Name" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="text" placeholder="Skill (Electrician, Plumber...)" /><br /><br />
        <input type="text" placeholder="Location" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button>Register</button>
      </div>
    </>
  );
};

export default Register;