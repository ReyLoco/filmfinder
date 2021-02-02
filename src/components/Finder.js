// import React from "react";

// export const Finder = (params) => {
//   return (
//     <div className="field has-addons">
//       <div className="control">
//         <input className="input" type="text" placeholder="Write a movie name" />
//       </div>
//       <div className="control">
//         <button className="button is-primary">Search</button>
//       </div>
//     </div>
//   );
// };

import React, { Component } from "react";
import * as GLOBAL from '../global/Constants'

export default class Finder extends Component {
    state = {
        film: "",
    };

    handleChange = (e) => {
        this.setState({
            film: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        //react add a fetch polyfill so it can be used in older brownsers
        fetch(`${GLOBAL.BASE_URI_OMDB}?i=tt3896198&apikey=${GLOBAL.API_KEY}&s=${this.state.film}`)
            .then(res => res.json())
            .then( results => {
                const {Search=[]}= results
                console.log(Search)
                this.props.onMoviesResults(Search)
            })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" placeholder="Write a movie name" onChange={this.handleChange} />
                    </div>
                    
                    <div className="control">
                        <button className="button is-primary">Search</button>
                    </div>
                </div>
            </form>

        );
    }
}
