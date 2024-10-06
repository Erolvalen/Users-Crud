import React from 'react';
import UserCard from './UserCard';
import { Row, Col } from 'react-bootstrap';

const UserList = ({ users, onDelete, onEdit }) => {
    return (
        <Row>
            {users.map(user => (
                <Col key={user.id} xs={12} sm={6} md={4} className="mb-4">
                    <UserCard user={user} onDelete={onDelete} onEdit={onEdit} />
                </Col>
            ))}
        </Row>
    );
};

export default UserList;