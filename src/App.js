import { Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/navigation";
import Products from "./components/product/products";
import Cart from "./components/cart/cart";
import Account from "./components/account/account";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NotFound from "./components/not-found";

function App() {
  return (
    <div className="App container-fluid">
      <Navigation></Navigation>
      <Switch>
        <Route path="e-commerce/cart" render={(props) => <Cart></Cart>}></Route>
        <Route
          path="e-commerce/account"
          render={(props) => <Account></Account>}
        ></Route>
        <Route
          path="e-commerce/not-found"
          render={(props) => <NotFound></NotFound>}
        ></Route>
        <Route
          path="e-commerce/products"
          render={(props) => <Products></Products>}
        ></Route>
        <Route path="/" exact render={(props) => <Products></Products>}></Route>
        <Redirect to="e-commerce/not-found"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
