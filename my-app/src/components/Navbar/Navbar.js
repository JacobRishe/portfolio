import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
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
                        <li className="link"><a href="#">About</a></li>
                    </div>  
                    <div class="linkBackground">
                        <li className="link"><a href="#">Projects</a></li>
                    </div>  
                    <div class="linkBackground">
                        <li className="link"><a href="#">Skills</a></li>
                    </div>  
                    <div class="linkBackground">
                        <li className="link"><a href="#">Contact</a></li>
                    </div>  
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
        )
        
    }
}

export default Navbar