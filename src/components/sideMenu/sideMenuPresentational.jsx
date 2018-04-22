import React from 'react';
import './sideMenuStyle.css';

export const SideMenuPresentational = props => {
    return <div className={props.isMenuOpen ? "sidenav sidenav_open" : "sidenav"}>
        <a className="closebtn pointer" onClick={props.toggleSideMenu}>&times;</a>
        <div className="row">
            <div className="col_s_12 col_l_12 col_m_12 text_center">
                <img className="logo" src={props._R.getLogoUrl()} alt="" /><br/>
                <label className="slogan">Log Viewer</label>
            </div>
        </div>
        {props.links}
    </div>;
}