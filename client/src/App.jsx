import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header.jsx";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/warehouse/WarehouseDetails";
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
          <Route path="/inventory/:id" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
