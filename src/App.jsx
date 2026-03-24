import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';
import Privacy from './pages/Privacy';
import Returns from './pages/Returns';
import Shipping from './pages/Shipping';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <CartDrawer />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products-list" element={<Shop />} />
              <Route path="/products-list/collections/:category" element={<Shop />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/shipping" element={<Shipping />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
