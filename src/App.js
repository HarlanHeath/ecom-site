import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Details from "./components/Details";
import ProductList from "./components/ProductList";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <ProductList></ProductList>
        <Details></Details>
        <Cart></Cart>
        <Default></Default>
      </React.Fragment>
    );
  }
}
