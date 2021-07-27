import React from 'react'
import ProjectCard from '../components/Project/ProjectCard'
import photo from '../images/potocoverphoto.jpg'
import picture from '../images/mooviewiz.jpeg'
import wayfarerpic from '../images/wayfarerpic.jpeg'
import './Project.css'

export default function Projects() {
    return (
        <div className="section1">
            <div className="projectCard-container">
                <ProjectCard 
                    title='Full Stack App'
                    photo={ photo } 
                    body='copy info from github and place it here'
                    link='https://github.com/JacobRishe/Poto-Frontend'
                />
                    <ProjectCard 
                    title='Moovie Wiz'
                    photo={ picture }
                    body='API copy info from github and place it here'
                    link='https://github.com/JacobRishe/API_APP'
                />
                    <ProjectCard 
                    title='Wayfarer'
                    photo={ wayfarerpic }
                    body='copy info from github and place it here'
                    link='https://wayfarer-sei.herokuapp.com/'
                />
            </div>
            <h1>Recent Projects</h1>
            <div className="projectCard-container">
                <ProjectCard 
                    title='New Book Release Website'
                    body='Freeelance website using Wordpress, Divi, MailChimp. Time to Design|Develop: 2 days.'
                    photo={ photo } 
                    link='https://buildgoodbehavior.com'
                />
                    <ProjectCard 
                    title='Blog Website'
                    photo={ picture }
                    body='Freelance website using Wordpress, Divi, MailChimp. Time to Design|Develop: 3 days.'
                    link='https://culturespotla.com'
                />
                    <ProjectCard 
                    title='New Logo'
                    photo={ wayfarerpic }
                    body='copy info from github and place it here'
                    link=''
                />
            </div> 
        </div>
    )
}