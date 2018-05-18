import React from 'react';

const Toppings = (props) => {
    
    let toppings = props.toppings.map((topping, i) => {
        return (
            <li
                key={ i }
            >
            { topping }
            </li>
        );
    });

    return (
        <React.Fragment>

            <div className="option-select">
                { props.toppingsHeading }
            </div>

            <ul className="toppings-list">
                { toppings }
            </ul>

        </React.Fragment>
    );
}

export default Toppings;