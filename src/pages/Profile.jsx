import React, { useContext } from 'react'
import UserContext from '../components/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h2>Welcome: {user ? user.username : 'Guest'}</h2>
    </div>
  )
}

export default Profile