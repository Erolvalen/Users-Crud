import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const UserCard = ({ user, onDelete, onEdit }) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Card style={{ width: '18rem', marginBottom: '1rem', cursor: 'pointer' }} onClick={handleShow}>
                {user.imageUrl && <Card.Img variant="top" src={user.imageUrl} />}
                <Card.Body>
                    <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
                    <Card.Text>
                        Email: {user.email}<br />
                        Birthday: {user.birthday}
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{`${user.first_name} ${user.last_name}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={user.imageUrl} alt="User" style={{ width: '100%', marginBottom: '1rem' }} />
                    <p>Email: {user.email}</p>
                    <p>Birthday: {user.birthday}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => { onDelete(user.id); handleClose(); }}>
                        Delete
                    </Button>
                    <Button variant="warning" onClick={() => { onEdit(user); handleClose(); }}>
                        Edit
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UserCard;