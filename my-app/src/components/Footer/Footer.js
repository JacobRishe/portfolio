import React from 'react'
import './Footer.css'


export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* column1 */}
                    <div className="col">
                        <h3 className="header-title">CONTACT</h3>
                        <ul className="list-style">
                            <li><a href="tel:3152766931">315-276-6931</a></li>
                            <li><a href="mailto:Jacob.Rishe@gmail.com">Jacob.Rishe@gmail.com</a></li>
                            <li><a href="https://www.google.com/maps/place/Los+Angeles,+CA/@34.0201613,-118.6919205,10z/data=!3m1!4b1!4m5!3m4!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0522342!4d-118.2436849">Los Angeles, CA</a></li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <h3 className="header-title">SOCIAL</h3>
                        <div>
                            <ul className="list-style">
                                <li><a href="https://docs.google.com/document/d/1M-Do-dsSSRIyJCyJ8DAiDCbeG7IKQSksx9r2mxSAT0w/edit?usp=sharing">Sites Built</a></li>
                                <li><a href="https://linkedin.com/in/JacobRishe">LinkedIn</a></li>
                                <li><a href="https://github.com/JacobRishe">Github</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <h3 className="header-title">PROJECTS</h3>
                        <ul className="list-style">
                            <li><a href="https://github.com/JacobRishe">MERN STACK</a></li>
                            <li><a href="https://wayfarer-sei.herokuapp.com/">Python APP</a></li>
                            <li><a href="https://github.com/JacobRishe/API_APP">API APP</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row2">
                    <p className="copyright">
                        &copy;{ new Date().getFullYear() } Jacob Rishe | All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
