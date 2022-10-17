// import PropTypes from 'prop-types';

function Film({ title, year, poster }) {
  return (
    <>
      <p>
        {`Title: ${title}`}
      </p>
      <p>
        {`Year: ${year}`}
      </p>
      <img src={poster} alt="A film" />
    </>
  );
}

export default Film;

// Film.propTypes = {
//   title: PropTypes.string.isRequired,
//   year: PropTypes.string.isRequired,
//   poster: PropTypes.string.isRequired,
// };