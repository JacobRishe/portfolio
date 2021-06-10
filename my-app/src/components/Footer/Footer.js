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
                            <li>315-276-6931</li>
                            <li>Jacob.Rishe@gmail.com</li>
                            <li>Culver City, CA</li>
                        </ul>
                    </div>
                    {/* column2 */}
                    <div className="col">
                        <h3 className="header-title">SOCIAL</h3>
                        <ul className="list-style">
                            <li><a href="https://linkedin.com/in/JacobRishe">LinkedIn</a></li>
                            <li><a href="https://github.com/JacobRishe">Github</a></li>
                            <li><a href="https://codepen.io/jacob-rishe">Codepen</a></li>
                        </ul>
                    </div>
                    {/* column3 */}
                    <div className="col">
                        <h3 className="header-title">CONTACT</h3>
                        <ul className="list-style">
                            <li>315-276-6931</li>
                            <li>Jacob.Rishe@gmail.com</li>
                            <li>Culver City, CA</li>
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
