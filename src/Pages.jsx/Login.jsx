import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../store/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const NavigateSignup = () => {
    navigate('/signup');
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic check
    if (!user.email || !user.password) {
      toast.error("⚠️ Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        toast.success("🎉 Login successful!");
        setUser({ email: '', password: '' });
        setTimeout(() => {
          navigate('/');
        }, 1000); // Optional delay to let toast display
      } else {
        toast.error(`❌ Login failed: ${res_data.message || 'Invalid credentials'}`);
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error("🚨 Server error. Please try again later.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card login-card animate__animated animate__fadeIn">
        <div className="card-body">
          <h2 className="text-center mb-4 wave-text">Please Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control input-hover"
                placeholder="Enter email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control input-hover"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Login</button>

            <p className="mt-3 text-center">
              Don't have an account?{' '}
              <span
                onClick={NavigateSignup}
                className="text-primary"
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
              >
                Sign up here
              </span>
            </p>
          </form>
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
};

export default Login;
