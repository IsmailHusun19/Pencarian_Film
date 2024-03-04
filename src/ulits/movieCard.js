import myImage from '../rusak.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Dexie from 'dexie';

class MyDatabase extends Dexie {
  constructor() {
    super('MyDatabase');
    this.version(1).stores({
      myTable: 'id, title, star, deskripsi',
    });
  }
}

const MovieCard = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      const db = new MyDatabase();
      db.myTable.add({ 
        id: movie.id, 
        title : movie.title, 
        star : movie.vote_average,
        deskripsi : movie.overview

        })
        .then(() => {
          return
        })
        .catch((error) => {
          return error.message
        });
    }
  };

  return (
    <div>
      <div className="card">
        <img src={movie.poster_path ? `${process.env.REACT_APP_IMAGE}/${movie.poster_path}` : myImage} className="card-img-top" alt={movie.title} />
        <div className="card-body">
          <h3 className='Pstar'><FontAwesomeIcon className='star' icon={faStar} />{movie.vote_average.toFixed(1)}</h3>
          <h3 className="card-title">{movie.title}</h3>
          <p className="card-text">{movie.overview}</p>
          <div className="btn-favorit">
            <Link className="btn btn-primary" to={`/detail?movie=${movie.id}`}>Detail</Link>
            <h3>
              <FontAwesomeIcon
                icon={isLiked ? solidHeart : regularHeart}
                onClick={handleLikeClick}
                style={{ cursor: 'pointer', color: '#ff454b' }}
              />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;