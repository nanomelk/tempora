import React, { useState } from 'react';

const Register = () => {
  // Estado para los datos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = {
      name,
      email,
      password
    };
    console.log(userData);
    try {
      // Llamada a la API usando fetch
      const response = await fetch('https://tempora-back.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Usuario registrado con éxito: ${data.name}`);
        setName('');
        setEmail('');
        setPassword('');
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage('Hubo un error al intentar registrar el usuario.');
    }
    
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>

      {/* Mostrar mensaje de éxito o error */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
