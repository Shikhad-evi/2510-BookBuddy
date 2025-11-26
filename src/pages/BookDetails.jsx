import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const token = localStorage.getItem("token");

  async function loadBook() {
    const res = await fetch(`${API_URL}/books/${id}`);
    const data = await res.json();
    setBook(data);
  }

  async function reserveBook() {
    await fetch(`${API_URL}/books/${id}/reserve`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` }
    });
    loadBook();
  }

  useEffect(() => {
    loadBook();
  }, []);

  if (!book) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>

      {token ? (
        <button
          onClick={reserveBook}
          disabled={!book.isAvailable}
        >
          {book.isAvailable ? "Reserve" : "Not Available"}
        </button>
      ) : (
        <p>Please log in to reserve this book.</p>
      )}
    </div>
  );
}
