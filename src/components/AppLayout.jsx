import { Outlet } from "react-router-dom"
import { useState} from "react"

import Sidebar from "./Sidebar"
import DashboardHeader from "./DashboardHeader"
import QuickStats from "./QuickStats"
import CoursesGrid from "./CoursesGrid"
import AssignmentsPanel from "./AssignmentsPanel"
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
    const upcomingAssignments = [
      { id: 1, title: "Logic Gates Worksheet", dueDate: "Sept 12, 2025" },
      { id: 2, title: "K-map Exercise", dueDate: "Sept 15, 2025" },
      { id: 3, title: "Logic Gates Worksheet", dueDate: "Sept 12, 2025" },
      { id: 4, title: "K-map Exercise", dueDate: "Sept 15, 2025" },
      { id: 5, title: "Logic Gates Worksheet", dueDate: "Sept 12, 2025" },
      { id: 6, title: "K-map Exercise", dueDate: "Sept 15, 2025" },
    ]

    

    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-700">
        {/* Sidebar */}
        <Sidebar active={active}  setActive={setActive}/>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <DashboardHeader />
          <QuickStats  upcomingAssignments={upcomingAssignments}/>
          <CoursesGrid />
          <AssignmentsPanel upcomingAssignments={upcomingAssignments}/>
          <h1 className="text-2xl font-bold mb-6">{active}</h1>
          <Outlet />
        </div>
      </div>
    )
  }
