export const API_END_POINT = 'http://localhost:8080/api/v1/user';

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjc4OTVlMTNlNTkxY2IwNTU5OWMwNWZhYjE5OTI2NSIsIm5iZiI6MTcyNTgyOTMyMC44MjI2MTIsInN1YiI6IjY2ZGI3Nzc4ZmM5ODc1NTEzZDM0MDNjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FpRZ2ue58QXoCYM8-sH4qoSCZd6yMdkE41IHM9d4Hb0',
  },
};

export const Now_Playing_Movie =
  'https://api.themoviedb.org/3/movie/now_playing';
export const Popular_Movie = 'https://api.themoviedb.org/3/movie/popular';
export const Top_Rated_Movies = 'https://api.themoviedb.org/3/movie/top_rated';
export const Upcoming_Movies = 'https://api.themoviedb.org/3/movie/upcoming';
export const Banner_url = 'https://image.tmdb.org/t/p/w500';
