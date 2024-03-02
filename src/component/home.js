import MovieList from '../ulits/movieList';

const Home = ({ movie }) => {
    return (
        <>
            <div className='container-film'>
                <div className='myCard'>
                    <MovieList movies={movie} />
                </div>
            </div>
        </>
    )
}

export default Home;