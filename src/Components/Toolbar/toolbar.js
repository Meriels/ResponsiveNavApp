import React from 'react';
import DrawerToggleButton from '../My-hamburger/DrawerToggleButton';
import './toolbar.css';


const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_nav">
            <div>
                <DrawerToggleButton click={props.handleDrawerClick}/>
            </div>
            <div className="toolbar_logo"> <a href='/'>The Logo</a> </div>
            <div className="spacer"/>
            <div className="toolbar_nav_items">
                <ul>
                    <li><a href= '/'>Account</a> </li>
                    <li><a href = '/'>Stores</a></li>
                </ul>
            </div>
        </nav>
    </header>
);
export default Toolbar;