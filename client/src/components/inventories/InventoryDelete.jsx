import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import "./InventoryDelete.scss";

const DeleteConfirmation = ({ showModal, hideModal, confirmModal, id, item, type, message }) => {

    return (

        <Modal className="modal-custom" show={showModal} onHide={hideModal}>
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
            <div class="modal-overlay">
            </div>


        </Modal>



    )
}

export default DeleteConfirmation;