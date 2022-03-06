import './App.css';
import Navbutton from './navbutton.js';
import Header from './header';
import ExploreButtons from './exploreButton';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Traditional from './forms/traditional'

function App() {
  return (
    <Router>
      <div className="App">
        <div><Navbutton /></div>




        <div class="flex-btns">



          <Switch>
            <Route exact path="/">
              <div><Header /></div>
              <h1>Explore Budgeting Methods</h1>

              <ExploreButtons link="/traditional" txt="Traditional Budgeting" />
              <ExploreButtons link="/ftt" txt="50/30/20 Plan" />
              <ExploreButtons link="/et" txt="80/20 Plan" />
            </Route>

            <Route exact path="/traditional">
              <Traditional></Traditional>
            </Route>
          </Switch>

        </div>

      </div>


    </Router>
  );
}

export default App;
