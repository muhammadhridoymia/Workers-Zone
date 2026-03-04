import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button>Login</button>
      </div>
    </>
  );
};

export default Login;