class FilmEntry {
    constructor(row) {
        this.title = row[0];
        this.year = row[1] || "";
        this.director = row[15] || "";
        this.actors = row[14] || "";
        this.reviewRating = row[17] || "";
        this.reviewComment = row[18] || "";

        this.genres = {
            doc: !!row[2],
            romance: !!row[3],
            sciFi: !!row[4],
            comedy: !!row[5],
            crime: !!row[6],
            drama: !!row[7],
            horror: !!row[8],
            thriller: !!row[9],
            action: !!row[10],
            fantasy: !!row[11],
            animation: !!row[12],
            dtw: !!row[13],
        };
    }

    _getGenres() {
        const keys = Object.keys(this.genres);
        return keys.filter(genreName => !!this.genres[genreName]);
    }
}

export default FilmEntry;
