import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header.jsx";
import WarehouseDetails from "./components/warehouse/WarehouseDetails";
import WarehousePage from "./pages/Warehouse/WarehousePage";
import WarehouseEdit from "./components/warehouse/WarehouseEdit";
import WarehouseAdd from "./components/warehouse/WarehouseAdd";

function App() {
  return (
    <div>
      <Router>

        <Header />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/warehouses" component={WarehousePage} />
          <Route exact path="/warehouses/edit/:id" component={WarehouseEdit} />
          <Route exact path="/warehouses/add" component={WarehouseAdd} />
          <Route exact path="/inventory" />
          <Route path="/warehouses/:id" component={WarehouseDetails} />
          <Route path="/inventory/:id" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
