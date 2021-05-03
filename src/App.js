import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navigation from "./components/navigation";
import Products from "./components/product/products";

function App() {
  return (
    <div className="App container-fluid">
      <Navigation></Navigation>
      <Products></Products>
    </div>
  );
}

export default App;
