import PropTypes from "prop-types";
import React from "react";

import Film from "../Film/Film";

class FilmList extends React.Component {
    render() {
        const { films } = this.props;

        return (
            <div>
                {films.map((film, i) => (
                    <Film film={film} key={i} isFirstRow={i === 0} />
                ))}
            </div>
        );
    }
}

FilmList.propTypes = {
    films: PropTypes.array,
};

export default FilmList;
