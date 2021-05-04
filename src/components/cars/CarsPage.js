import React from "react";
import { connect } from "react-redux";
import * as carActions from "../../redux/actions/carActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CarsPage extends React.Component {
        state = {
            car: {
                model: ""
            }
        };

    handleChange = (event) => {
        const car = { ...this.state.car, model: event.target.value };
        this.setState({ car });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.actions.createCar(this.state.car);
        this.setState({
            car: {
                model: ""
            }
        })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Cars</h2>
                <h2>Add Car</h2>
                <input type="text" onChange={this.handleChange} value={this.state.car.model} />

                <input type="submit" value="Save" />
                {this.props.cars.map((car, index) => (
                    <div key={index}>{car.model}</div>
                ))}
            </form>   
        );
    }
}

CarsPage.propTypes = {
    cars: PropTypes.array.isRequired,
    actions: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        cars: state.cars
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(carActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsPage);