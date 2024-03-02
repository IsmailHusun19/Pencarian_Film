import React from 'react';
import MovieCard from './movieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';

const MovieList = ({ movies }) => {
  const Kesalahan = () =>{
    if (movies.length === 0) {
      return (
        <div className="not-found">
          <FontAwesomeIcon className='icon-notFound' icon={faFaceSadTear} />
          <h1 className="not-data">Data not found</h1>
          <p>No movies match your current filter. Try deleting some of them to get better results.</p>
        </div>
      );
    }
  }
  return (
    <>
      {movies.map((movie, i) => (
        <MovieCard key={i} movie={movie} />
      ))}
      <Kesalahan />
    </>
  );
};

export default MovieList;
