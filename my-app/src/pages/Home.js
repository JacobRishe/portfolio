import React from 'react'
import './Home.css'
import Image from '../images/portfoliopic1.png'
// import photo from '../images/Poto.jpg'
// import ProjectCard from '../components/Project/ProjectCard'

const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 2000);
})

export default function Home() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="text-container">
                        <span className="line"></span>
                        <p className="welcome-text">WELCOME, I'M</p>
                        <h1 className="jacob-text">Jacob Rishe</h1>
                        <div className="hiding-effect"></div>
                    </div>
                    <div className="img-container">
                        <img src={ Image } alt="portfolio-img" />
                        <p className="get-to-know-me">GET TO KNOW ME ➤</p>
                    </div>
                </div>
            </section>
            <section className="section2">
                <p>Focus in Design</p>
                <h1>Software Engineer</h1>
            </section>
        </div>
    )
}

/* <div className="project-section">
                    <ProjectCard 
                    title='PoTo'
                    photo={ photo }
                    body='testing'
                    />
                </div> */