import React, { useState } from 'react';
import axios from 'axios';

const RelojForm = () => {
    const [formData, setFormData] = useState({
        genero: '',
        precio: '',
        descuento: '',
        medio_de_pago: '',
        envio: '',
        caracteristicas: '',
        imagen_url: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/relojes', formData)
            .then(response => {
                setSuccess('Reloj cargado exitosamente');
                setFormData({
                    genero: '',
                    precio: '',
                    descuento: '',
                    medio_de_pago: '',
                    envio: '',
                    caracteristicas: '',
                    imagen_url: '',
                });
                setError(null);
            })
            .catch(error => {
                setError('Hubo un error al cargar el reloj');
                setSuccess(null);
            });
    };

    return (
        <div className="reloj-form">
            <h1>Cargar Reloj</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="genero">Género:</label>
                    <input
                        type="text"
                        id="genero"
                        name="genero"
                        value={formData.genero}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="precio">Precio:</label>
                    <input
                        type="number"
                        id="precio"
                        name="precio"
                        value={formData.precio}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="descuento">Descuento:</label>
                    <input
                        type="number"
                        id="descuento"
                        name="descuento"
                        value={formData.descuento}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="medio_de_pago">Medio de Pago:</label>
                    <input
                        type="text"
                        id="medio_de_pago"
                        name="medio_de_pago"
                        value={formData.medio_de_pago}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="envio">Envío:</label>
                    <input
                        type="text"
                        id="envio"
                        name="envio"
                        value={formData.envio}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="caracteristicas">Características:</label>
                    <textarea
                        id="caracteristicas"
                        name="caracteristicas"
                        value={formData.caracteristicas}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="imagen_url">URL de la Imagen:</label>
                    <input
                        type="url"
                        id="imagen_url"
                        name="imagen_url"
                        value={formData.imagen_url}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Cargar Reloj</button>
            </form>
        </div>
    );
};

export default RelojForm;
