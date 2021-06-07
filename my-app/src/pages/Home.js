import React from 'react'
import './Home.css'
import Image from '../images/portfoliopic1.png'
import photo from '../images/Poto.jpg'
import ProjectCard from '../components/Project/ProjectCard'

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 2000);
})

export default function Home() {
    return (
            <div className="content-wrapper">
                <div className="container">
                    <div className="text-container">
                        <h1 className="Welcome-text">Welcome I'm,</h1>
                        <p className="my-projects">Jacob Rishe</p>
                        <div className="hiding-effect"></div>
                    </div>
                    <div className="img-container">
                        <img src={ Image } alt="portfolio-img" />
                    </div>
                </div>
                <div className="project-section">
                    <ProjectCard 
                    title='PoTo'
                    photo={ photo }
                    body='testing'
                    />
                </div>
            </div>
    )
}