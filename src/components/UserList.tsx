// src/components/UserList.tsx

import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from './Api';
import { useNavigate } from 'react-router-dom';

const UserList: React.FC = () => {
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

  const handleEditUser = (userId: number) => {
    navigate(`/edit/${userId}`);
  };

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.email})
            <button onClick={() => handleDelete(user.id)}>Eliminar</button>
            <button onClick={() => handleEditUser(user.id)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
