import {useState, useEffect} from 'react';
import axios from 'axios';
import Film from "./FilmTemplate.jsx";

const SearchFilm = () => {
    const [title, setTitle] = useState("");
    const [FilmData, setFilmData] = useState([]);

//    const updateTitle = (event) => {
//     event.preventDefault(); 
//     setTitle(event.target.value);
//    };

    
// useEffect(() => {
//     const GetFilms = async () => {
//         try{ const res = await 
//             axios.get("http://www.omdbapi.com/?apikey=3b53446e&t=" + title);
//         console.log("Response:", res);
//         setFilmData(res.data);
//         } catch(err){

//         }
//     }
//     GetFilms();
// },[title]);

    const SearchFilms = async (title) => {
        const res = await axios.get("http://www.omdbapi.com/?apikey=3b53446e&s=" + title);
        console.log("Response:", res.data.Search);
        setFilmData(res.data.Search);
    }

    // useEffect(() => {
    //     SearchFilms(title);
    // }, [title]);
    console.log(FilmData);
    console.log(typeof FilmData)

    // const makeRequest =(event) => {
    //     axios.get("http://www.omdbapi.com/?apikey=3b53446e&t=" + title)
    //     .then(response => {
    //         console.log(response.filmData);
    //         setFilmData(response.filmData);
    //     });
    // };
    return ( 
        <>
            <label htmlFor="EnterFilmTitle">Please input your film title here:</label>
            <input type="text" id="EnterFilmTitle" value = {title} onChange={event => setTitle(event.target.value)} />
            <button type="button" onClick={SearchFilms}>SEARCH</button>
            <br/>
            {FilmData.map((film) => (
          <Film
            key={film.imdbID}
            title={film.Title}
            year={film.Year}
            poster={film.Poster}
          />
        ))}
            {/* <h2>{title}</h2>
            <section>
                <p>Title: {filmData.Title}</p>
                <p>Release Year: {filmData.Year}</p>
                <p>Runtime: {filmData.Runtime}</p>
                <p>Description: {filmData.Plot}</p>
                <img src={filmData.Poster} alt={title +"poster"}></img>
            </section> */}
        </>
    );
};


export default SearchFilm;