// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ProductGallery from './components/ProductGallery';
import Footer from './components/Footer';
import './App.css'; // Importa el archivo CSS aquí

const App = () => {
    return (
        <Router>
            <div id="root">
                <Header />
                <NavBar />
                <main style={{ flex: '1' }}>
                    <Routes>
                        <Route path="/" element={<ProductGallery />} />
                        <Route path="/productos" element={<ProductGallery />} />
                        <Route path="/contacto" element={<Footer />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
