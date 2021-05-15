import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CarList = ({ cars, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {cars.map(car => {
        return (
          <tr key={car.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://pluralsight.com/courses/" + car.slug}
              >
                Watch
              </a>
            </td>
            <td>
              <Link to={"/car/" + car.slug}>{car.model}</Link>
            </td>
            <td>{car.sellerName}</td>
            <td>{car.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(car)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default CarList;
