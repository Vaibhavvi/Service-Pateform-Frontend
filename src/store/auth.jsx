import { createContext, useContext, useEffect, useState } from "react";

// Create the context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const[user, setUser] = useState(" ");

  // Function to store token in localStorage and update state
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem('token', serverToken);
    setToken(serverToken); // ✅ Keep state in sync
  };

  // JWT Authentication --- to get the currently login user data

  const userAuthentication = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/user', {
        method: 'GET',
        headers:{
          Authorization: `Bearer ${token}`,
        },
      });

      if(response.ok){
        const data = await response.json();
        console.log("User data:",data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log("Error in userAuthentication:",error);
    }
  }

  useEffect(() => {
    userAuthentication();
  },[])

  // Boolean to indicate if user is logged in
  const isLogged = !!token;

  // Function to log out user
  const LogoutUser = () => {
    setToken(""); // Clear state
    localStorage.removeItem('token'); // Clear localStorage
  };

  return (
    <AuthContext.Provider value={{ isLogged, LogoutUser, storeTokenInLS, userData:user}}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return authContextValue;
};
