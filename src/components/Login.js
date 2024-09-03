import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { API_END_POINT } from '../utils/constants';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };
  const getInputData = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate('/browse');
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    } else {
      const user = { fullName, email, password };
      console.log(user);
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
    }

    setFullName(' ');
    setEmail(' ');
    setPassword(' ');
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
          src='https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg'
          alt='banner'
          className='w-[100vw] h-[100vh]'
        />
      </div>
      <form
        onSubmit={getInputData}
        className='absolute flex flex-col w-3/12 my-40 left-0 p-12 right-0 mx-auto items-center opacity-90 justify-center bg-black rounded-md'>
        <h1 className='text-white text-3xl mb-5'>
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>
        <div className='flex flex-col'>
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Full name '
              type='text'
              className='outline-none p-3 my-3 rounded-sm bg-gray-700 text-white'
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            type='email'
            className='outline-none p-3 my-3 rounded-sm bg-gray-700 text-white'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
            className='outline-none p-3 my-3 rounded-sm bg-gray-700 text-white'
          />
          <button className='bg-red-600 mt-6 p-3 text-white rounded-sm'>
            {isLogin ? 'Login' : 'Sign In'}
          </button>
          <p className='text-white mt-3'>
            {isLogin ? 'New to netflix?' : 'Already have an account'}
            <span
              onClick={loginHandler}
              className='ml-1 text-blue-900 font-medium cursor-pointer '>
              {isLogin ? 'Signup' : 'Login'}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
