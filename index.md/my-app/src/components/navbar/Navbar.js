import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import {HashLink as Link} from 'react-router-hash-link'
import './Navbar.css'


class Navbar extends Component {  
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav>
                <ul className="navLinks">
                    <div class="linkBackground">
                        <li className="link"><Link className="linkTitle" smooth to="#about">About</Link></li>
                    </div>  
                    <div class="linkBackground">
                        <li className="link"><Link className="linkTitle" smooth to="#projects">Projects</Link></li>
                    </div>  
                    <div class="linkBackground">
                        <li className="link"><Link className="linkTitle" smooth to="#skills">Skills</Link></li>
                    </div>  
                    <div class="linkBackground">
                        <li className="link"><Link className="linkTitle" smooth to="#contact">Contact</Link></li>
                    </div>  
                </ul>
                <div className="iconWrapper" onClick={ this.handleClick }>
                    <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
                </div>
                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                    { MenuItems.map((item, index) => {
                        return(
                            <li className="links" key={ index }>
                                <Link smooth to={item.url} className={ item.cName }>
                                    { item.title }
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
        
    }
}

export default Navbar