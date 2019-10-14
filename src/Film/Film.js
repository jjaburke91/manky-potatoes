import PropTypes from "prop-types"
import React from "react"

import './film.css';

class Film extends React.Component {
  render() {
    const film = this.props.film;
    if (!film.title) return null;

    const {title, year, director, reviewRating, reviewComment} = film;
    return (
      <div className="film">
        <span className="film__title">
          {title} {reviewRating}
        </span>
        <div>
          {year}, {director}
        </div>
        <div>
          {reviewComment}
        </div>
      </div>
    );
  }
}

Film.propTypes = {
  film: PropTypes.object,
  isFirstRow: PropTypes.bool,
}

export default Film;
