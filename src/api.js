import axios from 'axios';

const BASEURL = process.env.REACT_APP_BASEURL;
const APIURL  = process.env.REACT_APP_KEY;

export const getListMovie = async () => {
    const list = await axios.get(`${BASEURL}/movie/popular?api_key=${APIURL}`);
    return list.data.results
}

export const searchMovie = async (value) => {
    const search = await axios.get(`${BASEURL}/search/movie?query=${value}&api_key=${APIURL}`);
    return search.data
}

export const nowPlaying = async () => {
    const list = await axios.get(`${BASEURL}/movie/now_playing?api_key=${APIURL}`);
    return list.data.results
}

export const topRating = async () => {
    const list = await axios.get(`${BASEURL}/movie/top_rated?api_key=${APIURL}`);
    return list.data.results
}

export const upComing = async () => {
    const list = await axios.get(`${BASEURL}/movie/upcoming?api_key=${APIURL}`);
    return list.data.results
}

export const detailMovie = async (idMovie) => {
    const detail = await axios.get(`${BASEURL}/movie/${idMovie}?&api_key=${APIURL}`);
    console.log(detail.data)
    return detail.data
}