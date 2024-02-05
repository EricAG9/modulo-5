// MovieCard.js

import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ id, title, genre, releaseYear, rating }) => {
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <p>ID: {id}</p>
      <p>Gênero: {genre}</p>
      <p>Ano de lançamento: {releaseYear}</p>
      <p>Nota: {rating}</p>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
