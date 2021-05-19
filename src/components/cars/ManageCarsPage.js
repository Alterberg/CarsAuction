import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {loadCars, saveCar} from "../../redux/actions/carActions";
import {loadSellers} from "../../redux/actions/sellerActions";
import PropTypes from "prop-types";
import CarForm from "./CarForm";
import { newCar } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageCarsPage({ sellers, cars, loadCars, loadSellers, saveCar, history, ...props }) {
    const [car, setCar] = useState({...props.car});
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);
    
    useEffect(() => {
        if (cars.length === 0) {
            loadCars().catch(error => {
                alert("loading cars list failed with error: " + error);
            });
        } else {
            setCar({ ...props.car });
        }
        
        if (sellers.length === 0) {
            loadSellers().catch(error => {
                alert("loading sellers list failed with error: " + error);
            });
        }
    }, [props.car]);

    function handleChange(event) {
        const { name, value } = event.target;

        setCar(prevCar => ({
            ...prevCar,
            [name]: name === "sellerId" ? parseInt(value, 10) : value
        }));
    }

    function isFormValid() {
        const { model, sellerId, category } = car;
        const errors = {};

        if (!model) errors.model = "Model is required.";
        if (!sellerId) errors.seller = "Seller is required.";
        if (!category) errors.category = "Category is required.";

        setErrors(errors);
        
        return Object.keys(errors).length === 0;
    }

    function handleSave(event) {
        event.preventDefault();
        if (!isFormValid()) return;
        setSaving(true);
        saveCar(car)
            .then(() => {
                toast.success("Car successfully saved");
                history.push("/cars");
            })
            .catch(error => {
                setSaving(false);
                setErrors({ onSave: error.message });
            });
    }
    
    return sellers.length === 0 || cars.length === 0 ? (<Spinner />) : (
        <CarForm car={car} errors={errors} sellers={sellers} onChange={handleChange} onSave={handleSave} saving={saving} />
    );
}

ManageCarsPage.propTypes = {
    car: PropTypes.object.isRequired,
    cars: PropTypes.array.isRequired,
    sellers: PropTypes.array.isRequired,
    loadCars: PropTypes.func.isRequired,
    loadSellers: PropTypes.func.isRequired,
    saveCar: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

function getCarBySlug(cars, slug) {
    return cars.find(car => car.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
    const slug = ownProps.match.params.slug;
    const car = slug && state.cars.length > 0 ? getCarBySlug(state.cars, slug) : newCar;
    return {
        car,
        cars: state.cars,
        sellers: state.sellers
    };
}

const mapDispatchToProps = {
    loadCars,
    loadSellers,
    saveCar
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCarsPage);