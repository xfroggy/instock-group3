import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/header.jsx";

import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/warehouse/WarehouseDetails";
import ItemDetail from "./components/inventories/Inventories";
import WarehousePage from "./pages/Warehouse/WarehousePage";
import InventoryPage from "./pages/Inventory/InventoryPage";
import WarehouseEdit from "./components/warehouse/WarehouseEdit";
import WarehouseAdd from "./components/warehouse/WarehouseAdd";
import EditInventory from "./components/editInventories/EditInventories";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Redirect to="/warehouses" />
          </Route>
          <Route exact path="/warehouses" component={WarehousePage} />
          <Route exact path="/inventory" component={InventoryPage} />
          <Route exact path="/warehouses/edit/:id" component={WarehouseEdit} />
          <Route exact path="/warehouses/add" component={WarehouseAdd} />
          <Route path="/warehouses/:id" component={WarehouseDetails} />
          <Route exact path="/inventory/:id" component={ItemDetail} />
          <Route exact path="/newitem" component={EditInventory} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
