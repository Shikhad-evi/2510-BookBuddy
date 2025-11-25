import { useEffect, useState } from "react";
import { fetchBooks } from "../api";
import { Link } from "react-router-dom";

export default function Books() {
  const [books, setBooks] = useState([]);  

  useEffect(() => {
    fetchBooks().then((data) => {
      console.log(data); 
      setBooks(data.books || []); 
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
