import myImage from '../tesst.jpg'
import React from 'react';
import { useLocation } from 'react-router-dom';
import { detailMovie } from '../api';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const Detail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idMovie = queryParams.get('movie');
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        detailMovie(idMovie)
          .then((result) => {
            setMovie(result);
          })
          .finally(() => {
            setLoading(false);
          });
      }, [idMovie]);

      const [isLiked, setIsLiked] = useState(false);

      const handleLikeClick = () => {
        setIsLiked(!isLiked);
      };
      
      if (loading) {
        return;
      }
    return (
         <div className="card container-detail">
            <div className="row g-0 detail">
                <div className="col-md-3 foto-detail">
                <img src={movie.poster_path ? `${process.env.REACT_APP_IMAGE}/${movie.poster_path}` : myImage} className="img-fluid rounded-start image-detail" alt={movie.title} />
                </div>
                <div className="col-md-8 keterangan-detail">
                <div className="card-body body-ket-detail">
                   <h3 className='Pstar pstar-detail'><FontAwesomeIcon className='star star-detail' icon={faStar} />{movie.vote_average.toFixed(1)}</h3>
                    <h5 className="card-title title-detail">{movie.title}</h5>
                    <p className="card-text ket-detail">{movie.overview}</p>
                    <div className="btn-favorit-detail">
                      <h3>
                        <FontAwesomeIcon
                          icon={isLiked ? solidHeart : regularHeart}
                          onClick={handleLikeClick}
                          style={{ cursor: 'pointer', color: '#ff454b', fontSize: '35px'}}
                        />
                      </h3>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;