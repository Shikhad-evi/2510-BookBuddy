import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function Account() {
  const token = localStorage.getItem("token");
  const [profile, setProfile] = useState(null);
  const [reservations, setReservations] = useState([]);

  async function loadProfile() {
    const res = await fetch(`${API_URL}/users/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setProfile(await res.json());

    const res2 = await fetch(`${API_URL}/reservations`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setReservations(await res2.json());
  }

  async function returnBook(id) {
    await fetch(`${API_URL}/reservations/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    loadProfile();
  }

  useEffect(() => {
    if (token) loadProfile();
  }, []);

  if (!token)
    return (
      <div>
        <p>You must log in.</p>
        <Link to="/login">Login</Link>
      </div>
    );

  if (!profile) return <p>Loading…</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Account</h1>
      <p>{profile.firstname} {profile.lastname}</p>
      <p>Email: {profile.email}</p>

      <h2>Your Reservations</h2>
      {reservations.map((r) => (
        <div key={r.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
          <p>{r.book.title}</p>
          <button onClick={() => returnBook(r.id)}>Return</button>
        </div>
      ))}
    </div>
  );
}