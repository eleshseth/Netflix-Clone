import axios from 'axios';
import React from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { API_END_POINT } from '../utils/constants';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <div className='absolute z-10 bg-gradient-to-b from-black flex w-[100%] items-center justify-between'>
      <img
        className='w-56'
        src='https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png'
        alt='sa'
      />
      {user && (
        <div className='flex items-center'>
          <IoIosArrowDropdown size='24px' color='white' />
          <h1 className='text-lg text-white'>{user.fullName}</h1>
          <div className='ml-4 mr-4'>
            <button
              className='bg-red-600 text-white px-4 py-2 rounded-lg'
              onClick={logoutHandler}>
              Logout
            </button>
            <button
              onClick={toggleHandler}
              className='bg-red-600 text-white px-4 py-2 ml-2 rounded-lg'>
              {toggle ? 'Home' : 'Search Movies'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
