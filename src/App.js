
import React from 'react';
import MovieList from './componentes/movieList/MovieList';
import './App.css'

const App = () => {

  const moviesData = [
    {
      id: 1,
      title: 'The Dirt (Motley Crue)',
      genre: 'Música',
      releaseYear: 2018,
      rating: 9.8,
    },
    {
      id: 2,
      title: 'Sem Volta para Casa',
      genre: 'Ação/Ficção científica',
      releaseYear: 2021,
      rating: 100000,
    },
    {
      id: 3,
      title: 'Veloses e Furiosos',
      genre: 'Ação',
      releaseYear: 2001,
      rating: 10,
    },
    {
      id: 4,
      title: 'As tranças do Rei Careca',
      genre: 'Fantasias',
      releaseYear: 2045,
      rating: 7,
    },
    
  ];

  return (
    <div className="app">
      <h1 className='catalogo'>Catalogo de Filmes</h1>
      <MovieList movies={moviesData} />
    </div>
  );
};

export default App;
