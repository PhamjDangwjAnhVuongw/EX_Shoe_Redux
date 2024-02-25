import React, { Component } from "react";
import Item from "./Item";
import { connect } from "react-redux";

class List extends Component {
  renderListShoes = () => {
    return this.props.shoesArr.map((item) => {
      return <Item key={item.id} data={item} />;
    });
  };
  render() {
    return <div className="row col-7">{this.renderListShoes()}</div>;
  }
}

let mapStateToProps = (state) => {
  return {
    shoesArr: state.shoesArr,
  };
};

export default connect(mapStateToProps)(List);
// Câu lệnh redux: npm i redux react-redux
