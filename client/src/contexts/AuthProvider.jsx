import { createContext, useContext, useState } from "react";

// Create a context with default values
export const AuthContext = createContext({
  user: null,
  token: null,
  notification: null,
  setUser: () => {},
  setToken: () => {},
  setNotification: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
  const [notification, _setNotification] = useState('');

  // Function to set the token and manage local storage
  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  };

  // Function to set and clear notifications
  const setNotification = (message) => {
    _setNotification(message);
    setTimeout(() => {
      _setNotification('');
    }, 5000);
  };

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      notification,
      setNotification,
      isAuthenticated: token ? true : false // Derived value to check authentication status
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuthContext = () => useContext(AuthContext);