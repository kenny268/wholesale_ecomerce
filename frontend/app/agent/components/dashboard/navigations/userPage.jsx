import React from 'react'
import styles from './UserPage.module.css'
function UserPage() {
    const userData = {
        id:'U12345678',
        name: 'john doe',
        email: 'john@example.com',
        phone: '01234567890',
        address: '123 Main Street',
        city: 'London',
        state: 'London',
        country: 'United Kingdom',
        postal_code: 'NW1 8JR'
    };
    const handleImageError = (event) => {
        event.target.src = '/user.jpeg'; // Set the path to your alternative image
      };
  return (

    // <div>
    //     <h2>Profile</h2>
    //     <div className="user-profile">
    //         <div className="user-profile-image">
    //             <img src="https://example.com/user.jpg" alt="user.jpeg" onError={handleImageError} />
    //         </div>
    //         <div className="user-profile-details">
    //             <h3>{userData.name}</h3>
    //             <p>{userData.email}</p>
    //             <p>{userData.phone}</p>
    //             <p>{userData.address}</p>
    //             <p>{userData.city}</p>
    //             <p>{userData.state}</p>
    //             <p>{userData.country}</p>
    //             <p>{userData.postal_code}</p>
    //         </div>
    //     </div>
    // </div>
      <div className={styles.userProfile}>
      <h2>Profile</h2>
        <div className={styles.userProfileImage}>
          <img
            src="https://example.com/user.jpg"
            alt="user.jpeg"
            onError={handleImageError}
          />
        </div>
        <div className={styles.userProfileDetails}>
          <h3>{userData.name}</h3>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Mobile: </strong>{userData.phone}</p>
          <p><strong>Adress: </strong>{userData.address}</p>
          <p><strong>City: </strong>{userData.city}</p>
          <p><strong>State: </strong>{userData.state}</p>
          <p><strong>Country: </strong>{userData.country}</p>
          <p><strong>Postal Code: </strong>{userData.postal_code}</p>
          <span>Logout</span>
        </div>
      </div>

  )
}

export default UserPage