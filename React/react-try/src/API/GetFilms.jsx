import {useState, useEffect} from 'react';
import axios from 'axios';

const GetFilms = () => {
    const [imdbKey, setimdbKey] = useState("");
    const [filmData, setFilmData] = useState("");

    
useEffect(() => {
    const GetFilm = async () => {
        try{ const res = await 
            axios.get("http://www.omdbapi.com/?apikey=3b53446e&i=" + imdbKey);
        console.log("Response:", res);
        setFilmData(res.data);
        } catch(err){

        }
    }
    GetFilm();
}



    // const makeRequest =(event) => {
    //     axios.get("http://www.omdbapi.com/?apikey=3b53446e&t=" + title)
    //     .then(response => {
    //         console.log(response.filmData);
    //         setFilmData(response.filmData);
    //     });
    // };

    return ( 
        <>
            <h2>{title}</h2>
            <section>
                <p>Title: {filmData.Title}</p>
                <p>Release Year: {filmData.Year}</p>
                <p>Runtime: {filmData.Runtime}</p>
                <p>Description: {filmData.Plot}</p>
                <img src={filmData.Poster} alt={title +"poster"}></img>
            </section>
        </>
    );
};


export default GetFilms;