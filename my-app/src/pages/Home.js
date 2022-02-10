import React from 'react'
import './Home.css'
import Image from '../images/portfoliopic1.png'
import photo from '../images/potocoverphoto.jpg'
import ProjectCard from '../components/Project/ProjectCard'
import SkillsCard from '../components/Skills/SkillsCard'
import picture from '../images/mooviewiz.jpeg'
import wayfarerpic from '../images/wayfarerpic.jpeg'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'


const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none');
  }, 1000);
})

export default function Home() {
    return (
        <div className='container'>
            <div className='topContainer'>
                <div className="textWrapper">
                    <p className="welcomeText">Welcome, I'm</p>
                    <h1 className="nameText">Jacob Rishe</h1>
                    <div className="hidingEffect"></div>
                    <div className='iconContainer'>
                        <div className='iconsWrapper'>
                            <FaReact size={50}/>
                        </div>
                        <div className='iconsWrapper'>
                            <AiFillGithub size={50}/>
                        </div>
                        <div className='iconsWrapper'>
                            <DiCss3 size={50}/>
                        </div>
                        <div className='iconsWrapper'>
                            <DiJavascript1 size={50}/>
                        </div>
                        <div className='iconsWrapper'>
                            <AiFillHtml5 size={50}/>
                        </div>
                        <div className='iconsWrapper'>
                            <AiFillHtml5 size={50}/>
                        </div>
                        <div className='iconsWrapper'>
                            <AiFillHtml5 size={50}/>
                        </div>
                        <div className='iconsWrapper'>
                            <AiFillHtml5 size={50}/>
                        </div>
                    </div>
                </div>
                <div className="imgWrapper">
                    <img src={ Image } alt="portfolio-img" />
                </div>
                <div className="aboutSection">
                    <p className="focusText">Focus in Design</p>
                    <h1 className="softEngineerText">Software Engineer</h1>
                    <p>Desiring a professional career building applications in React Native.</p>
                    <p>Experienced with integrating many native packages such as mapbox, calendars, icons, drawer, bottom sheet and more. Created a full stack responsive React Native app with auth and API calls through the use of axios, formik, and MongoDB. Allowed users to utilize CRUD functionality by creating state managmenet, hooks, and DOM manipulation.</p>
                    <Link to="/About" className="knowMeText">GET TO KNOW ME ➤</Link>
                </div>
            </div>
            <div className="projectContainer">
                {/* <div className="titlesWrapper"> */}
                    <h1 className="h1Text">MY</h1>
                    <h2 className="h2Text">Projects</h2>
                {/* </div> */}
                <div className="projectSection">
                    <ProjectCard 
                    title='Full Stack App'
                    photo={ photo } 
                    body='MERN Stack'
                    link='https://github.com/JacobRishe/Poto-Frontend'
                    />
                    <ProjectCard 
                    title='Moovie Wiz'
                    photo={ picture }
                    body='API App'
                    link='https://github.com/JacobRishe/API_APP'
                    />
                    <ProjectCard 
                    title='Wayfarer'
                    photo={ wayfarerpic }
                    body='Python'
                    link='https://wayfarer-sei.herokuapp.com/'
                    />
                </div> 
            </div>
            <div className="skillsContainer">
                <h1 className="h1Text">MY</h1>
                <h2 className="h2Text">SKILLS</h2>
                <div className="skillsCardWrapper">
                    <SkillsCard
                        title='JavaScript'
                        icon={<FaGithub/>}
                    />
                    <SkillsCard
                        title='React'
                    />
                    <SkillsCard
                        title='Html'
                    />
                    <SkillsCard
                        title='Css'
                    />
                    <SkillsCard
                        title='Figma'
                    />
                    <SkillsCard
                        title='Wordpress'
                    />
                </div>
            </div>
        </div>
    )
}