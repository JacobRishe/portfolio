import React from 'react';
import SkillsCard from './SkillsCard'
import { FaGithub } from 'react-icons/fa'

export default function SkillSection() {
  return (
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
    )
}
