import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
  const { LogoutUser } = useAuth();

  useEffect(() => {
    LogoutUser();
    toast.success("✅ You have been logged out successfully.");
  }, [LogoutUser]);

  return (
    <>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <Navigate to="/login" />
    </>
  );
};

export default Logout;
