import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ setValueSearch, onSearch, repeatData }) => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const location = useLocation();
    const currentURL = location.pathname;
    const cheking = currentURL !== '/' ? true : false;

    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const home = () => {
        repeatData();
        handleNavbarToggle();
    }

    const button = () => {
        handleNavbarToggle();
        onSearch();
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FilmKu</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavbarToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link active" to="/" onClick={home}>Home</Link></li>                                    
                        <li className="nav-item"><Link className="nav-link active" to="favorit" onClick={handleNavbarToggle}>Favorit</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="NowPlaying" onClick={handleNavbarToggle}>Now Playing</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="TopRating" onClick={handleNavbarToggle}>Top Rating</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="UpComing" onClick={handleNavbarToggle}>Up Coming</Link></li>
                    </ul>
                    <form className={`d-flex ${cheking ? 'd-none' : ''}`} role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setValueSearch(e.target.value)} />
                        <button className="btn btn-primary" onClick={button} type="button">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
