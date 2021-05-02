import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import SignInPage from "./pages/SignInPage/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* The React route <Route></Route> from React-router-dom takes in a path that user puts in and redirects it to the
            desired component*/}
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/home" component={HomePage} exact></Route>
        <Route path="/products" component={ProductPage} exact></Route>
        <Route
          exact
          path="/products/:id"
          component={ProductDetailsPage}
        ></Route>
        <Route path="/cart/:id?" component={CartPage}></Route>
        <Route path="/signin" component={SignInPage}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
