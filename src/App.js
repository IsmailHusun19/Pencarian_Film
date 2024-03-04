import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getListMovie, searchMovie } from './api';
import Navbar from './component/navbar';
import Home from './component/home';
import Detail from './component/detail';
import NowPlaying from './pages/nowplaying';
import TopRating from './pages/topRating';
import UpComing from './pages/upComing';
import Footer from './component/footer';
import Favorit from './pages/favorit';

function App() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getListMovie()
        .then((result) => {
          setMovie(result);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);

    const [value, setValue] = useState(); 
    const handleSearch = async () => {
      if (value !== "" && value !== undefined) {
        const query = await searchMovie(value);
        setMovie(query.results);
      }
    };
    
    if (loading) {
      return;
    }
  
  const repeatData = () => {
    getListMovie().then((result) => {
      setMovie(result);
    })
  }


  return (
    <Router>
        <Navbar setValueSearch={(e) => setValue(e)} onSearch={handleSearch} repeatData={repeatData} />
        <Routes>
          <Route path="/" element={<Home movie={movie} />} />
          <Route path="NowPlaying" element={<NowPlaying />} />
          <Route path="TopRating" element={<TopRating />} />
          <Route path="UpComing" element={<UpComing />} />
          <Route path="detail" element={<Detail />} />
          <Route path="favorit" element={<Favorit />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
