// src/components/pages/EditUser.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserById, updateUser } from '../Api';

const EditUser: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>({ username: '', email: '' });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await getUserById(Number(id));
        setUser(result);  // Asegúrate que el result contiene el usuario
      } catch (error) {
        console.error('Error al obtener usuario:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser(Number(id), user);
      navigate('/');
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Nombre de usuario"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
        />
        <button type="submit">Actualizar Usuario</button>
      </form>
    </div>
  );
};

export default EditUser;
