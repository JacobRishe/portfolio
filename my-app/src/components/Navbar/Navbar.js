import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css'


class Navbar extends Component {  
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return <nav>
            <div>
                <h1 className="navbar-logo">J<span className="letter-r">R</span></h1>
            </div>
            <ul className="navLinks">
                <li className="link"><a href="#">About</a></li>
                <li className="link"><a href="#">Projects</a></li>
                <li className="link"><a href="#">Skills</a></li>
                <li className="link"><a href="#">Contact</a></li>
            </ul>
            <div className="iconWrapper" onClick={ this.handleClick }>
                <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
            </div>
            <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                { MenuItems.map((item, index) => {
                    return(
                        <li className="links" key={ index }>
                            <a className={ item.cName } href={ item.url }>
                            { item.title }
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
        
    }
}

export default Navbar