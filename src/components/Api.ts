// src/Api.ts

const API_URL = 'https://18.223.164.123:5000';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

export const registerUser = async (username: string, password: string, email: string) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });
    return response.json();
  } catch (error) {
    console.error('Error en registro:', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    throw error;
  }
};

export const deleteUser = async (userId: number) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: 'DELETE',
    });
    return response.json();
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    throw error;
  }
};

export const updateUser = async (userId: number, updatedData: { username: string, email: string }) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    return response.json();
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    throw error;
  }
};
export const getUserById = async (userId: number) => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`);
    return response.json();
  } catch (error) {
    console.error('Error al obtener el usuario por ID:', error);
    throw error;
  }
};
