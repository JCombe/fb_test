import './App.css';
import "./Components/NavBar.js";
import NavBar from './Components/NavBar.js';
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom"
import Home from "./Pages/Home.js"
import Profile from "./Pages/Profile.js"
import SideBar from './SideBar.js';
import Feed from "./Feed.js"
import Widgets from './Components/Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (

    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <>
            <NavBar />

            <div className="app__body">
              <SideBar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}
    </div>
  );
};

export default App;
