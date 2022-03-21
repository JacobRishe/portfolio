import React from 'react'
import './Project.css'
import photo from '../../images/potocoverphoto.jpg'
import ProjectCard from './ProjectCard'
import picture from '../../images/mooviewiz.jpeg'
import wayfarerpic from '../../images/wayfarerpic.jpeg'

export default function ProjectSection() {
  return (
    <div className="projectContainer" id="projects">
		<div className="titleWrapper">
			<h1 className="h1Text">MY</h1>
			<h2 className="h2Text">Projects</h2>
		</div>
		<div className="projectWrapper">
			<div className="borderLine">
				<ProjectCard 
				title='Full Stack App'
				photo={ photo } 
				body='MERN Stack'
				link='https://github.com/JacobRishe/Poto-Frontend'
				/>
			</div>
			<div>
				<ProjectCard 
				title='Moovie Wiz'
				photo={ picture }
				body='API App'
				link='https://jacobrishe.github.io/API_APP/'
				/>
			</div>
			<div>
				<ProjectCard 
				title='Wayfarer'
				photo={ wayfarerpic }
				body='Python'
				link='https://wayfarer-sei.herokuapp.com/'
				/>
			</div>
		</div>
	</div>
  )
}
