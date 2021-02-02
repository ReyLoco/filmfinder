import React, { Component } from 'react'
import  Movie from './Movie'

export default class MoviesList extends Component {
    render() {
        const { movies} = this.props

        return (
            <div className='MoviesList'>
                { movies.map(movie =>{
                    return <Movie className='Movie-Item' key={movie.imdbID} title={movie.Title} poster={movie.Poster} year={movie.Year} />
                })
            }
            </div>
        )
    }
}
