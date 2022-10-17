import {useState, useEffect} from 'react';
import axios from 'axios';

const GetFilm = () => {
    const [title, setTitle] = useState("");
    const [filmData, setFilmData] = useState("");

   const updateTitle = (event) => {
    event.preventDefault(); 
    setTitle(event.target.value);
   };

    
useEffect(() => {
    const GetFilms = async () => {
        try{ const res = await 
            axios.get("http://www.omdbapi.com/?apikey=3b53446e&t=" + title);
        console.log("Response:", res);
        setFilmData(res.data);
        } catch(err){

        }
    }
    GetFilms();
},[title]);

    const makeRequest =(event) => {
        axios.get("http://www.omdbapi.com/?apikey=3b53446e&t=" + title)
        .then(response => {
            console.log(response.filmData);
            setFilmData(response.filmData);
        });
    };

    return ( 
        <>
            <label htmlFor="EnterFilmTitle">Please input your film title here:</label>
            <input type="text" id="EnterFilmTitle" onChange={event => setTitle(event.target.value)} />
            <h2>{title}</h2>
            <button onClick={(event) => makeRequest(event)}>Search</button>
            <section>
                <p>Title: {filmData.Title}</p>
                <p>Release Year: {filmData.Year}</p>
                <p>Runtime: {filmData.Runtime}</p>
                <img src={filmData.Poster} alt={title +"poster"}></img>
            </section>
        </>
    );
};


export default GetFilm;