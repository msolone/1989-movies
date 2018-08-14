import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <li className="movie">
        <h2>{this.props.title}</h2>
        <h3>{this.props.release_date}</h3>
        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.props.poster_path}`} alt="image" />
        <p>{this.props.overview}</p>
      </li>
    )
  }
}

export default Movie
