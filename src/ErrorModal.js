import React from "react";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


/**
 * ErrorModalコンポーネント
 *
 * @export
 * @class ErrorModal
 * @extends {Component}
 */
const ErrorModal = props => {
    return (<Modal show={props.show} onHide={props.modalClose}>
        <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`Please enter a new Todo's ${props.modalMessage}!!`}</Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={props.modalClose}>
                OK!
                </Button>
        </Modal.Footer>
    </Modal>);
};

export default ErrorModal;
