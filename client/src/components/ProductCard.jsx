import React from 'react';

export default function ProductCard({ product, isAdmin, onEdit, onDelete, onView }) {

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/300?text=No+Image";
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100 overflow-hidden">
      <div className="h-40 w-full bg-gray-200 relative">
        <img
          src={product.image || "https://via.placeholder.com/300"}
          alt={product.name}
          onError={handleImageError}
          className="w-full h-full object-cover block"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2
      className="text-[#2a251d] font-bold text-lg mb-1"
        title={product.name}>
          {product.name}
        </h2>
        <p className="text-[#2a251d]/70 text-sm mb-3">
          {product.description}
        </p>
        <div className="text-[#9F8858] font-bold text-xl mb-4">
          ₹{Number(product.price).toLocaleString()}
        </div>
        <div className="flex gap-2 pt-3 mt-auto">
          {isAdmin ? (
            <>
              <button
                onClick={() => onEdit(product._id)}
              className="flex-1 border border-[#2a251d] text-[#2a251d] bg-white hover:bg-[#2a251d] hover:text-white font-bold py-1.5 rounded text-sm transition shadow-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(product._id)}
               className="flex-1 border border-red-600 text-red-600 bg-white hover:bg-red-800 hover:text-white font-bold py-1.5 rounded text-sm transition shadow-sm"
              >
                Delete
              </button>
            </>
          ) : (
            <button
              onClick={() => onView(product._id)}
             className="w-full border-2 border-[#9F8858] text-[#9F8858] bg-white hover:bg-[#9F8858] hover:text-white font-bold py-2 rounded text-sm transition shadow-sm"
            >
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
}   