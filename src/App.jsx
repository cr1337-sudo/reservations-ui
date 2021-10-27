import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/Home";
import LogReg from "./pages/logReg/LogReg";
import Reservations from "./pages/reservations/Reservations";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <LogReg />}</Route>
        {user ? (
          <>
            <Sidebar />
            <div class="cont">
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/reservations">
                <Reservations />
              </Route>
            </div>
          </>
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
}

export default App;
