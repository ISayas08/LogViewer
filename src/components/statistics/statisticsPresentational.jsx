import React from 'react';
import './statisticsStyle.css';
import { Loading } from '../loading/loading';

export const LogsListPresentational = props => {
    return <div className={props.isMenuOpen ? "pushableContent pushedContent" : "pushableContent"}>
        <header className="row">
            <div className="col_s_12 col_m_12 col_l_12 flex flex_items_center">
                {!props.isMenuOpen && <span className="pointer menuButon" onClick={props.toggleSideMenu}>&#9776;</span>}
                <h1 className="text_bold noMargin title">{props.pageTitle}</h1>
            </div>
        </header>
        <section className="row logsList">
            <div className={props.isLoading ? "col_s_12 col_m_12 col_l_12 text_center" : "col_s_12 col_m_12 col_l_12"}>
                {props.isLoading ? <Loading />
                    : <div className="alert">Stats not available</div>
                }
            </div>
        </section>
    </div>;
}