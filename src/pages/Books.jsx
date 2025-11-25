import { useEffect, useState } from "react";
import { fetchBooks } from "../api";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);  // FIXED

  useEffect(() => {
    fetchBooks().then((data) => {
      console.log(data); // helpful debugging
      setBooks(data.books || []); // prevents undefined errors
    });
  }, []);

  return (
    <div>
      <h1>Library Catalog</h1>
      <ul>
        {books.map((b) => (
          <li key={b.id}>
            <Link to={`/books/${b.id}`}>{b.title}</Link>
            {b.available ? " (Available)" : " (Reserved)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
