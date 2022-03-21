import React from 'react'
import './Skills.css'


export default function SkillsCard({ title, icon}) {
    return (
        <div style={skillsWrapper}>
            <h1 style={skillsTitle}>{ title }</h1>
            <div>{ icon }</div>
        </div>
    )
}

const skillsTitle = {
    color: '#fff',
    fontSize: '12px',
    marginRight: '10px',
}

const skillsWrapper = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}