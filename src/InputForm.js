import React, { Component } from "react";
import "./css/InputForm.css";

// react-bootstrapからButton,Form,Container,Row,Colコンポーネントをインポート
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Class Component
export default class InputForm extends Component {
    render() {
        return (
            <div className="InputForm">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col md={6}>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label id="formTitle">タイトル</Form.Label>
                                    <Form.Control type="title" placeholder="タイトル" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>内容</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                                <Button variant="primary" type="create" id="createButton">
                                    作成
                                </Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}