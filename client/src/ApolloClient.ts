import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Create Apollo Client instance
const client = new ApolloClient({
  uri: 'http://localhost:5174/graphql', // Make sure this matches your backend GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
