import Sidebar from "./Sidebar"
import Dashboard from "../pages/Dashboard"
import { useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


// import AchievementsPanel from "./AchievementsPanel"
// import CommunityPanel from "./CommunityPanel"

// import {
//   quickStats,
//   enrolledCourses,
//   upcomingAssignments,
//   achievements,
//   announcements,
// } from "../data/studentData"

  export default function AppLayout() {
    const [active, setActive] = useState("")
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-700">
        <Sidebar active={active}  setActive={setActive}/>
        <Route path="/app" element={<AppLayout active={active} setActive={setActive}/>}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="courses" element={<Courses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>
      </div>
    )
  }
