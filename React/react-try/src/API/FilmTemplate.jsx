// import PropTypes from 'prop-types';

import {
  BrowserRouter as Router, Link, Route, Routes,
} from 'react-router-dom';

function Film({ title, year, poster, button }) {
  return (
    <>
      <p>
        {`Title: ${title}`}
      </p>
      <p>
        {`Year: ${year}`}
      </p>
      <img src={poster} alt="A film" />
      <br/>
      <Link to={"/GetFilms/" + button}>
            <button type="button">Details</button>
      </Link>

    </>
  );
}

export default Film;

// Film.propTypes = {
//   title: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
//   poster: PropTypes.string.isRequired,
// };