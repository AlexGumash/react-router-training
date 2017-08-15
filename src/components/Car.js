import React from "react";
import cars from "../api/cars";
import { Link } from "react-router-dom";

class Car extends React.Component {
  render() {
    const car = cars[parseInt(this.props.match.params.number - 1, 10)];
    console.log(car);
    return (
      <div>
        <h2>
          {car.model}
        </h2>
        <div>
          HP - {car.hp}
        </div>
        <Link to="/about">Back</Link>
      </div>
    );
  }
}

export default Car;
