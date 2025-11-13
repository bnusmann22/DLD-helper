// App.jsx
import { Bell, Sun, Moon } from "lucide-react"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Pages
import LandingPage from "./pages/LandingPage"
 import AppLayout from "./components/AppLayout"
 import Dashboard from "./pages/Dashboard"
 import Courses from "./pages/Courses"
 import Assignments from "./pages/Assignments"
 import Profile from "./pages/Profile"
 import Settings from "./pages/Settings"
 import Login from "./pages/Login"
 import NotFound from "./pages/NotFound"
import { useEffect, useState } from "react"

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(
        function () {
          document.documentElement.classList.toggle("fake-dark-mode");
        },
        [isDarkMode]
      );
  return (
    <>
    <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="p-2 rounded-lg"
        >
          {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
    </button>
    <Router>
      <Routes>
        {/* Public landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* LMS app section (with sidebar layout) */}
        <Route path="/app" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}
