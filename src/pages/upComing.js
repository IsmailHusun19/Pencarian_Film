import { upComing } from "../api";
import { useEffect, useState } from 'react';
import Home from "../component/home";

const UpComing = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    upComing().then((result) => {
          setMovie(result);
    }).finally(() => {
          setLoading(false);
    });
  }, []);
    if (loading) {
      return;
    }

    return (
        <>
            <Home movie={(movie)} />
        </>
    )
}

export default UpComing