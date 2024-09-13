import React from 'react';
import { Banner_url } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-48 pr-2'>
      <img src={`${Banner_url}/${posterPath}`} alt='movie banner ' />
    </div>
  );
};

export default MovieCard;
