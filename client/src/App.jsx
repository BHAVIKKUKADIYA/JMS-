import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ProductDetails from './pages/ProductDetails';

function App() {
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
              localStorage.getItem('token') ? (
                <Home />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/add-product"
            element={
              localStorage.getItem('token') ? (
                <AddProduct />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/edit-product/:id"
            element={
              localStorage.getItem('token') ? (
                <EditProduct />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/product/:id"
            element={
              localStorage.getItem('token') ? (
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