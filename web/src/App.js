import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Router, Route, Link } from 'react-router-dom';
import { history } from './_helpers';
import './utils/styles/App.css';
import './utils/styles/components.css';
import { alertActions } from './_actions/alert.actions';
/* routes */
import { PrivateRoute } from './components/PrivateRoute';
import Home from './views/home';
import Login from './views/login';
import Register from './views/register';


   //localStorage.removeItem('user');

   console.log('alertActions: ', alertActions);

class App extends Component {
  constructor(props){
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      console.log('app => history.listen: ',location,' action: ',action);
      dispatch(alertActions.clear());
    });
  }
  componentDidMount = async () => {
  }
  render() {
    console.log('state - redux: ');
    return (
          <Router history={history}>
            <div className="App">
              <Header />
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <hr/>
                Learning english...
            </div>
          </Router>
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


const mapStateToProps = state => ({
  alert : state.alert
});
/*
function mapStateToProps(state) {
  const { alert } = state;
  console.log(alert);
  console.log(state);
  return {
    alert
  };
}
*/

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
