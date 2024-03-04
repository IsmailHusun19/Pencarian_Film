import { useEffect, useState } from 'react';
import Home from '../component/home';
import { getAllDataFromTable } from '../ulits/LikedFavorit';

const Favorit = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllDataFromTable();
          setMovies(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
      };
  
      fetchData();
    }, []);
    if (loading) {
        return;
      }
  
      return (
          <>
              <Home movie={(movies)} />
          </>
      )
}

export default Favorit;
