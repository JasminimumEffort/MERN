import PropTypes from 'prop-types';

function SearchBar({ text, changeHandler }) {
  return (
    <input value={text} onChange={changeHandler} />
  );
}

SearchBar.propTypes = {
  text: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default SearchBar;