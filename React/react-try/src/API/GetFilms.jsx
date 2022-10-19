import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const GetFilms = () => {
    const id = useParams();
    console.log(id);
    const [filmData, setFilmData] = useState("");
    

    useEffect(() => {
        const GetFilm = async () => {
            try{ const res = await 
                axios.get("http://www.omdbapi.com/?apikey=3b53446e&i=" + id.id);
                console.log("Response:", res);
                setFilmData(res.data);
            } catch(err){

            } 
        
        }
    GetFilm();
    }, [id]);
   
    


    // const makeRequest =(event) => {
    //     axios.get("http://www.omdbapi.com/?apikey=3b53446e&t=" + title)
    //     .then(response => {
    //         console.log(response.filmData);
    //         setFilmData(response.filmData);
    //     });
    // };

    return ( 
        <>
            <h2>{filmData.title}</h2>
            <section>
                <h1>Title: {filmData.Title}</h1>
                <p>Release Year: {filmData.Year}</p>
                <p>Runtime: {filmData.Runtime}</p>
                <p>Description: {filmData.Plot}</p>
                <img src={filmData.Poster} alt={filmData.title +"poster"}></img>
                <p>Rated: {filmData.Rated}</p>
                <p>Genre: {filmData.Genre}</p>
                <p>Director: {filmData.Director}</p>
                <p>Writers: {filmData.Writer}</p>
                <p>Actors: {filmData.Actors}</p>
                <p>Genre: {filmData.Genre}</p>
                <p>Awards: {filmData.Awards}</p>
                <p>Language: {filmData.Language}</p>

            </section>
        </>
    );
};


export default GetFilms;