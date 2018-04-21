import React from 'react';
import './dashboardStyle.css';

// Estateless functional component.
export const DashboardPresentational = props => {
    return <div className={props.isMenuOpen ? "row pushableContent pushedContent" : "row pushableContent"}>
        {!props.isMenuOpen && <span className="pointer" onClick={props.toggleSideMenu}>&#9776;</span>}
    </div>;
};