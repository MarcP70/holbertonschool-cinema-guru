import React, { useState, useEffect } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import axios from 'axios';

function Favorites() {
  // State initialization for movies
  const [movies, setMovies] = useState([]);

  // useEffect hook to fetch favorite movies
  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const token = localStorage.getItem('accessToken');

      try {
        const response = await axios.get('http://localhost:8000/api/titles/favorite/', {
          headers: {
          Authorization: `Bearer ${token}`, // Ensure to pass the token for authentication
        }});

        // Update movies state with data from the response
        setMovies(response.data);
      } catch (error) {
        console.error('Failed to fetch favorite movies:', error);
      }
    };

    fetchFavoriteMovies();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="favorites-container">
      {/* Page title */}
      <p className='favorites-title'>MOVIES YOU LIKE</p>

      {/* List of favorite movies */}
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
