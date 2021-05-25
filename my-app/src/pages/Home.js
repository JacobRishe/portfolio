import React from 'react'
import './Home.css'
import Image from '../images/portfoliopic1.png'

export default function Home() {
    return (
        <div className="container">
            <div className="text-container">
                <h1 className="jacob">welcome I'm,</h1>
                <p className="my-projects">Jacob Rishe</p>
                <div className="hiding-effect"></div>
             </div>
            <div className="img-container">
                <img src={ Image } alt="portfolio-img" />
            </div>
        </div>
    )
}
