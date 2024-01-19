import React from 'react'
import Dashboard from '../components/dashboard'
import { DashboardContexProvider } from '../components/dashboard/context/context'


function dashboard() {
  return (
    <DashboardContexProvider>
    <Dashboard/>
    </DashboardContexProvider>
  )
}

export default dashboard