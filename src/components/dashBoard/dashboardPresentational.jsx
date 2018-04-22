import React from 'react';
import Pagination from "react-js-pagination";
import './dashboardStyle.css';
import { ListOptionsContainer } from '../listOptions/listOptionsContainer';
import { Loading } from '../loading/loading';

// Estateless functional component.
export const DashboardPresentational = props => {
    return <div className={props.isMenuOpen ? "pushableContent pushedContent" : "pushableContent"}>
        <header className="row">
            <div className="col_s_4 col_m_4 col_l_4 flex flex_items_center">
                {!props.isMenuOpen && <span className="pointer menuButon" onClick={props.toggleSideMenu}>&#9776;</span>}
                <h1 className="text_bold noMargin title">{props.pageTitle}</h1>
            </div>
            <div className="col_s_8 col_m_8 col_l_8">
                <ListOptionsContainer />
            </div>
        </header>
        <section className="row logsList">
            <div className={props.isLoading ? "col_s_12 col_m_12 col_l_12 text_center" : "col_s_12 col_m_12 col_l_12"}>
                {props.isLoading ? <Loading />
                    : props.logs.length > 0 ?
                        props.mapList(props.applyPagination(props.logs, props.page, props.limit)) :
                        <div className="alert">No logs found</div>
                }
            </div>
        </section>
        <section className="row pages">
            <div className="col_s_12 col_m_12 col_l_12 text_center">
                {!props.isLoading && <Pagination
                    hideDisabled
                    activePage={props.page}
                    itemsCountPerPage={1}
                    totalItemsCount={props.totalPages}
                    onChange={props.onPageChange}
                />}
            </div>
        </section>
    </div>;
};