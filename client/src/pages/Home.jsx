import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [notification, setNotification] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const role = localStorage.getItem('role');
  const isAdmin = role === 'admin' || role === 'Admin';

  useEffect(() => {
    fetchProducts();
    checkForNotification();
  }, []);

  const checkForNotification = () => {
    if (location.state?.notification) {
      setNotification({
        title: "Success",
        message: location.state.notification
      });
      setShowToast(true);
      window.history.replaceState({}, document.title);
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchProducts();
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans relative">
      {showToast && notification && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 rounded-lg shadow-xl bg-green-600/90 backdrop-blur-md text-white">
          <div className="bg-white/20 p-1 rounded-full">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm">{notification.title}</span>
            <span className="text-xs opacity-90">{notification.message}</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between py-6 md:py-8 mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 text-center">
            Our Collection
          </h1>

          {isAdmin && (
            <button
              onClick={() => navigate('/add-product')}
              className="mt-3 md:mt-0 whitespace-nowrap shrink-0 bg-blue-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-800 transition text-sm font-bold"
            >
              Add Product
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              isAdmin={isAdmin}
              onEdit={(id) => navigate(`/edit-product/${id}`)}
              onDelete={handleDelete}
              onView={(id) => navigate(`/product/${id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;