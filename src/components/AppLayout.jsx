import Sidebar from "./Sidebar"
import Dashboard from "../pages/Dashboard"
import { useState} from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import AchievementsPanel from "./AchievementsPanel"
import CommunityPanel from "./CommunityPanel"

import {
  quickStats,
  enrolledCourses,
  upcomingAssignments,
  achievements,
  announcements,
} from "@/data/studentData"

  export default function AppLayout() {
    const [active, setActive] = useState("")
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-700">
        <Sidebar active={active}  setActive={setActive}/>
        <div className="flex-1 p-8 overflow-y-auto">
          <DashboardHeader />
          <QuickStats stats={quickStats} />
          <CoursesGrid courses={enrolledCourses} />
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <AssignmentsPanel assignments={upcomingAssignments} />
            <AchievementsPanel achievements={achievements} />
          </div>
          <div className="mt-6">
            <CommunityPanel announcements={announcements} />
          </div>
          <h1 className="text-2xl font-bold mb-6">{active}</h1>
          <Outlet />
        </div>
      </div>
    )
  }
