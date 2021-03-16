import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import ClubDetails from './Component/ClubDetails/ClubDetails';
import NoMatch from './Component/NoMatch/NoMatch';
import './Responsive.css';
import Clubs from './Component/Clubs/Clubs';

function App() {
  const [clubs, setClubs] = useState([]);
  
  useEffect(() => {
      fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League")
      .then(res => res.json())
      .then(data => setClubs(data.teams))
  }, []);
    
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <div className="teamDiv">
              {
                clubs.map(cl => <Clubs club={cl}></Clubs>)
              }
            </div>
          </Route>
          <Route path="/clubdetails/:idTeam">
              <ClubDetails></ClubDetails>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
