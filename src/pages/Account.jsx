import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { returnBook } from "../api";

export default function Account() {
  const { user, token } = useContext(AuthContext);

  if (!user) return <p>Please log in or register.</p>;

  return (
    <div>
      <h2>Account</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <h3>Your Reservations</h3>
      <ul>
        {user.reservations?.map((r) => (
          <li key={r.id}>
            {r.book.title}
            <button
              onClick={async () => {
                await returnBook(token, r.id);
                location.reload();
              }}
            >
              Return
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
