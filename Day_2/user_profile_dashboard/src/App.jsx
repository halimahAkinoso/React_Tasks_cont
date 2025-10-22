import React from 'react'
import './components/ProfileHeader'
import ProfileHeader from './components/ProfileHeader'
import ProfileStats from './components/ProfileStats';
import SkillBadge from './components/SkillBadge';
import ProfileCard from './components/ProfileCard'
import './App.css'



function App() {
  return (
    <div className='app-container'>
       <ProfileCard>
        <ProfileHeader
          name="Halimah Akinoso"
          title="Senior developer at paystack"
          avatar="https://i.pravatar.cc/120" 
        />
        <ProfileStats
          projects={45}
          followers="1,2k"
          following={300}
        />
        <div className='skills-section'>
          <h3>Skills:</h3>
          <div className='skills-list'>
            <SkillBadge skill="React" level="Expert" />
            <SkillBadge skill="JavaScript" level="Expert" />
            <SkillBadge skill="Node.js" level="Intermiadte" />
            <SkillBadge skill="JavaScript" level="Expert" />
            <SkillBadge skill="Css" level="Beginner" />
          </div>
        </div>
      </ProfileCard>

      
    </div>
  )
}

export default App