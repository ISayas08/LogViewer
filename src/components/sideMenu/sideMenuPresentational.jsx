import React from 'react';
import './sideMenuStyle.css';

export const SideMenuPresentational = props => {
    return <div className={props.isMenuOpen ? "sidenav sidenav_open" : "sidenav"}>
        <a className="closebtn pointer" onClick={props.toggleSideMenu}>&times;</a>
        {props.links}
    </div>;
}