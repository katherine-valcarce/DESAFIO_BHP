import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Calculator from "./components/Calculator";
import Checklist from "./components/Checklist";

import './App.css';

const App = () => {

return (
  <Router>
    <Switch>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/menu">
        <Menu/>
      </Route>
      <Route path="/calculator">
        <Calculator/>
      </Route>
      <Route path="/checklist">
        <Checklist/>
      </Route>
    </Switch>
  </Router>
);
};

export default App;
