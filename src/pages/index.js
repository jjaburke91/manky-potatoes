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
            searchValue: "",
        };

        this._requestFilms = this._requestFilms.bind(this);
        this._initGapi = this._initGapi.bind(this);
        this._setSearchValue = this._setSearchValue.bind(this);
    }

    componentDidMount() {
        if (USE_DUMMY_DATA) {
            return this.setState({
                films: films.values
                    .slice(2, films.values.length)
                    .map(film => new FilmEntry(film)),
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
                console.log(response);
                const rows = response.result;
                const allFilms = [];
                for (let i = 2; i < rows.values.length; i++) {
                    allFilms.push(new FilmEntry(rows.values[i]));
                }

                this.setState({
                    films: allFilms,
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

    render() {
        let filmsToRender = this.state.films;
        if (filmsToRender && this.state.searchValue) {
            filmsToRender = this.state.films.filter(film =>
                film.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
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
                        <FilmList films={filmsToRender} />
                    </div>
                )}
            </Layout>
        );
    }
}

export default IndexPage;
