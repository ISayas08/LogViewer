import React from 'react';
import './logItemStyle.css';

export const LogItemPresentational = props => {
    return <div className="col_s_12 col_m_12 col_l_12 logItem">
        <div onClick={props.toggleItem} className="titleLog relative pointer">
            <span className="numerator">{props.index}.</span>
            <span>State Code: {props.stateCode}</span>
            <span>{' - '}</span>
            <span>Pro Code: {props.proCode}</span>
            {props.isDisplayed && <span className="absolute itemListStatus">&or;</span>}
            {!props.isDisplayed && <span className="absolute itemListStatus">&Xi;</span>}
        </div>
        <div className={!props.isDisplayed ? "contentItem" : "contentItem displayedLog"}>
            {props.profession && <p>
                <span className="text_bold">Profession: </span><span>{props.profession}</span>
            </p>}

            {props.licenseId && <p>
                <span className="text_bold">License ID: </span><span>{props.licenseId}</span>
            </p>}

            {props.cicleEndDate && <p>
                <span className="text_bold">Cycle End Date: </span><span>{props.cicleEndDate}</span>
            </p>}

            {props.status && <p>
                <span className="text_bold">Compliance Status: </span><span>{props.status}</span>
            </p>}

            {props.clientId && <p>
                <span className="text_bold">Client ID: </span><span>{props.clientId}</span>
            </p>}

            {props.startLogDate && <p>
                <span className="text_bold">Start Log Date: </span><span>{props.startLogDate}</span>
            </p>}

            {props.endLogDate && <p>
                <span className="text_bold">End Log Date: </span><span>{props.endLogDate}</span>
            </p>}

            {props.enviroment && <p>
                <span className="text_bold">Environment: </span><span>{props.enviroment}</span>
            </p>}

            {props.machine && <p>
                <span className="text_bold">Machine: </span><span>{props.machine}</span>
            </p>}
        </div>
    </div>;
}