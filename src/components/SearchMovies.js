import React from 'react';

const SearchMovies = () => {
  return (
    <div className='flex justify-center pt-[10%] w-[100%]'>
      <form className='w-[50%]'>
        <div className='flex justify-between shadow-md border-2 border-gray-200 rounded-ld w-[100%] p-2'>
          <input
            className='outline-none w-full rounded-md text-lg'
            type='text'
            placeholder='search movies'
          />
          <button className='bg-red-600 text-white px-4 py-2 rounded-md'>
            Search Movies
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchMovies;
