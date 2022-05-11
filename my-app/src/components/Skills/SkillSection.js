import React from 'react';
import SkillsCard from './SkillsCard';
import { FaGithub } from 'react-icons/fa';
import './Skills.css';
import TextAnimation from '../animations/TextAnimation';

export default function SkillSection() {
  	return (
		<>
			<div className="skillsContainer" id="skills">
				<div className="rightWrapper">
					<h2 className="skillsText">SKILLS</h2>
				</div>
				<div className="paragraphWrapper">
					<p className="headingText">thisProject</p>
					<p className="scratchText">made from scratch</p>
				</div>
				<div>
					{/* <TextAnimation /> */}
				</div>
			</div>
			<div className="btnWrapper">
				<a href="https://github.com/JacobRishe/portfolio/raw/main/JacobRishe_Resume.pdf">
					<button class="download-btn">Download CV</button>
				</a> 
			</div>
		</>
    )
}
