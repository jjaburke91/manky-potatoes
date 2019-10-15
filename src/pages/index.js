/* global gapi */

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FilmList from "../components/FilmList/FilmList";
import FilmEntry from "../models/FilmEntry";

// import films from "../../data/films";

const SPREADSHEET_ID = "1eH17SHg_JACgmAe3VJ3fOATLcTC0QwLkK42iyjp1IJE";
const API_KEY = "AIzaSyDU7ArjrrMpoVsFVkXha32sPUWff7yqYBY";
const CLIENT_ID = "759156115005-rj8aq7fuo23b867u1ddnjsmso32gls40.apps.googleusercontent.com";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            films: null,
        };

        this._requestFilms = this._requestFilms.bind(this);
        this._initGapi = this._initGapi.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
            gapi.load('client', this._initGapi);
        }, 1000);
    }

    _initGapi() {
        gapi.client.init({
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

        gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: "Sheet1!B:T"
        }).then(response => {
            const rows = response.result;
            const allFilms = [];
            for (let i = 2; i < rows.values.length; i++) {
                allFilms.push(new FilmEntry(rows.values[i]));
            }

            this.setState({
                films: allFilms,
            })
        }).catch(err => {
            console.error("error making spreadsheet request:", err);
        });
    }

    render() {
        return (
            <Layout>
                <SEO title="Home" />

                {!this.state.films && (
                    <img src="https://i.gifer.com/ZJtI.gif" alt="potatoes loading"/>
                )}

                {!!this.state.films && <FilmList films={this.state.films} />}
            </Layout>
        );
    }
}

export default IndexPage;
