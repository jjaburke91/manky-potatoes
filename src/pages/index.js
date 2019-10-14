import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Film from "../Film/Film";
import FilmEntry from "../models/FilmEntry";

import films from "../../data/films";

const IndexPage = () => {
  const allFilms = [];
  for (let i = 0; i < films.values.length; i++) {
    if (i < 2) continue;
    allFilms.push(new FilmEntry(films.values[i]))
  }

  return (
    <Layout>
      <SEO title="Home" />
      {allFilms.map((film, i) => (
        <Film film={film} key={i} isFirstRow={i === 0}/>
      ))}
    </Layout>
  );
}

export default IndexPage
