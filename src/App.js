import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDeatail from "./containers/ProductDeatail";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={ProductListing}></Route>
          <Route
            path="/product/:productId"
            exact
            Component={ProductDeatail}
          ></Route>
          <Route>404 Not Found!!!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
