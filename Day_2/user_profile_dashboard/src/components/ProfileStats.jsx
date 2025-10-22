import React from 'react'
import './ProfileStats.css'
function ProfileStats ({projects, followers, following}) {
  return (
    <div className='profile-stats'>
<div className='stat-item'>Projects: {projects}</div>
<div className='stat-item'>Projects: {followers}</div>
<div className='stat-item'>Projects: {following}</div>
    </div>
  )
}

export default ProfileStats