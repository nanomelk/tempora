import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirección

const AuthForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // Hook para redirección

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError(false);

    const userData = { email, password, ...(isRegister && { name }) };

    try {
      const endpoint = isRegister
        ? 'https://tempora-back.onrender.com/api/users/register'
        : 'https://tempora-back.onrender.com/api/users/login';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Operación exitosa');
        setName('');
        setEmail('');
        setPassword('');
        setShowPopup(true);

        if (isRegister) {
          // Después del registro, mostrar el formulario de inicio de sesión
          setIsRegister(false);
          setIsFormVisible(true);
        } else {
          navigate('/'); // Redirige a la página de inicio si es un login
        }
      } else {
        setMessage(data.message || 'Error al procesar la solicitud');
        setError(true);
        setShowPopup(true);
      }
    } catch (error) {
      setMessage('Hubo un error en la conexión.');
      setError(true);
      setShowPopup(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {loading && (
        <div className="overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="button-group">
        <button className="auth-button" onClick={() => setIsFormVisible(false)}>Iniciar sesión</button>
        <button className="auth-button" onClick={() => { setIsFormVisible(true); setIsRegister(true); }}>Registrarse</button>
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

      {showPopup && (
        <div className="message-popup" onClick={closePopup}>
          <div className={`popup-content ${error ? 'error' : 'success'}`} onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>✖</button>
            {error ? (
              <span>❌ {message}</span>
            ) : (
              <span>✅ {message}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
