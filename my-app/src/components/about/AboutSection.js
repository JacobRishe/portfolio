import React from 'react';
import './About.css'
import Image from '../../images/portfoliopic1.png'
import { FaReact } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiJavascript1 } from 'react-icons/di'

export default function AboutSection() {

  	return (
        <div className='topContainer' id="about">
			<div className="computerImg"/>
          	<div className="textWrapper">			  
				<h1 className="firstNameText">Jacob<span className="lastNameText">Rishe</span></h1>
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
				<div className="imgWrapper">
					<img src={ Image } alt="A man smiling with his arms crossed." />
				</div>
          	</div>
			<div className="aboutSection">
				<p className="focusText">Focus in Frontend Design</p>
				<h1 className="softEngineerText">Software Engineer</h1>
				<p>Desiring a professional career building applications in React Native.</p>
				<p>Experienced with integrating many native packages such as mapbox, calendars, icons, drawer, bottom sheet and more. Created a full stack responsive React Native app with auth and API calls through the use of axios, formik, and MongoDB. Allowed users to utilize CRUD functionality by creating state managmenet, hooks, and DOM manipulation.</p>
				{/* <Link to="/About" className="knowMeText">GET TO KNOW ME ➤</Link> */}
			</div>
      	</div>
    )
  }
