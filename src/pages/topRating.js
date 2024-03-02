import { topRating } from "../api";
import { useEffect, useState } from 'react';
import Home from "../component/home";

const TopRating = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    topRating().then((result) => {
          setMovie(result);
    }).finally(() => {
          setLoading(false);
    });
  }, []);
    if (loading) {
      return;
    }

    console.log(movie)

    return (
        <>
            <Home movie={(movie)} />
        </>
    )
}

export default TopRating