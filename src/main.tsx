import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import client from './graphql/apolloClient.ts';
import { ApolloProvider } from '@apollo/client';
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import store from './redux/store/index.ts';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </StrictMode>,
)
