import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages";
import SigninPage from "./components/pages/signin";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/signin' component={SigninPage}/>
    </Switch>
    </Router>
  );
}

export default App;
