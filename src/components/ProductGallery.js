import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductGallery = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/productos')
            .then(response => {
                setProductos(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="gallery">
            {productos.map(producto => (
                <div key={producto._id}>
                    <img 
                        src={producto.imagen} 
                        alt={producto.titulo} 
                        width="200"
                    />
                    <p>{producto.titulo} - ${producto.precio}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductGallery;
