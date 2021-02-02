import React, { Component } from "react";

export default class Movie extends Component {
    render() {
        const { poster, title, year } = this.props;
        return (
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{year}</p>
                        </div>
                    </div>
                </div>

                <div className="card-image">
                    <figure className="image">
                        <img src={poster} alt="Movie poster" />
                    </figure>
                </div>
            </div>
        );
    }
}
