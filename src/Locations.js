import React from 'react';
const franchises = require('./franchises.js');

const Locations = (props) => {

    let locations = franchises.map((location, i) => {
        let locationClass = "button";
        if (i === props.location) {
            locationClass = "button active-button";
        }
        return (
            <div
                key={ i }
                className={ locationClass }
                onClick={ () => props.clickHandler(i, location.pizzas) }
            >
                { location.name }
                <br />
                <span>({ location.city })</span>
            </div>
        );
    });
    
    return (
        <React.Fragment>

            <div className="option-select">
                SELECT A LOCATION
            </div>

            <div className="button-list">
                { locations }
            </div>

        </React.Fragment>
    );
}

export default Locations;