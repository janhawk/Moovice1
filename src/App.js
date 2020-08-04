import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch 
} from 'react-router-dom';
import MyList from './components/MyList';
import PopularBattle from './components/PopularBattle';
import DiscoverBattle from './components/DiscoverBattle';
import Popular from './components/Popular';
import Discover from './components/Discover';
//import Card from './components/movie/Card';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav>
            <ul>
              <li><Link to="/">This week</Link></li>
              <li><Link to="/Battle/">Battle</Link></li>
              <li><Link to="/Popular/">Popular</Link></li>
              <li><Link to="/PopularBattle/">Popular battle</Link></li>
              <li><Link to="/MyList/">My List</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/Battle/">
              <DiscoverBattle />
            </Route>
            <Route path="/Popular/">
              <Popular />
            </Route>
            <Route path="/PopularBattle/">
              <PopularBattle />
            </Route>
            <Route path="/MyList">
              <MyList />
            </Route>
            <Route path="/">
              <Discover />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
