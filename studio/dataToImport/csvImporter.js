const csv = require('csv-parser');
const fs = require('fs');
const films = [];
const ndjson = require('ndjson');

const { ratings } = require('../schemas/helpers');

const nonNumericChars = /[^a-z0-9+]+/gi;

function createDocId(title, year) {
    const formattedTitle = title.toLowerCase().replace(nonNumericChars, "_");
    return `${year.replace(nonNumericChars, "")}_${formattedTitle}`;
}

function parseReviewRating(rating) {
    if (rating == '🙅') return 'cancelled';
    if (rating == '😐') return 'okay';
    if (rating == '👍') return 'good';
    if (rating == '👍👍') return 'very good';
    if (rating == '🥔🥔🥔') return 'top potatoe';
    return null;
}

function parseRow(row) {
    return {
        title: row.Title,
        year: row.Year,
        actors: row['Notable Actors'],
        director: row.Director,
        description: row.Description,
        documentary: !!row.Doc,
        romance: !!row.Romance,
        sci_fi: !!row['Sci Fi'],
        comedy: !!row.Comedy,
        crime: !!row.Crime,
        drama: !!row.Drama,
        horror: !!row.Horror,
        thriller: !!row.Thriller,
        action: !!row.Action,
        fantasy: !!row.Fantasy,
        animation: !!row.Animation,
        dtw: !!row.DTW,
        review_rating: parseReviewRating(row['Review Rating']),
        review_comment: row['Review Comment'],

        _type: 'film',
        _id: createDocId(row.Title, row.Year),
    };
}

fs.createReadStream('./mankypotatoes.csv')
    .pipe(csv())
    .on('data', row => {
        films.push(parseRow(row));
    })
    .on('end', () => {
        writeSchemaNdjson(films);
    });

function writeSchemaNdjson(films) {
    const OUTPUT_FILENAME = './parsed-schema.ndjson';
    fs.writeFileSync(OUTPUT_FILENAME, '', 'utf-8');

    films.map(film => {
        fs.appendFileSync(OUTPUT_FILENAME, JSON.stringify(film) + '\n', 'utf-8');
    });
}
