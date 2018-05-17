import React from 'react';

// Future franchises can be added to this array in order to easily expand the website
const franchises = [
    {
        'name': 'Slice of Sicily',
        'city': 'New York City, NY',
        'pizzas': {
            'cheese': {
                'name': 'Palermo',
                'toppings': ['none']
            },
            'veggie': {
                'name': 'Marsala',
                'toppings': ['Mushrooms', 'Artichoke Hearts', 'Red Peppers']
            },
            'meat': {
                'name': 'Catania',
                'toppings': ['Pepperoni', 'Sausage', 'Chicken']
            }
        }
    },
    {
        'name': 'Neapolitan Nibbles',
        'city': 'Chicago, IL',
        'pizzas': {
            'cheese': {
                'name': 'Soccavo',
                'toppings': ['none']
            },
            'veggie': {
                'name': 'Posillipo',
                'toppings': ['Mushrooms', 'Olives', 'Basil']
            },
            'meat': {
                'name': 'Vomero',
                'toppings': ['Pepperoni', 'Bacon', 'Salami']
            }
        }
    },
    {
        'name': 'Ruminating Rome',
        'city': 'San Francisco, CA',
        'pizzas': {
            'cheese': {
                'name': 'Labaro',
                'toppings': ['none']
            },
            'veggie': {
                'name': 'Cinecitta',
                'toppings': ['Mushrooms', 'Broccolini', 'Green Peppers', 'Oregano']
            },
            'meat': {
                'name': 'Mostacciano',
                'toppings': ['Pepperoni', 'Proscuitto', 'Capicola']
            }
        }
    }
];

const Locations = (props) => {
    let locations = franchises.map((location, i) => {
        return (
            <div
                key={ i }
                className="location"
                onClick={ () => props.clickHandler(i) }
            >
                {location.name}
                <br />
                {location.city}
            </div>
        );
    })
    return (
        <React.Fragment>

            <div className="location-select">
                SELECT A LOCATION
            </div>

            <div className="location-list">
                { locations }
            </div>

        </React.Fragment>
    );
}

export default Locations;