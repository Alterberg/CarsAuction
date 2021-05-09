import React from "react";
import { connect } from "react-redux";
import * as carActions from "../../redux/actions/carActions";
import * as sellerActions from "../../redux/actions/sellerActions";
import PropTypes from "prop-types";
import CarList from "./CarList";
import { bindActionCreators } from "redux";

class CarsPage extends React.Component {
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

    render() {
        return (
           <>
                <h2>Cars</h2>
                <CarList cars={this.props.cars} />
            </>
        );
    }
}

CarsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    cars: PropTypes.array.isRequired,
    sellers: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return {
        cars: state.sellers.length === 0 ? [] : state.cars.map(car => {
            return {
                ...car,
                sellerName: state.sellers.find(a => a.id === car.sellerId).name
            }
        }),
        sellers: state.sellers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCars: bindActionCreators(carActions.loadCars, dispatch),
            loadSellers: bindActionCreators(sellerActions.loadSellers, dispatch)
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsPage);