import React from 'react';
import './Destination.css'
import Map from './Map';
const Destination = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="destination">
                        <div className="search">
                            <p>Pick From</p>
                            <select name="destination" id="">
                                <option value="mirpur">Mirpur</option>
                                <option value="Gulisthan">Gulisthan</option>
                            </select>
                            <hr></hr>
                            <p>Pick To</p>
                            <select name="destination" id="">
                                <option value="mirpur">Dhanmondi</option>
                                <option value="Gulisthan">Uttara</option>
                            </select>
                            <button className="search-btn">Search</button>
                        </div>
                        <div className="location">

                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default Destination;