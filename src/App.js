import React, { Component } from 'react';
import Locations from './Locations';
import Pizzas from './Pizzas';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            pizzas: [],
            toppings: []
        }
    }
    render() {
        return (
            <React.Fragment>
                <Locations
                    clickHandler={this._locationClickHandler}
                />
                <Pizzas
                    clickHandler={this._pizzaClickHandler}
                    pizzas={this.state.pizzas}
                />
            </React.Fragment>
        );
    }

    _locationClickHandler = (location, pizzas) => {
        this.setState({
            location: location,
            pizzas: pizzas,
            toppings: []
        });
    }

    _pizzaClickHandler = (pizza, toppings) => {
        this.setState({
            toppings: toppings
        });
    }
}

export default App;
