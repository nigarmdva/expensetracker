import React, { useState } from 'react';
import { axiosFunction } from '../../axios';
import useAuthStore from '../../store/authStore';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    if (password !== cpassword) {
      setError('Passwords do not match');
      return;
    }

    const userData = {
      name,
      email,
      password,
      password_confirmation: cpassword,
    };

    console.log('Sending data:', userData);

    try {
      const result = await axiosFunction('POST', 'register', userData);
      console.log('Registration successful:', result);

      const { accessToken, user } = result; 
      login(user, accessToken); 
      console.log(result);

      window.location.href = '/user';
    } catch (err) {
      setError('Registration failed');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <input
        name='name'
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name='email'
        type='text'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name='password'
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        name='cpassword'
        type='password'
        placeholder='Confirm Password'
        value={cpassword}
        onChange={(e) => setCpassword(e.target.value)}
      />
      {error && <p className='text-red-500'>{error}</p>}
      <button type='submit'>Register</button>
      <span>already have an account?<a href="/login">Login</a></span>
    </form>
  );
};

export default Register;
