import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        const productData = res.data.product || res.data;
        setFormData({
          name: productData.name || '',
          price: productData.price || '',
          description: productData.description || '',
          image: productData.image || ''
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

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
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Product Updated Successfully!');
      navigate('/home');
    } catch (error) {
      console.error("Error updating:", error);
      alert('Failed to update.');
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-20 font-bold text-gray-500">
        Loading details...
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-80px)] w-full bg-[#dfdfdf] flex justify-center items-center overflow-hidden font-sans">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8 border border-gray-100 mx-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Edit Product
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 outline-none transition"
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
                value={formData.price}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === '.' || e.key === 'e') {
                    e.preventDefault();
                  }
                }}
                className="w-full p-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full p-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 outline-none transition resize-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-1">
                Image URL
              </label>
              <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded focus:ring-2 focus:ring-blue-900 outline-none transition"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              type="submit"
              className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded transition shadow-sm active:scale-90"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate('/home')}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded transition shadow-sm active:scale-95"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;