import React from 'react';
import './App.css'
import {Link} from 'react-router-dom';

function Nav(){
    const hrefStyle = {
        color: 'white'        
    }

    return(
        <nav>
            <Link style={hrefStyle} to="/">
                <h3>Fitness Builder</h3>
            </Link>           

            <ul className="links">
                <Link style={hrefStyle} to="/list">
                    <li>Exercise List</li>
                </Link>

                <Link style={hrefStyle} to="/routine">
                    <li>Routine</li>
                </Link>

                <Link style={hrefStyle} to="/signup">
                    <li>Signup</li>
                </Link>

                <Link style={hrefStyle} to="/login">
                    <li>Login</li>
                </Link>    
            </ul>
        </nav>
    );

}

export default Nav;