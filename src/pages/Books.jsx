
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const res = await fetch(`${API_URL}/books`);
      const data = await res.json();
      setBooks(data);
    }
    loadBooks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Book Buddy Catalog</h1>
      <div style={{ display: "grid", gap: "20px", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {books.map((book) => (
          <Link key={book.id} to={`/books/${book.id}`} style={{ border: "1px solid #ccc", padding: "15px" }}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.isAvailable ? "Available" : "Reserved"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
