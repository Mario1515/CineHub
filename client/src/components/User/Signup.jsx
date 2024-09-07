import React from 'react';
import {createRef, useState} from "react";
import {Link} from "react-router-dom";
import axiosClient from '../../hooks/useAxios';
import { AuthContext, useAuthContext } from '../../contexts/AuthProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader'; 


const Signup = () => {

  const navigate = useNavigate()
  const {setUser, setToken} = useAuthContext()
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false); // State for loader

  const nameRef = createRef()
  const emailRef = createRef()
  const passwordRef = createRef()
  const passwordConfirmRef = createRef()

  const onSubmit = async  (e) => {
    e.preventDefault();
    setLoading(true); // Show loader

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmRef.current.value,
    }

    // console.log(`This is what we sent to server ` + JSON.stringify(payload))

    axiosClient.post('/signup', payload)
      .then(({data}) => {
        setUser(data.user)
        setToken(data.token);
        navigate(`/`)
      })
      .catch(err => {
        console.log(err);
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      })
      .finally(() => {
        setLoading(false); // Hide loader
      });

  }

  return (
    <div className="bg-neutral-900 text-neutral-300 min-h-screen flex items-center justify-center">
      <div className="form-container max-w-md w-full bg-neutral-800 p-8 rounded-lg shadow-lg">
      {loading && <Loader />} {/* Show loader when loading */}
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        {message && (
          <div className="mb-4 p-4 bg-red-500 text-white rounded-lg shadow-md transition-opacity duration-500 ease-in-out opacity-100">
            {message}
          </div>
        )}
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Username</label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
             ref={emailRef}
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="passwordConfirm" className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              ref={passwordConfirmRef}
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">Already have an account?</p>
          <a href="/login" className="text-blue-500 hover:underline">Log In</a>
        </div>

      </div>
    </div>
  );
};

export default Signup;