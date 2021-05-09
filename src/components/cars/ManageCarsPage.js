import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as carActions from "../../redux/actions/carActions";
import * as sellerActions from "../../redux/actions/sellerActions";
import PropTypes from "prop-types";
import CarForm from "./CarForm";
import { newCar } from "../../../tools/mockData";

function ManageCarsPage({ sellers, cars, loadCars, loadSellers, ...props }) {
    const [car, setCar] = useState({...props.car});
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        if (cars.length === 0) {
            loadCars().catch(error => {
                alert("loading cars list failed with error: " + error);
            });
        }
        
        if (sellers.length === 0) {
            loadSellers().catch(error => {
                alert("loading sellers list failed with error: " + error);
            });
        }
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;

        setCar(prevCar => ({
        ...prevCar,
        [name]: name === "sellerId" ? parseInt(value, 10) : value
        }));
    }
    
    return (
        <CarForm car={car} errors={errors} sellers={sellers} onChange={handleChange} />
    );
    
}

ManageCarsPage.propTypes = {
    car: PropTypes.object.isRequired,
    cars: PropTypes.array.isRequired,
    sellers: PropTypes.array.isRequired,
    loadCars: PropTypes.func.isRequired,
    loadSellers: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        car: newCar,
        cars: state.cars,
        sellers: state.sellers
    };
}

const mapDispatchToProps = {
    loadCars: carActions.loadCars,
    loadSellers: sellerActions.loadSellers
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCarsPage);