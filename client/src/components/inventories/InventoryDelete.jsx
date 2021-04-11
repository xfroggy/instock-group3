import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const DeleteConfirmation = ({ showModal, hideModal, confirmModal, id, item, type, message }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
            <Modal.Header closeButton>
                <Modal.Title>Delete {item} inventory item?</Modal.Title>
            </Modal.Header>
            <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
            <Modal.Footer>
                <Button variant="default" onClick={hideModal}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={() => confirmModal(type, id)}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteConfirmation;