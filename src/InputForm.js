import React from "react";
import "./css/InputForm.css";

// react-bootstrapからButton,Form,Container,Row,Colコンポーネントをインポート
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * InputFormコンポーネント
 *
 * @export
 * @class InputForm
 * @extends {Component}
 */
const InputForm = props => {
    return (
        <div className="InputForm">
            <Container>
                <Row>
                    <Col />
                    <Col md={6}>
                        <Form onSubmit={props.makeTodo}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label id="formTitle">Title</Form.Label>
                                <Form.Control type="title" placeholder="Title" name="title" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows="3" name="content" />
                            </Form.Group>
                            <Button variant="success" type="create" id="createButton">
                                Create
                                </Button>
                        </Form>
                    </Col>
                    <Col />
                </Row>
            </Container>
        </div>
    );
}

export default InputForm;