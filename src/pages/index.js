import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Film from "../Film/Film";

import films from "../../data/films";

class FilmEntry {
  constructor(row, isFirstRow) {
    this.title = row[0];
    this.year = row[1] || "";
    this.director = row[14] || "";
    this.reviewRating = row[16] || "";
    this.reviewComment = row[17] || "";
    this.firstRow = !!isFirstRow;
  }
}

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
        <Film film={film} key={i} isFirstRow={i == 0}/>
      ))}
    </Layout>
  );
}

export default IndexPage
