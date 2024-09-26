import React, { useState } from 'react';

const AuthForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userData = { email, password, ...(isRegister && { name }) };

    try {
      const endpoint = isRegister
        ? 'https://tempora-back.onrender.com/api/users/register'
        : 'https://tempora-back.onrender.com/api/users/login';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(isRegister ? `Usuario registrado con éxito: ${data.name}` : `Sesión iniciada correctamente.`);
        setName('');
        setEmail('');
        setPassword('');
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage('Hubo un error al intentar procesar la solicitud.');
    }
  };

  const showForm = (register) => {
    setIsRegister(register);
    setIsFormVisible(true);
  };

  return (
    <div className="auth-container">
      <div className="button-group">
        <button className="auth-button" onClick={() => showForm(false)}>Iniciar sesión</button>
        <button className="auth-button" onClick={() => showForm(true)}>Registrarse</button>
      </div>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="form-container">
          <h3>{isRegister ? 'Registro de Usuario' : 'Iniciar sesión'}</h3>

          {isRegister && (
            <>
              <label>Nombre:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </>
          )}

          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit">{isRegister ? 'Registrarse' : 'Iniciar sesión'}</button>
        </form>
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default AuthForm;
