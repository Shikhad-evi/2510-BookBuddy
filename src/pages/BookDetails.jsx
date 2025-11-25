import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { fetchBookById, reserveBook } from "../api";
import { AuthContext } from "../Context/AuthContext";

export default function BookDetails() {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookById(id).then((data) => setBook(data.book));
  }, [id]);

  const handleReserve = async () => {
    const result = await reserveBook(token, id);
    alert(result.message);
  };

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>By: {book.author}</p>
      <p>{book.description}</p>
      <p>Status: {book.available ? "Available" : "Reserved"}</p>

      {token && (
        <button disabled={!book.available} onClick={handleReserve}>
          Reserve
        </button>
      )}
    </div>
  );
}
