import React, { useState } from 'react';

const Register = () => {
  // Estado para los datos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showForm, setShowForm] = useState(null); // Controlar si se muestra el formulario de registro o de inicio de sesión

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
    <div className="register-container">
      <h2>Acceso de Usuario</h2>
      
      {/* Botones de Sign In y Sign Up */}
      <div className="button-group">
        <button className="auth-button" onClick={() => setShowForm('signup')}>Sign Up</button>
        <button className="auth-button" onClick={() => setShowForm('signin')}>Sign In</button>
      </div>

      {/* Formulario de Sign Up */}
      {showForm === 'signup' && (
        <div className="form-container">
          <h3>Registro de Usuario</h3>
          <form onSubmit={handleSubmit} className="register-form">
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
          {message && <p>{message}</p>}
        </div>
      )}

      {/* Formulario de Sign In */}
      {showForm === 'signin' && (
        <div className="form-container">
          <h3>Iniciar Sesión</h3>
          <form className="login-form">
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
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Register;
