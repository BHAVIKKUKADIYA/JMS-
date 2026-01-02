import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductDetails from './pages/ProductDetails';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const handleAuthChange = () => {
      setToken(localStorage.getItem('token'));
    };

    window.addEventListener('authChange', handleAuthChange);
    return () => window.removeEventListener('authChange', handleAuthChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#dfdfdf]">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/login" replace />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/home"
            element={
              token ? (
                <Home />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/add-product"
            element={
              token ? (
                <AddProduct />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/edit-product/:id"
            element={
              token ? (
                <EditProduct />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/product/:id"
            element={
              token ? (
                <ProductDetails />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;