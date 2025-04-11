// src/components/pages/Users.tsx

import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../Api';
import { useNavigate } from 'react-router-dom';

const Users: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const result = await getUsers();
        setUsers(result.users); 
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId: number) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      alert('Error al eliminar usuario');
    }
  };

  const handleCreateUser = () => {
    navigate('/register');
  };

  const handleEditUser = (userId: number) => {
    navigate(`/edit/${userId}`);
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <button onClick={handleCreateUser}>Crear Nuevo Usuario</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.email})
            <button onClick={() => handleEditUser(user.id)}>Editar</button>
            <button onClick={() => handleDelete(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
