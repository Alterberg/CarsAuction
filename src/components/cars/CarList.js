import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CarList = ({ cars, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Seller</th>
        <th>Category</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {cars.map(car => {
        return (
          <tr key={car.id}>
            <td>
              <Link to={"/car/" + car.slug}>{car.model}</Link>
            </td>
            <td>{car.sellerName}</td>
            <td>{car.category}</td>
            {onDeleteClick && (
              <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(car)}
              >
                Delete
              </button>
            </td>
            )}
          </tr>
        );
      })}
    </tbody>
  </table>
);

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func,
};

export default CarList;
