import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data.product || res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error:", err);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-[#2a251d] font-medium text-lg">
        Loading details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 font-bold text-lg">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#dfdfdf] flex justify-center items-center p-4 md:p-6 font-sans">
      <div className="bg-white max-w-5xl w-full rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="relative w-full h-64 sm:h-80 md:h-full bg-gray-200">
          <img
            src={product.image || "https://via.placeholder.com/600"}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/600?text=No+Image";
            }}
          />
        </div>

        <div className="p-6 md:p-10 flex flex-col justify-center">
          <div className="text-xs md:text-sm font-bold text-[#9F8858] uppercase tracking-wider mb-2 md:mb-3">
            Premium Selection
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2a251d] mb-3 md:mb-4 leading-tight">
            {product.name}
          </h1>

          <div className="text-2xl md:text-3xl font-bold text-[#9F8858] mb-4 md:mb-6">
            ₹{Number(product.price).toLocaleString()}
          </div>

          <div className="w-16 h-1 bg-[#9F8858] mb-4 md:mb-6 rounded-full"></div>

          <p className="text-[#2a251d]/80 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
            {product.description}
          </p>

          <div className="mt-auto">
            <button
              onClick={() => navigate('/home')}
              className="px-6 py-3 w-full md:w-auto border-2 border-[#2a251d] text-[#2a251d] hover:bg-[#2a251d] hover:text-white font-bold rounded-lg transition duration-200"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;