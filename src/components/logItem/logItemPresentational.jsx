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
                <span>Profession: </span><span>{props.profession}</span>
            </p>}

            {props.licenseId && <p>
                <span>License ID: </span><span>{props.licenseId}</span>
            </p>}

            {props.cicleEndDate && <p>
                <span>Cycle End Date: </span><span>{props.cicleEndDate}</span>
            </p>}

            {props.status && <p>
                <span>Compliance Status: </span><span>{props.status}</span>
            </p>}

            {props.clientId && <p>
                <span>Client ID: </span><span>{props.clientId}</span>
            </p>}

            {props.startLogDate && <p>
                <span>Start Log Date: </span><span>{props.startLogDate}</span>
            </p>}

            {props.endLogDate && <p>
                <span>End Log Date: </span><span>{props.endLogDate}</span>
            </p>}

            {props.enviroment && <p>
                <span>Environment: </span><span>{props.enviroment}</span>
            </p>}

            {props.machine && <p>
                <span>Machine: </span><span>{props.machine}</span>
            </p>}
        </div>
    </div>;
}