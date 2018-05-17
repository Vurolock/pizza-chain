import React, { Component } from 'react';
import Locations from './Locations';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }
    }
    render() {
        return (
            <Locations
                clickHandler={this._locationClickHandler}
            />
        );
    }

    _locationClickHandler = (location) => {
        this.setState({
            location: location
        });
    }
}

export default App;
