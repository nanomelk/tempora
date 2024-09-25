import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProductGallery from './components/ProductGallery';
import Footer from './components/Footer';
import RelojForm from './components/RelojForm';
import RelojForm from './components/Register'; 
import './App.css'; 

const App = () => {
    return (
        <Router>
            <div id="root">
                <Header />
                <NavBar />
                <main style={{ flex: '1' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/productos" element={<ProductGallery />} />
                        <Route path="/contacto" element={<Footer />} />
                        <Route path="/cargar-reloj" element={<RelojForm />} /> {/* Nueva ruta */}
                        <Route path="/registro" element={<Register />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
