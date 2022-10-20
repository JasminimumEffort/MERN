// import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';

function Film({ title, year, poster, button }) {
  return (
    <>
      <br/>
      <Card bg = {'dark'} border = "light" >
        <Card.Img variant = "top" src={poster} alt="A film" />
        <Card.Body>          
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`Year: ${year}`}</Card.Text>
          <Link to={"/GetFilms/" + button}>
            <button variant = "primary" type="button">Details</button>
          </Link>
        </Card.Body>
      </Card>
    </>
  )};

export default Film;

{/* Film.propTypes = {
//   title: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
//   poster: PropTypes.string.isRequired,
// };
  
// <p>
// {`Title: ${title}`}
// </p>
// <p>
// {`Year: ${year}`}
// </p>
// <img src={poster} alt="A film" />
// <br/>
// <Link to={"/GetFilms/" + button}>
//     <button type="button">Details</button>
// </Link>

// </>
// );
// } */}