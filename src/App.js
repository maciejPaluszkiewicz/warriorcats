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


function App() {

  const URL = 'https://run.mocky.io/v3/f27f02e9-14c7-4d4d-a08a-9d37d008ba42';

  const [warriorList, setWarriorList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = React.useState('');

  useEffect(() => {
    setLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setWarriorList(data)
        console.log("data", data);
      })
      .catch((e) => {
        setLoading(false);
        setError('fetch failed');
        console.log("err", e);
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
            <WarriorList warriors={warriorList} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
