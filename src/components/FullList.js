import { Link } from "react-router-dom";
import React from "react";

import cars from "../api/cars";

class FullList extends React.Component {
  render() {
    return (
      <div>
        {cars.map((item, index) => {
          return (
            <div key={index}>
              <Link to={`/about/${index + 1}`}>
                {item.model}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FullList;
