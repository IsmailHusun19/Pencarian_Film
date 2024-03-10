import MovieList from '../ulits/movieList';

const Home = ({ movie, favorit }) => {
    console.log(favorit)
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