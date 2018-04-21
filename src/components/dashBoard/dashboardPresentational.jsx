import React from 'react';
import './dashboardStyle.css';

// Estateless functional component.
export const DashboardPresentational = props => {
    return <div className={props.isMenuOpen ? "pushableContent pushedContent" : "pushableContent"}>
        <header className="row">
            <div className="col_s_12 col_m_12 col_l_12 flex flex_items_center">
                {!props.isMenuOpen && <span className="pointer menuButon" onClick={props.toggleSideMenu}>&#9776;</span>}
                <h1 className="text_bold noMargin title">{props.pageTitle}</h1>
            </div>
        </header>
        <section className="row">
        </section>
        <section className="row">
            {props.logs}
        </section>
    </div>;
};