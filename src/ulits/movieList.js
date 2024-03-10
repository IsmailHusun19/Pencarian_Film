import React from 'react';
import MovieCard from './movieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import { faFaceSurprise } from '@fortawesome/free-solid-svg-icons';

const MovieList = ({ movies, favorit }) => {
  const Kesalahan = () =>{
    const pesan = (icon, judulPesan, deskripsiPesan) => {
      if (movies.length === 0) {
        return (
          <div className="not-found">
            <FontAwesomeIcon className='icon-notFound' icon={icon} />
            <h1 className="not-data">{judulPesan}</h1>
            <p>{deskripsiPesan}</p>
          </div>
        );
      }
    }
    if(favorit === true){
      const icon = faFaceSurprise
      const judulPesan = "There are no films that you like yet"
      const deskripsiPesan = "There are currently no films that you like, please like the film so that it is included in the list"
      return pesan(icon, judulPesan, deskripsiPesan)
    }else {
      const icon = faFaceSadTear
      const judulPesan = "Data not found"
      const deskripsiPesan = "No movies match your current filter. Try deleting some of them to get better results."
      return pesan(icon, judulPesan, deskripsiPesan)
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
