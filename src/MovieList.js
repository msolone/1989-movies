import React, { Component } from 'react'
import Movie from './Movie.js'
import MovieData from './1989-Movies.json'

class MovieList extends Component {
  render() {
    return (
      <div className="movieList">
        <ul>

            {MovieData.results.map((movie, i) =>
            {return <Movie title={movie.title} poster_path={movie.poster_path} overview={movie.overview} key={i} />
                })}
        </ul>

      </div>

    )
  }
}

export default MovieList