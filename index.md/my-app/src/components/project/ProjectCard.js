import React from 'react'
import './Project.css'

export default function ProjectCard({title, photo, body, link}) {
    return (
        <div className="border">
            <div className="card-container">
                <a className="card-link" href={ link }>
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
                </a>
            </div>
        </div>
    )
}
