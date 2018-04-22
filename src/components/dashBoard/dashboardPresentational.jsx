import React from 'react';
import Pagination from "react-js-pagination";
import './dashboardStyle.css';
import { ListOptionsContainer } from '../listOptions/listOptionsContainer';

// Estateless functional component.
export const DashboardPresentational = props => {
    return <div className={props.isMenuOpen ? "pushableContent pushedContent" : "pushableContent"}>
        <header className="row">
            <div className="col_s_6 col_m_8 col_l_8 flex flex_items_center">
                {!props.isMenuOpen && <span className="pointer menuButon" onClick={props.toggleSideMenu}>&#9776;</span>}
                <h1 className="text_bold noMargin title">{props.pageTitle}</h1>
            </div>
            <div className="col_s_6 col_m_4 col_l_4">
                <ListOptionsContainer
                    sortParams={props.sortParams}
                    states={props.states}
                />
            </div>
        </header>
        <section className="row logsList">
            <div className="col_s_12 col_m_12 col_l_12">
                {props.mapList(props.applyPagination(props.logs, props.page, props.limit))}
            </div>
        </section>
        <section className="row pages">
            <div className="col_s_12 col_m_12 col_l_12 text_center">
                <Pagination
                    hideDisabled
                    activePage={props.page}
                    itemsCountPerPage={1}
                    totalItemsCount={props.totalPages}
                    onChange={props.onPageChange}
                />
            </div>
        </section>
    </div>;
};