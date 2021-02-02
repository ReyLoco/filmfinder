import "./App.css";
import "bulma/css/bulma.css";

import React, {Component} from 'react';
import { Title } from "./components/Title";
import Finder from "./components/Finder";
import MoviesList from './components/MoviesList'

class App extends Component {
  state ={
    moviesResult:[],
  }

  handleMoviesResults=(moviesResult) =>{
    this.setState({
      moviesResult,
    })
  }

  renderMoviesResults = () => {
    const {moviesResult} = this.state
    return moviesResult.map(movie => { return <h2 key={movie.imdbID}>{movie.Title}</h2> })
  }

    render() {
        return (
            <div className="App container is-fluid">
                <Title>Film Finder</Title>
                <div className="SearchForm-wrapper">
                <Finder onMoviesResults={this.handleMoviesResults}/>
                </div>
                { this.state.moviesResult.length === 0 ? <p>No movies</p>: <MoviesList movies={this.state.moviesResult} /> }
            </div>
        );
    }
}

export default App;
