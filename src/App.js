import './App.css';
import Navbutton from './navbutton.js';
import Header from './header';
import ExploreButtons from './exploreButton';

function App() {
  return (
    <div className="App">
      <div><Navbutton /></div>
    
      <div><Header /></div>

      <div class="flex-btns">
        <ExploreButtons txt="Traditional Budgeting" />
        <ExploreButtons txt="50/30/20 Plan" />
        <ExploreButtons txt="80/20 Plan" />
      </div>

    </div>
  );
}

export default App;
