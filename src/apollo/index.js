import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLinked: () => false,
    },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        cache.writeData({
          id: `Movie:${id}`,
          data: {
            isLiked: true,
            medium_cover_image: 'lalalalal',
          },
        });
      },
    },
  },
});

export default client;
