/*
2: "Doc"
3: "Romance"
4: "Sci Fi"
5: "Comedy"
6: "Drama"
7: "Horror"
8: "Thriller"
9: "Action"
10: "Fantasy"
11: "Animation"
12: "DTW"
* */

class FilmEntry {
  constructor(row, isFirstRow) {
    this.title = row[0];
    this.year = row[1] || "";
    this.director = row[14] || "";
    this.reviewRating = row[16] || "";
    this.reviewComment = row[17] || "";

    this.genres = {
      doc: !!row[2],
      romance: !!row[3],
      sciFi: !!row[4],
      comedy: !!row[5],
      drama: !!row[6],
      horror: !!row[7],
      thriller: !!row[8],
      action: !!row[9],
      fantasy: !!row[10],
      animation: !!row[11],
      dtw: !!row[12],
    }

    this.firstRow = !!isFirstRow;
  }

  _getGenres() {
    const keys = Object.keys(this.genres);
    return keys.filter(genreName => !!this.genres[genreName]);
  }
}

export default FilmEntry;
