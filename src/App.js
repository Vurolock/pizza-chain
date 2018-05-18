import React, { Component } from 'react';
import Locations from './Locations';
import Pizzas from './Pizzas';
import Toppings from './Toppings';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: null,
            pizzaHeading: '',
            pizzas: [],
            toppingsHeading: '',
            toppings: []
        }
    }
    render() {
        return (
            <React.Fragment>
                <Locations
                    clickHandler={this._locationClickHandler}
                    location={this.state.location}
                />
                <Pizzas
                    clickHandler={this._pizzaClickHandler}
                    pizzaHeading={this.state.pizzaHeading}
                    pizzas={this.state.pizzas}
                    toppings={this.state.toppings}
                />
                <Toppings
                    toppingsHeading={this.state.toppingsHeading}
                    toppings={this.state.toppings}
                />
            </React.Fragment>
        );
    }

    _locationClickHandler = (location, pizzas) => {
        this.setState({
            location: location,
            pizzaHeading: 'SELECT A PIZZA',
            pizzas: pizzas,
            toppingsHeading: '',
            toppings: []
        });
    }

    _pizzaClickHandler = (pizza, toppings) => {
        this.setState({
            toppingsHeading: 'Toppings:',
            toppings: toppings
        });
    }
}

export default App;
