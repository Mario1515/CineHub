import React from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../hooks/useAxios';
import { useAuthContext } from '../../contexts/AuthProvider';
import Loader from '../Loader';
import { useState } from 'react';

const Logout = ({ showLogoutDialog, handleCloseDialog }) => {
  const { setUser, setToken } = useAuthContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State for loader

  const handleConfirmLogout = () => {
    setLoading(true); // Show loader

    axiosClient.post('/logout')
      .then(() => {
        setUser({});
        setToken(null);
        navigate(`/`);
      })
      .catch(() => {
        navigate(`/`);
      }).finally(()=> {
        setLoading(false);
        handleCloseDialog(); // Close the dialog after logout
      })
  };

  return (
    showLogoutDialog && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
        <div className="bg-neutral-800 p-6 rounded-lg shadow-lg max-w-sm w-full relative">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 bg-opacity-70">
              <Loader /> {/* Show loader when loading */}
            </div>
          )}
          <h2 className="text-lg font-bold mb-4 text-white">Confirm Logout</h2>
          <p className="mb-4 text-gray-300">Are you sure you want to log out?</p>
          <div className="flex justify-end gap-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-400"
              onClick={handleConfirmLogout}
            >
              Yes, Log Out
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-lg transition-transform transform hover:scale-105 hover:bg-gray-400"
              onClick={handleCloseDialog}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Logout;