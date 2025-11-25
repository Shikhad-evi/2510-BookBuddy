import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Books, Book, Authenticate, NavBar, Profile, SavedBooks, SignIn, SignUp, LogOut, AvailableBooks, ReservedBooks } from './Components'

function App() {
  
  return (
    <Router basename='block30_unit3_book_buddy_career_starter/'>
    
      <NavBar />
      <Routes>
        <Route index element={<Books />} />
        <Route path="/:id" element={<Book />} />
        <Route path="/auth" element={<Authenticate />} />
        <Route path="/signin" element={<SignIn width={{ xs: "80%", md: "40%" }} />} />
        <Route path="/signup" element={<SignUp width={{ xs: "80%", md: "40%" }} />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/savedbooks" element={<SavedBooks />} />
        <Route path="/reservedbooks" element={<ReservedBooks />} />
        <Route path="/availablebooks" element={<AvailableBooks />} />
      </Routes>
    </Router>
  )
}

export default App