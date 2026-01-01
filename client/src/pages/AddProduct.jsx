import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    name: '', 
    price: '', 
    description: '', 
    image: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.price || !formData.description || !formData.image) {
      alert("All fields are required!");
      return;
    }

    const priceValue = Number(formData.price);
    if (priceValue < 1) {
      alert("Price must be at least 1.");
      return;
    }
    
    if (!Number.isInteger(priceValue)) {
      alert("Price must be a whole number (no decimals allowed).");
      return;
    }

    const token = localStorage.getItem('token'); 
    if (!token) {
      alert("Please login first.");
      navigate('/login');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/products', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Product Added Successfully!');
      navigate('/home'); 
    } catch (error) {
      console.error("Error adding product:", error);
      alert('Failed to add product.');
    }
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] bg-gray-50 p-4 font-sans">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-5 text-center">
          Add New Product
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Name
              </label>
              <input 
                name="name" 
                placeholder="e.g. Wireless Mouse" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 outline-none transition" 
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Price (Whole Number)
              </label>
              <input 
                name="price" 
                type="number" 
                min="1"
                step="1"
                placeholder="e.g. 50" 
                value={formData.price} 
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === '.' || e.key === 'e') e.preventDefault();
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 outline-none transition" 
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Description
              </label>
              <textarea 
                name="description" 
                placeholder="Enter product details..." 
                value={formData.description} 
                onChange={handleChange} 
                rows="3" 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 outline-none transition resize-none" 
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Image URL
              </label>
              <input 
                name="image" 
                placeholder="https://example.com/image.jpg" 
                value={formData.image} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 outline-none transition" 
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button 
              type="submit" 
              className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-bold py-2.5 rounded transition shadow-sm"
            >
              Add Product
            </button>
            <button 
              type="button" 
              onClick={() => navigate('/home')} 
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2.5 rounded transition shadow-sm"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;