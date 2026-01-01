import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-100 py-4 px-4 md:px-12 flex flex-wrap justify-between items-center font-sans sticky top-0 z-50">
      <Link 
        className="text-2xl font-extrabold text-[#2a251d] hover:text-[#9F8858] transition tracking-wide logo"
      >
        JMS Advasary
      </Link>

      <div className="flex items-center gap-4 md:gap-6 mt-2 md:mt-0">
        <button
          onClick={() => {
            if (!token) {
              alert("Please login first to access the Home page.");
              return;
            }
            navigate('/home');
          }}
          className="text-[#2a251d] font-semibold hover:text-[#9F8858] transition text-sm md:text-base"
        >
          Home
        </button>

        {token ? (
          <button 
            onClick={handleLogout}
            className="border-2 border-red-500 text-red-600 bg-white hover:bg-red-600 hover:text-white px-4 py-1.5 md:px-5 md:py-2 rounded-lg transition-all font-bold text-xs md:text-sm shadow-sm active:scale-95"
          >
            Logout
          </button> 
        ) : (
          <div className="flex gap-3 items-center">
            <Link 
              to="/login" 
              className="text-[#2a251d] hover:text-[#9F8858] font-bold text-sm transition"
            >
              Login
            </Link>
            
            <Link 
              to="/register" 
              className="bg-[#2a251d] text-white px-4 py-2 rounded-lg hover:bg-[#2a251d]/90 transition text-xs md:text-sm font-bold shadow-md"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;