import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import FilmList from "../components/FilmList/FilmList";
import FilmEntry from "../models/FilmEntry";

import films from "../../data/films";

const IndexPage = () => {
    const allFilms = [];
    for (let i = 0; i < films.values.length; i++) {
        if (i < 2) continue;
        allFilms.push(new FilmEntry(films.values[i]));
    }

    return (
        <Layout>
            <SEO title="Home" />

            <FilmList films={allFilms} />
        </Layout>
    );
};

export default IndexPage;
