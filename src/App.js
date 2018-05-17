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
            <Locations />
        );
    }
}

export default App;
