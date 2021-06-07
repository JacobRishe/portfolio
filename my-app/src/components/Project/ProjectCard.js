import React from 'react'
import './Project.css'

export default function ProjectCard({title, photo, body}) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={ photo } alt='' />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{ title }</h3>
                </div>
                <div className="card-body">
                    <p>{ body }</p>
                </div>
            </div>
            <div className="btn">
                <button>
                    <a href='/Projects'>View</a>
                </button>
            </div>
        </div>
    )
}
