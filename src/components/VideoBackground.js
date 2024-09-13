import React from 'react';

const VideoBackground = () => {
  return (
    <div className='w-screen'>
      <iframe
        className='w-screen aspect-video'
        src='https://www.youtube.com/embed/CxpckHC5U5A?si=LVNTVMyzjZYkx646&autoplay=1&mute=1'
        title='YouTube video player'></iframe>
    </div>
  );
};

export default VideoBackground;
