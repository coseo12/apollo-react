import { getMovies, getMovie } from '../data/db';

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getMovie(id),
  },
};

export { resolvers };
