// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


// Pages
import LandingPage from "./pages/Landingpage"
import AppLayout from "./components/AppLayout"
import Dashboard from "./pages/Dashboard"
import Courses from "./pages/Courses"
import Assignments from "./pages/Assignments"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"


export default function App() {

  return (
    <>
    <Router>
      <Routes>
        {/* Public landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* LMS app section (with sidebar layout) */}

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}
