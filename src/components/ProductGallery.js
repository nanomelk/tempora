// src/components/ProductGallery.js
import React from 'react';

const ProductGallery = () => {
    const images = [
        'url1.jpg',
        'url2.jpg',
        'url3.jpg',
    ];

    return (
        <div className="gallery">
            {images.map((url, index) => (
                <img key={index} src={url} alt="Watch" />
            ))}
        </div>
    );
};

export default ProductGallery;

