import React from 'react'
import './Home.css'
import Image from '../images/portfoliopic1.png'
import photo from '../images/potocoverphoto.jpg'
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
                    </div>
                </div>
            </section>
            <section className="section2">
                <div className="about-section">
                    <p className="focus-in-design">Focus in Design</p>
                    <h1 className="software-engineer">Software Engineer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum deleniti, nobis repellat neque ecia mollitia magni voluptatum cum possimus explicabo a, commodi voluptates! Magnam ut illo quibusdam debitis?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas vero quas ut voluptates laborum eius eveniet, impedit ullam excepturi autem sit. Nesciunt sed id reiciendis esse, beatae necessitatibus tempora doloribus.</p>
                    <p className="get-to-know-me">GET TO KNOW ME ➤</p>
                </div> 
            </section>
            <section className="section3">
                <p className="focus-in-design"></p>
                <h1 className="my-projects">My Projects</h1>
                <div className="project-section">
                    <ProjectCard 
                    title='Full Stack App'
                    photo={ photo } 
                    body='React'
                    />
                    <ProjectCard 
                    title='PoTo'
                    photo={ photo }
                    body='testing'
                    />
                    <ProjectCard 
                    title='PoTo'
                    photo={ photo }
                    body='testing'
                    />
                </div> 
            </section>
        </div>
    )
}