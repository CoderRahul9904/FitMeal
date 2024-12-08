import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, } from '@apollo/client';
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './redux/store/index.ts';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/',
    credentials: 'include', // Ensures cookies are sent
  }),
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
    
  </StrictMode>,
)
