import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header.jsx";
import WarehouseDetails from "./components/warehouse/WarehouseDetails";
import ItemDetail from "./components/inventories/Inventories";
import WarehousePage from "./pages/Warehouse/WarehousePage";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/warehouses" component={WarehousePage} />
          <Route exact path="/inventory" />
          <Route path="/warehouses/:id" component={WarehouseDetails} />
          <Route exact path="/inventory/:id" component={ItemDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
