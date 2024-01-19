import React from 'react'
import NavigationBar from './dashboard/navigations/navigationBar'
import LeftNavBar from './dashboard/navigations/leftNavBar'
import MainContent from './dashboard/navigations/mainContent'
import styles from './Dashboard.module.css'

function Dashboard() {
  return (
    
    <div className={styles.app}>
      <NavigationBar/>
      <div className={styles.mainContainer}>
        <LeftNavBar />
        <MainContent />
      </div>
    </div>
  )
}

export default Dashboard