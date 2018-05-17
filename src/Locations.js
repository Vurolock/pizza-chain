import React from 'react';

const Locations = (props) => {

    return (
        <React.Fragment>

            <div className="location-select">
                SELECT A LOCATION
            </div>

            <div className="location-list">

                <div className="location">
                    Slice of Sicily<br />
                    New York City, NY
                </div>

                <div className="location">
                    Neapolitan Nibbles<br />
                    Chicago, IL
                </div>

                <div className="location">
                    Ruminating Rome<br />
                    San Francisco, CA
                </div>

            </div>

        </React.Fragment>
    );
}

export default Locations;