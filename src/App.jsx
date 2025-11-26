import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/">Books</Link>
        <Link to="/account">Account</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
