import React from 'react'
import style from './NavigationBar.module.css'

function NotificationPage({...notifications}) {
  const {id,type,name,created_at} = notifications.notification
  console.log("Notification", id, type, name)
  
  return (
    <div className={style.notificationCard}>
          <p><strong>{type}:</strong> <span>{name}</span></p>
          <p>{created_at}</p>
    </div>
  )
}

export default NotificationPage