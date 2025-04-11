// src/components/LoginForm.tsx
import React, { useState } from 'react';
import { loginUser } from './Api';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación de credenciales estáticas
    if (email === 'admin@example.com' && password === '12345678') {
      try {
        const data = await loginUser(email, password);
        localStorage.setItem('token', data.token);
        window.location.href = '/users';
      } catch (err: any) {
        setError('Hubo un error al intentar iniciar sesión');
      }
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
