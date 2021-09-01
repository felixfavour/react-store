import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products/index";
import Details from "../pages/Products/Details";

export default function Default(props) {
  return (
    <BrowserRouter>
      <div className="default-layout">
        <Header />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/products/:productId" component={Details} />
          <Route path="/products" component={Products} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}