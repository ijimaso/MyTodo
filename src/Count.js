import React, { Component } from "react";
import "./css/Count.css"

import Badge from 'react-bootstrap/Badge'

export default class Count extends Component {
    render() {
        return (
            <div className="count">
                <div className="eachbadge">
                    <h1 id="done">
                        <Badge variant="info">完了:{this.props.doneTodo}</Badge>
                    </h1>
                </div>
                <div className="eachbadge">
                    <h1>
                        <Badge variant="danger">未完了:{this.props.undoneTodo}</Badge>
                    </h1>
                </div>
            </div>
        )
    }
}