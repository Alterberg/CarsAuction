import React from "react";
import { connect } from "react-redux";
import * as carActions from "../../redux/actions/carActions";
import * as sellerActions from "../../redux/actions/sellerActions";
import PropTypes from "prop-types";
import CarList from "../cars/CarList";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class SearchPage extends React.Component {

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

    findCars() {
        const params = new URLSearchParams(this.props.location.search);
        const query = params.get("query");
        const type = params.get("type");
        const { cars } = this.props;
        console.log(cars);
        if (query) {
            switch (type) {
                case "Model":
                    return cars.filter(car => car.model.toLowerCase().includes(query.toLowerCase()));
                case "Brand":
                    return cars.filter(car => car.sellerName.toLowerCase().includes(query.toLowerCase()));
            }
        }
        else {
            return cars;
        }
    }

    render() {
        const params = new URLSearchParams(this.props.location.search);
        const query = params.get("query");
        const type = params.get("type");
        const foundResults = this.findCars()
        return (
            <>
                <h2>Search</h2>
                <h4>You are trying to find: {"\"" + query + "\" " + type.toLowerCase()}</h4>
                {this.props.loading ?
                    <Spinner /> : foundResults.length > 0 ? (
                        <CarList cars={foundResults} />
                    ) : (<h2>Uuups... Nothing found(((</h2>)}
            </>
        );
    }
}

SearchPage.propTypes = {
    actions: PropTypes.object.isRequired,
    cars: PropTypes.array.isRequired,
    sellers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
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
        loading: state.apiCallsInProgress > 0,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCars: bindActionCreators(carActions.loadCars, dispatch),
            loadSellers: bindActionCreators(sellerActions.loadSellers, dispatch),
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);