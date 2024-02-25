//Xử lý giao diện và CSS
import React, { Component } from "react";
import List from "./List";
import Cart from "./Cart";
import Detail from "./Detail";

export default class Ex_Shoes_Redux extends Component {
  render() {
    return (
      <div className="row w-100">
        <Cart />
        <List />
        <Detail />
      </div>
    );
  }
}
