import myImage from '../tesst.jpg'
import React from 'react';
import { useLocation } from 'react-router-dom';
import { detailMovie } from '../api';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { Liked, getAllDataFromTable, DeleteLiked } from '../ulits/LikedFavorit';
import moment from 'moment';
import 'moment/locale/id';

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

      const handleLikeClick = (id) => {
        setIsLiked(!isLiked);
        if (!isLiked){
          Liked(movie);
        }else {
          DeleteLiked(id);
        }
      };
      
      if (loading) {
        return;
      }
      getAllDataFromTable().then((data) => {
        const idMovie = movie.id;
        const movieIndex = data.findIndex((m) => m.id === idMovie);
      
        if (movieIndex !== -1) {
          setIsLiked(true);
        }
      });

      const formatTanggal = (tanggal) => {
        const parsedDate = moment(`${tanggal}`, 'YYYY-MM-DD');
        return parsedDate.format("DD MMMM YYYY");
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
                    <p className="ket-detail">{movie.overview}</p>
                    <p className="ket-detail">{formatTanggal(movie.release_date)}</p>
                    <div className="btn-favorit-detail">
                      <h3>
                        <FontAwesomeIcon
                          icon={isLiked ? solidHeart : regularHeart}
                          onClick={() => handleLikeClick(movie.id)}
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