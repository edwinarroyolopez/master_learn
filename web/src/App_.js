import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './_reducers';
import './utils/styles/App.css';
import './utils/styles/components.css';
/* routes */
import { PrivateRoute } from './components/PrivateRoute';
import Home from './views/home';
import Login from './views/login';
import Register from './views/register';

const history = createBrowserHistory();

const client = new ApolloClient({
  uri:'http://localhost:7000/graphql'
})
  //  localStorage.removeItem('user');
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

class App extends Component {
  constructor(props){
    super(props);
    history.listen((location, action) => {
      console.log('app => history.listen: ',location,' action: ',action);

    });

  }

  state = { initialRouteName: null };
  xx_login_xx = (token) => {
    let user = null;
    switch (token) {
      case 1:
        return {uid:'123logged'};
      default:
    }
    return user;
  }

  initialRouter = async () => {
    let user = await this.xx_login_xx(1);
    console.log('app - user: ',user);
    if(user){
      return Home;
    } else {
      return Login;
    }
  }

  componentDidMount = async () => {
    const initialRouteName = await this.initialRouter();
    this.setState({initialRouteName});
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router history={history}>
            <div className="App">
              <Header />
                // <Route exact path="/" component={this.state.initialRouteName} />
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <hr/>
                Learning english...

            </div>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}

const Header = () => (
  <ul className="nav">
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
       <Link to="/login" >Login</Link>
     </li>
     <li>
       <Link to="/register" >Register</Link>
     </li>
  </ul>
);

export default App;
