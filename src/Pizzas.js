import React from 'react';

const Pizzas = (props) => {
    
    let pizzas = props.pizzas.map((pizza, i) => {
        return (
            <div
                key={ i }
                className="button"
                onClick={ () => props.clickHandler(i, pizza.toppings) }
            >
                {pizza.name}
                <br />
                {pizza.type}
            </div>
        );
    })
    return (
        <React.Fragment>

            <div className="option-select">
                SELECT A PIZZA
            </div>

            <div className="button-list">
                { pizzas }
            </div>

        </React.Fragment>
    );
}

export default Pizzas;