import React from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store) => store.app.user);
  console.log(user);

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
          <h1 className='text-lg text-white'>Elesh mern stack</h1>
          <div className='ml-4 mr-4'>
            <button className='bg-red-600 text-white px-4 py-2 rounded-lg'>
              Logout
            </button>
            <button className='bg-red-600 text-white px-4 py-2 ml-2 rounded-lg'>
              Search movie
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
