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
        
      </div>
    )
  }
