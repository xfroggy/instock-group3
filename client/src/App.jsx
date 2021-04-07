import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header.jsx";
//import WarehouseDetails from "./components/warehouse/WarehouseDetails";
import WarehousePage from "./pages/WarehousePage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        {/* <WarehouseDetails /> */}
        <Switch>
          <Route exact path="/" component={WarehousePage} />

          {/* <Route exact path="/warehouses" />

          <Route exact path="/inventory" />
          <Route path="/warehouses/:id" />
          <Route path="/inventory/:id" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
