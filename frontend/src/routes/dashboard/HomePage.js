import React, { useState, useEffect, useCallback } from 'react';
import './dashboard.css';
import MovieCard from '../../components/movies/MovieCard';
import Filter from '../../components/movies/Filter';
import Button from '../../components/general/Button';
import axios from 'axios';

function HomePage() {
  // State initialization
  const [movies, setMovies] = useState([]);
  const [minYear, setMinYear] = useState(1970);
  const [maxYear, setMaxYear] = useState(2022);
  const [genres, setGenres] = useState([]);
  const [sort, setSort] = useState("");
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  const token = localStorage.getItem('accessToken');

  // Function to load movies based on filters and append to existing list
  const loadMovies = useCallback(async (currentPage) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/titles/advancedsearch`, {
        params: {
          minYear,
          maxYear,
          genres: genres.join(','), // Convert genres array to comma-separated string
          title,
          sort,
          page: currentPage,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMovies((prevMovies) => {
        const newMovies = response.data.titles;
        const uniqueMovies = newMovies.filter(
          (newMovie) => !prevMovies.some((movie) => movie.imdbId === newMovie.imdbId)
        );
        return [...prevMovies, ...uniqueMovies];
      });
    } catch (error) {
      console.error('Failed to load movies:', error);
    }
  }, [minYear, maxYear, genres, title, sort, token]);

  // Load movies when page changes
  useEffect(() => {
    loadMovies(page);
  }, [page, loadMovies]);

  // Reset movies and page when filters change
  useEffect(() => {
    setMovies([]); // Reset the movie list
    setPage(1); // Reset page to 1
    loadMovies(1); // Load movies for the first page with new filters
  }, [minYear, maxYear, genres, sort, title, loadMovies]);

  // Increment the page to load more movies
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="dashboard-homepage">
      {/* Filter Component */}
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />

      {/* Liste des films avec flexbox */}
      <ul className="movie-list">
        {movies.map((movie) => (
          <li key={movie.imdbId}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>

      {/* Load More Button */}
      <Button onClick={handleLoadMore} label="Load More.." className="load-more-button" />
    </div>
  );
}

export default HomePage;
