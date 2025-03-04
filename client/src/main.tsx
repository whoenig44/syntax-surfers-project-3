import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.css';
import App from './App.jsx';

//Create Apollo Client instance
const client = new ApolloClient({
  uri: 'http://localhost:5174/graphql', // Make sure this matches your backend GraphQL endpoint
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>   
  </StrictMode>,
);
