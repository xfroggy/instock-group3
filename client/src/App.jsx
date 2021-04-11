import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header.jsx";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/warehouse/WarehouseDetails";
import ItemDetail from "./components/inventories/Inventories";
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
          <Route exact path="/inventory/:id" component={ItemDetail} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
