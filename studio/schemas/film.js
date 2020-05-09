const GENRES = [
    'DTW',
    'Documentary',
    'Romance',
    'Sci Fi',
    'Comedy',
    'Crime',
    'Drama',
    'Horror',
    'Thriller',
    'Action',
    'Fantasy',
    'Animation',
];
const REVIEW_RATINGS = [
    'cancelled',
    'okay',
    'good',
    'very good',
    'top potatoe',
];

function encodeTitle(title) {
    return title.replace(" ", "_").toLowerCase();
}

function createGenreSchema(genreName) {
    return {
        title: genreName,
        name: encodeTitle(genreName),
        type: "boolean",
        fieldset: 'genres',
        options: {
            layout: "checkbox",
        },
    };
}

export default {
    title: "Film",
    name: "film",
    type: "document",
    fieldsets: [
        {
            title: "Genres",
            name: "genres",
            options: {
                columns: 2,
            },
        },
        {
            title: "Review",
            name: "review",
        },
    ],
    fields: [
        {
            title: 'Title',
            name: "title",
            type: "string",
        },
        {
            title: 'Link',
            name: "link",
            type: "url",
        },
        {
            title: 'Year',
            name: 'year',
            type: 'string',
        },
        {
            title: 'Director(s)',
            name: 'director',
            type: 'string',
        },
        {
            title: 'Notable Actors',
            name: 'actors',
            type: 'string',
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string',
        },
        ...GENRES.map(createGenreSchema),
        {
            title: 'Review Rating',
            name: 'review_rating',
            fieldset: "review",
            type: 'string',
            options: {
                list: REVIEW_RATINGS,
                layout: 'dropdown',
            },
        },
        {
            title: 'Review Comments',
            name: 'review_comments',
            fieldset: "review",
            type: 'string',
        },
    ],
};
