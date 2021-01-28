import './App.css';
import "./Components/NavBar.js";
import NavBar from './Components/NavBar.js';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Home from "./Pages/Home.js"
import Profile from "./Pages/Profile.js"


function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
