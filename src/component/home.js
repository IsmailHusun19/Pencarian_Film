import MovieList from '../ulits/movieList';

const Home = ({ movie, favorit }) => {
    return (
        <>
            <div className='container-film'>
                <div className='myCard'>
                    <MovieList movies={movie} favorit={favorit} />
                </div>
            </div>
        </>
    )
}

export default Home;