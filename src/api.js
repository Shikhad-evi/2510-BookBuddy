const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export const fetchBooks = async () => {
  const res = await fetch(`${API_URL}/books`);
  return res.json();
};

export const fetchBookById = async (id) => {
  const res = await fetch(`${API_URL}/books/${id}`);
  return res.json();
};

export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const loginUser = async (userData) => {
  const res = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const reserveBook = async (token, bookId) => {
  const res = await fetch(`${API_URL}/books/${bookId}/reserve`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const returnBook = async (token, reservationId) => {
  const res = await fetch(`${API_URL}/reservations/${reservationId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const fetchProfile = async (token) => {
  const res = await fetch(`${API_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
