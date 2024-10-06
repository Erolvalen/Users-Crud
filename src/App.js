import React from 'react';
import { Container } from 'react-bootstrap';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { useUsers } from './hooks/useUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const { users, createUser, deleteUser, updateUser } = useUsers();
    
    const handleCreateUser = async (user) => {
        await createUser(user);
    };

    return (
        <Container className="mt-5">
            <h1>User Management</h1>
            <UserForm onSubmit={handleCreateUser} />
            <UserList users={users} onDelete={(id) => deleteUser(id)} onEdit={(user) => updateUser(user.id, user)} />
        </Container>
    );
};

export default App;