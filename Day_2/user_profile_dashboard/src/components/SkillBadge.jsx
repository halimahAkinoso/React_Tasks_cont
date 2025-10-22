import React from 'react'
import './SkillBadge.css'


function SkillBadge ({skill, level}) {
    let colorClass = "";


    switch(level.toLowerCase()){
        case "expert":
            colorClass = "expert";
            break;
        case "intermediate":
            colorClass = "intermediate";
            break;
        default:
            colorClass = "beginner";
    }
  return (
    <span className={`skill-badge ${colorClass}`}>{skill} - {level}</span>
  )
}

export default SkillBadge