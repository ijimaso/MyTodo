import React from "react";
import "./css/Count.css";

import Badge from 'react-bootstrap/Badge';


/**
 * Countコンポーネント
 *
 * @param {*} props
 * @returns
 */
const Count = props => {
    return (
        <div className="count">
            <div className="eachbadge">
                <h1 id="done">
                    <Badge variant="info">Done:{props.doneTodo}</Badge>
                </h1>
            </div>
            <div className="eachbadge">
                <h1>
                    <Badge variant="warning">Undone:{props.undoneTodo}</Badge>
                </h1>
            </div>
        </div>
    )
}

export default Count;