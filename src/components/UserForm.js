import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ onSubmit }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: '',
        imageUrl: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleAddUser = () => {
        setUsers([...users, user]);
        setUser({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
            imageUrl: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        users.forEach(async (u) => {
            await onSubmit(u);
        });
        setUsers([]); // Clear the user list after submission
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={user.email} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={user.password} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="first_name" value={user.first_name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="last_name" value={user.last_name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="date" name="birthday" value={user.birthday} onChange={handleChange} required />
            </Form.Group>
            <Form.Group controlId="formImageUrl">
                <Form.Label>Image URL (optional)</Form.Label>
                <Form.Control type="text" name="imageUrl" value={user.imageUrl} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleAddUser}>
                Add User
            </Button>
            <Button variant="success" type="submit">
                Submit All Users
            </Button>
        </Form>
    );
};

export default UserForm;