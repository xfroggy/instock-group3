import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import WarehousePage from "./pages/WarehousePage";

function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        <Switch>
          {/* <Route exact path="/" /> */}
          <Route exact path="/" component={WarehousePage} />
          {/* <Route exact path="/inventory" component={InventoryPage} /> */}
          {/* <Route path="/warehouse/:id" component={WarehouseDetail} />
          <Route path="/inventory/:id" component={InventoryDetail} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
