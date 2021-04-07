import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header.jsx";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" />

          <Route exact path="/warehouses" />

          <Route exact path="/inventory" />
          <Route path="/warehouses/:id" />
          <Route path="/inventory/:id" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
