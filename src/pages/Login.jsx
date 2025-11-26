import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    localStorage.setItem("token", data.token);
    navigate("/account");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br />
        <button>Login</button>
      </form>
      <Link to="/register">No account? Register</Link>
    </div>
  );
}