import React from 'react';
import './SideDrawer.css';

let sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.action) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li className="side-drawer-item"><a href='/'>Products</a></li>
                <li className="side-drawer-item"><a href='/'>Users</a></li>
                <li className="side-drawer-item"><a href='/'>History</a></li>
            </ul>
     </nav>
    );
};
export default sideDrawer;