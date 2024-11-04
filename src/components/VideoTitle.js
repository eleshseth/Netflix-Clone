import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { CiCircleInfo } from 'react-icons/ci';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video absolute text-white pt-[18%] p-12'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='w-1/3'>{overview}</p>
      <div className='mt-8 flex'>
        <button className=' flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80 '>
          <FaPlay className='mr-1' />
          Play
        </button>
        <button className='flex items-center px-6 py-2 bg-white text-black rounded-md ml-2'>
          <CiCircleInfo className='mr-1' />
          Watch More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
