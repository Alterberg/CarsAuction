import React from "react";
import { connect } from "react-redux";
import * as carActions from "../../redux/actions/carActions";
import * as sellerActions from "../../redux/actions/sellerActions";
import PropTypes from "prop-types";
import CarList from "./CarList";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router";
import Spinner from "../common/Spinner";
import { deleteCar } from "../../api/carApi";
import { toast } from "react-toastify";

class CarsPage extends React.Component {
    state = {
        redirectToAddCarPage: false
    };
    
    componentDidMount() {
        const { sellers, cars, actions } = this.props;

        if (cars.length === 0) {
                actions.loadCars().catch(error => {
                alert("loading cars list failed with error: " + error);
            });
        }
        
        if (sellers.length === 0) {
                actions.loadSellers().catch(error => {
                alert("loading sellers list failed with error: " + error);
            });
        }
    }

    handleDeleteCar = car => {
        toast.success("Car successfully deleted");
        this.props.actions.deleteCar(car)
            .catch(error => {
                toast.error("Error occurred. " + error.message, { autoClose: false })
            });
    }

    render() {
        return (
            <>
                {this.state.redirectToAddCarPage && <Redirect to="/car"/>}
                <h2>Cars</h2>
                <button
                    style={{ marginBottom: 20 }}
                    className="btn btn-primary add-car"
                    onClick={() => this.setState({redirectToAddCarPage: true})}

                >
                    Add Car
                </button>
                {this.props.loading ?
                    <Spinner /> : (
                    <CarList onDeleteClick={this.handleDeleteCar} cars={this.props.cars} />
                )}
            </>
        );
    }
}

CarsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    cars: PropTypes.array.isRequired,
    sellers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        cars: state.sellers.length === 0 ? [] : state.cars.map(car => {
            return {
                ...car,
                sellerName: state.sellers.find(a => a.id === car.sellerId).name
            }
        }),
        sellers: state.sellers,
        loading: state.apiCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCars: bindActionCreators(carActions.loadCars, dispatch),
            loadSellers: bindActionCreators(sellerActions.loadSellers, dispatch),
            deleteCar: bindActionCreators(carActions.deleteCar, dispatch),
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsPage);