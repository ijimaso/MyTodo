import React, { Component } from "react";
import "./css/Form.css";

// react-bootstrapからButton,Formコンポーネントをインポート
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class InputForm extends Component {
    render() {
        return (
            <div className="InputForm">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>タイトル</Form.Label>
                        <Form.Control type="title" placeholder="タイトル" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>内容</Form.Label>
                        <Form.Control type="content" placeholder="内容" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="create">
                        作成
                    </Button>
                </Form>
            </div>
        )
    }
}