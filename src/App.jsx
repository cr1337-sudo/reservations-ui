import "./App.css";
import {useContext} from "react";
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
import {AuthContext} from "./context/authContext/AuthContext"

function App() {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <LogReg />}</Route>
        {user ? (
          <>
            <Sidebar />
            <div className="cont">
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
