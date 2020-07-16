import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WarriorCreator from "./components/WarriorCreator";
import MyGang from './components/MyGang';
import WarriorList from './components/WarriorList';
import './App.css';


function App() {

  const URL = '';

  const [warriorList, setWarriorList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = React.useState('');

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setWarriorList(data);
      })
      .catch((e) => {
        setLoading(false);
        setError('fetch failed');
      });
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create New Warrior</Link>
            </li>
            <li>
              <Link to="/gang">My Gang</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create">
            <WarriorCreator />
          </Route>
          <Route path="/gang">
            <MyGang />
          </Route>
          <Route path="/">
            <WarriorList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
