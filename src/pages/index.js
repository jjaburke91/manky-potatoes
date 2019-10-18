/* global gapi */

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FilmList from "../components/FilmList/FilmList";
import FilmEntry from "../models/FilmEntry";

import films from "../../data/films";

const SPREADSHEET_ID = "1eH17SHg_JACgmAe3VJ3fOATLcTC0QwLkK42iyjp1IJE";
const API_KEY = "AIzaSyDU7ArjrrMpoVsFVkXha32sPUWff7yqYBY";
const CLIENT_ID =
    "759156115005-rj8aq7fuo23b867u1ddnjsmso32gls40.apps.googleusercontent.com";

const USE_DUMMY_DATA = false;

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films: null,
            genres: null,
            searchValue: "",
            selectedGenre: null,
        };

        this._requestFilms = this._requestFilms.bind(this);
        this._initGapi = this._initGapi.bind(this);
        this._setSearchValue = this._setSearchValue.bind(this);
        this._renderGenre = this._renderGenre.bind(this);
    }

    componentDidMount() {
        if (USE_DUMMY_DATA) {
            const allFilms = films.values
                .slice(2, films.values.length)
                .map(film => new FilmEntry(film));

            const genres = Object.keys(allFilms[0].genres);
            return this.setState({
                films: allFilms,
                genres: genres,
            });
        }

        setTimeout(() => {
            gapi.load("client", this._initGapi);
        }, 1000);
    }

    componentDidUpdate() {
        console.log(this.state.searchValue);
    }

    _initGapi() {
        gapi.client
            .init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: [
                    "https://sheets.googleapis.com/$discovery/rest?version=v4",
                ],
                scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
            })
            .then(this._requestFilms)
            .catch(err => {
                console.log("error initing gapi", err);
            });
    }

    _requestFilms() {
        console.log("Requesting films...");

        gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: SPREADSHEET_ID,
                range: "Sheet1!B:T",
            })
            .then(response => {
                const rows = response.result;
                const allFilms = [];
                for (let i = 2; i < rows.values.length; i++) {
                    const filmEntry = new FilmEntry(rows.values[i]);
                    allFilms.push(filmEntry);
                }

                const genres = Object.keys(allFilms[0].genres);
                this.setState({
                    films: allFilms,
                    genres: genres,
                });
            })
            .catch(err => {
                console.error("error making spreadsheet request:", err);
            });
    }

    _setSearchValue(e) {
        this.setState({
            searchValue: e.target.value
        });
    }

    _renderInputForm() {
        return (
            <input
                type="text"
                value={this.state.searchValue}
                onChange={this._setSearchValue}
            />
        );
    }

    _renderGenres() {
        if (!this.state.genres) return null;

        return this.state.genres.map(genre => {
            return this._renderGenre(genre);
        })
    }

    _renderGenre(genre) {
        const genreStyle = {
            padding: "0 2px",
            cursor: "pointer",
            fontWeight: genre === this.state.selectedGenre ? "bold" : "normal"
        }

        return (
            <span onClick={() => this.setState({selectedGenre: genre})} style={genreStyle}>
                {genre}
            </span>
        );
    }

    render() {
        let filmsToRender = this.state.films;
        if (filmsToRender && this.state.searchValue) {
            filmsToRender = this.state.films.filter(film =>
                film.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
            );
        }

        if (filmsToRender && this.state.selectedGenre) {
            filmsToRender = this.state.films.filter(film =>
                film.genres[this.state.selectedGenre] === true
            );
        }

        return (
            <Layout>
                <SEO title="Home" />

                {!this.state.films && (
                    <img
                        src="https://i.gifer.com/ZJtI.gif"
                        alt="potatoes loading"
                    />
                )}

                {!!filmsToRender && (
                    <div>
                        {this._renderInputForm()}
                        {this._renderGenres()}
                        <FilmList films={filmsToRender} />
                    </div>
                )}
            </Layout>
        );
    }
}

export default IndexPage;
