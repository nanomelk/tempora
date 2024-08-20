import React, { useEffect, useState } from 'react';

const ProductGallery = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/productos') 
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="gallery">
            {productos.map(producto => (
                <div key={producto.id}>
                    <img src={producto.img} alt={producto.name} />
                    <p>{producto.name} - ${producto.price}</p>
                </div>
            ))}

        </div>
    );
};

export default ProductGallery;
