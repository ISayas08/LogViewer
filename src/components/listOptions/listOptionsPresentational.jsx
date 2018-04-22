import React from 'react';
import './listOptionsStyle.css';

export const ListOptionsPresentational = props => {
    return <div className="relative">
        <div onClick={props.toggleOptions} className="text_right optionButtonContainer"><span className="optionsDiv">List options</span></div>
        <div className={props.isDisplayed ? "optionBox displayedOptonBox" : "optionBox"}>
            <p>
                <label>Sort by:</label><br />
                <select
                    id="sortSelect"
                    value={props.sortParam}
                    onChange={props.onInputChange}
                >
                    {props.sortParams.map((p, i) => <option key={i} value={p}>{p}</option>)}
                </select>
            </p>
            <div className="searchParams">
                <p>
                    <label htmlFor="startDate">Start Log Date</label><br />
                    <input
                        value={props.startDate}
                        onChange={props.onInputChange}
                        type="date" id="startDate" />
                </p>
                <p>
                    <label htmlFor="endtDate">End Log Date</label><br />
                    <input
                        value={props.endDate}
                        onChange={props.onInputChange}
                        type="date" id="endtDate" />
                </p>
                <p>
                    <label>State code:</label><br />
                    <select
                        id="stateSelect"
                        value={props.currentState}
                        onChange={props.onInputChange}
                    >
                        {props.states.map((p,i) => <option key={i} value={p}>{p}</option>)}
                    </select>
                </p>
                <p>
                    <input onClick={props.onApply} type="button" value="Apply" />
                </p>
            </div>
        </div>
    </div>;
}