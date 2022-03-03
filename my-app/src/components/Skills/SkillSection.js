import React from 'react';
import SkillsCard from './SkillsCard'
import { FaGithub } from 'react-icons/fa'
import './Skills.css'

export default function SkillSection() {
  return (
    <div className="skillsContainer">
		<div className="rightWrapper">
			<h1 className="myText">MY</h1>
			<h2 className="skillsText">SKILLS</h2>
		</div>
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
    )
}
