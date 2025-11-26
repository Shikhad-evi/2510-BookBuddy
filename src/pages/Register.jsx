import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    await fetch(`${API_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, firstname, lastname })
    });

    navigate("/login");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input placeholder="First Name" onChange={(e) => setFirstname(e.target.value)} /><br />
        <input placeholder="Last Name" onChange={(e) => setLastname(e.target.value)} /><br />
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br />
        <button>Register</button>
      </form>
    </div>
  );
}
