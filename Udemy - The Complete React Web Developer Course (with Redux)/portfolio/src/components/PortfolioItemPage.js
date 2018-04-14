import React from "react";

const PortfolioItem = props => (
  <div>
    <h1>A thing I've done.</h1>
    <div>This page is for the item with the id for {props.match.params.id}</div>
  </div>
);

export default PortfolioItem;
