import React, { Component } from 'react';
import Locations from './Locations';
import Pizzas from './Pizzas';

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
                    
                />
                <Pizzas
                    clickHandler={this._pizzaClickHandler}
                    pizzaHeading={this.state.pizzaHeading}
                    pizzas={this.state.pizzas}
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
            toppingsHeading: 'TOPPINGS:',
            toppings: toppings
        });
    }
}

export default App;
