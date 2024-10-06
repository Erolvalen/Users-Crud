import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://users-crud.academlo.tech/users/';

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_URL);
            setUsers(response.data);
            console.log("Usuarios recuperados:", response.data); // Agregar este log
        } catch (err) {
            setError(err);
            console.error("Error al recuperar usuarios:", err); // Agregar este log
        } finally {
            setLoading(false);
        }
    };

    const createUser = async (user) => {
        await axios.post(API_URL, user);
        fetchUsers();
    };

    const updateUser = async (id, user) => {
        await axios.put(`${API_URL}${id}/`, user);
        fetchUsers();
    };

    const deleteUser = async (id) => {
        await axios.delete(`${API_URL}${id}/`);
        fetchUsers();
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return { users, loading, error, createUser, updateUser, deleteUser };
};