import React from 'react';

const Pizzas = (props) => {
    
    let pizzas = props.pizzas.map((pizza, i) => {
        let pizzaClass = "button";
        if (pizza.toppings === props.toppings) {
            pizzaClass = "button active-button";
        }
        return (
            <div
                key={ i }
                className={ pizzaClass }
                onClick={ () => props.clickHandler(i, pizza.toppings) }
            >
                { pizza.name }
                <br />
                <span>({ pizza.type })</span>
            </div>
        );
    });

    return (
        <React.Fragment>

            <div className="option-select">
                { props.pizzaHeading }
            </div>

            <div className="button-list">
                { pizzas }
            </div>

        </React.Fragment>
    );
}

export default Pizzas;