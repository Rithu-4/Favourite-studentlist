import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import { AuthProvider } from "./context/AuthContext";
import StudentList from "./pages/StudentList.jsx";
import FavouriteStudents from "./pages/FavouriteStudents";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import "./App.css";
export default function App() {
  return (
    <AuthProvider>
      <StudentProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/favourites" element={<FavouriteStudents />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </StudentProvider>
    </AuthProvider>
  );
}