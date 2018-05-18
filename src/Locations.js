import React from 'react';

// Future franchises can be added to this array in order to easily expand the website
const franchises = [
    {
        'name': 'Slice of Sicily',
        'city': 'New York City, NY',
        'pizzas': [
            {
                'type': 'Cheese',
                'name': 'Palermo',
                'toppings': ['No Toppings   ']
            },
            {
                'type': 'Veggie', 
                'name': 'Marsala',
                'toppings': ['Mushrooms', 'Artichoke Hearts', 'Red Peppers']
            },
            {
                'type': 'Meat',
                'name': 'Catania',
                'toppings': ['Pepperoni', 'Sausage', 'Chicken']
            }
        ]
    },
    {
        'name': 'Neapolitan Nibbles',
        'city': 'Chicago, IL',
        'pizzas': [
            {
                'type': 'Cheese',
                'name': 'Soccavo',
                'toppings': ['No Toppings   ']
            },
            {
                'type': 'Veggie', 
                'name': 'Posillipo',
                'toppings': ['Mushrooms', 'Olives', 'Basil']
            },
            {
                'type': 'Meat',
                'name': 'Vomero',
                'toppings': ['Pepperoni', 'Bacon', 'Salami']
            }
        ]
    },
    {
        'name': 'Ruminating Rome',
        'city': 'San Francisco, CA',
        'pizzas': [
            {
                'type': 'Cheese',
                'name': 'Labaro',
                'toppings': ['No Toppings   ']
            },
            {
                'type': 'Veggie',
                'name': 'Cinecitta',
                'toppings': ['Mushrooms', 'Broccolini', 'Green Peppers', 'Oregano']
            },
            {
                'type': 'Meat',
                'name': 'Mostacciano',
                'toppings': ['Pepperoni', 'Proscuitto', 'Capicola']
            }
        ]
    }
];

const Locations = (props) => {
    // Future franchises can be added to this array in order to easily expand the website
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
                ({ location.city })
            </div>
        );
    })
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