import React, { useState, useEffect } from 'react';
import './Sinup.css'; // Your custom styles
import Registration from '../assets/Registration.jpeg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

function Signup() {
  const imageStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  };

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const location = useLocation();
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const welcomeMessage = location.state?.welcomeMessage;

  useEffect(() => {
    if (welcomeMessage) {
      toast.info(welcomeMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }, [welcomeMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.username || !formData.email || !formData.phone || !formData.password) {
      toast.error("⚠️ Please fill in all fields!");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const res_data = await response.json();

      if (response.ok) {
        toast.success("🎉 User registered successfully!");
        storeTokenInLS(res_data.token);
        setFormData({ username: "", email: "", phone: "", password: "" });
        navigate('/');
      } else {
        toast.error(`❌ ${res_data.message || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("🚨 Network error. Please try again later.");
    }
  };

  return (
    <div className="signup-container">
      <div className="container mt-5">
        <div className="text-center mb-5">
          <h1 className="easily-register-message">REGISTER NOW</h1>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12 mb-4">
            <form onSubmit={handleSubmit} className="form-container">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
          </div>

          <div className="col-md-6 col-sm-12 mb-4 d-flex justify-content-center align-items-center">
            <div className="image-container">
              <img src={Registration} alt="Registration" style={imageStyle} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
}

export default Signup;
