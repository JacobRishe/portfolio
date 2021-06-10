import React from 'react'
import './Project.css'

export default function ProjectCard({title, photo, body}) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={ photo } alt='' />
            </div>
            <div className="card-content">
            <div className="card-body">
                    <p className="card-paragraph">{ body }</p>
            </div>
            <div className="card-title">
                <h3 className="card-title">{ title }</h3>
            </div>
            </div>
        </div>
    )
}
