import React, { Component } from 'react'
import Movie from './Movie.js'
import MovieData from './1989-Movies.json'

class MovieList extends Component {
    // sortByNumber = (a,b) => {
    //     return a - b
    // }
    render() {
      let splitDate = MovieData.results[0].release_date.split('-').join('')
      let newReleaseDate = parseInt(splitDate)
      console.log(newReleaseDate)
      
    return (
      <div>
        <ul className="movieListUl">
            {MovieData.results.sort((a,b) => {
                if (a.release_date > b.release_date) {
                    return 1
                } else if (a.release_date < b.release_date) {
                    return -1
                } else {
                    return 0
                }
            }).map((movie, i) =>
            {return <Movie title={movie.title} 
            release_date={movie.release_date} 
            poster_path={movie.poster_path} 
            overview={movie.overview} 
            key={i} />
                })}
        </ul>

      </div>

    )
  }
}

export default MovieList