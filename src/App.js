import './App.css';
import Navbutton from './navbutton.js';
import Header from './header';
import ExploreButtons from './exploreButton';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Traditional from './forms/traditional'
import Ftt from './forms/ftt';
import Text from './text.js';
import Et from './forms/et';
import Footer from './footer'

function App() {
  return (
    <Router>
      <div className="App">
        <div><Navbutton /></div>


        <Switch>

          <Route exact path="/">
            <div id="home"><Header /></div>
            <div><Text /></div>
            <h1 className='methods'>Explore Budgeting Methods</h1>
            <div class="flex-btns">
              <ExploreButtons link="/traditional" txt="Traditional Budgeting" />
              <ExploreButtons link="/ftt" txt="50/30/20 Plan" />
              <ExploreButtons link="/et" txt="80/20 Plan" />
              <Footer />
            </div>
          </Route>

          <Route exact path="/traditional">
            <Traditional></Traditional>
          </Route>
          <Route exact path="/ftt">
            <Ftt></Ftt>
          </Route>
          <Route exact path="/et">
            <Et></Et>
          </Route>
        </Switch>


        

        </div>

    </Router>
  );
}

export default App;
