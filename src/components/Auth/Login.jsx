import React, { useState } from 'react'
import { axiosFunction } from '../../axios'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response= await axiosFunction('POST', 'login', {email, password});
           localStorage.setItem('token', response.token);
            window.location.href = '/user';
        }
        catch(err){
            console.log(err);
        }
    }
  return (

        <div>
            <input onChange={(e)=>setEmail(e.target.value)} name='email' type="text" />
            <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" />
            <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
  )
}

export default Login