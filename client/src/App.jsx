import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
// import Header from "./"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/warehouse" />
          <Route exact path="/inventory" />
          <Route path="/warehouse/:id" />
          <Route path="/inventory/:id" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
