import React from "react";
//learning how to use List
function ListComponent() {
  const cars = ["Tesla", "Audi", "BMW", "Mec"];
  const listItems = cars.map((car) => {
    return <li key = {car}>{car}</li>;
  });
  return <ol>{listItems}</ol>;
}
export default ListComponent;
