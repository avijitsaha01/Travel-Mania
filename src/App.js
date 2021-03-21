import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Destination from './component/Destination/Destination';
import { createContext } from 'react';

const userContext = createContext()

function App() {

  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/destination">
            <Destination></Destination>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
