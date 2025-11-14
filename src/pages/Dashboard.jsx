import React from 'react'
import { Outlet } from "react-router-dom"
import DashboardHeader from "../components/DashboardHeader"
import QuickStats from "../components/QuickStats"
import CoursesGrid from "../components/CoursesGrid"
import AssignmentsPanel from "../components/AssignmentsPanel"

function Dashboard({active}) {
  const upcomingAssignments = [
    { id: 1, title: "Logic Gates Worksheet", dueDate: "Sept 12, 2025" },
    { id: 2, title: "K-map Exercise", dueDate: "Sept 15, 2025" },
    { id: 3, title: "Logic Gates Worksheet", dueDate: "Sept 12, 2025" },
    { id: 4, title: "K-map Exercise", dueDate: "Sept 15, 2025" },
    { id: 5, title: "Logic Gates Worksheet", dueDate: "Sept 12, 2025" },
    { id: 6, title: "K-map Exercise", dueDate: "Sept 15, 2025" },
  ]

  return (
    <div className="flex-1 p-8 overflow-y-auto">
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

export default Dashboard