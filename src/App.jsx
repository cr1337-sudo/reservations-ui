import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import LogReg from "./pages/logReg/LogReg";
import Reservations from "./pages/reservarions/Reservations";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <LogReg />
        </Route>
        <Route path="/reservations">
          <Reservations />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
