import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header.jsx";
import WarehouseDetails from "./components/warehouse/WarehouseDetails";
import WarehousePage from "./pages/Warehouse/WarehousePage";
import InventoryPage from "./pages/Inventory/InventoryPage";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/warehouses" component={WarehousePage} />
          <Route exact path="/inventory" component={InventoryPage} />
          <Route path="/warehouses/:id" component={WarehouseDetails} />
          <Route path="/inventory/:id" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
