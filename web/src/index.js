import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './_reducers';
import { App } from './App';

const client = new ApolloClient({
  uri:'http://localhost:7000/graphql'
})

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
  , document.getElementById('root'));
