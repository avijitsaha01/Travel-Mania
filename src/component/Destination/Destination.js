import React, { useContext, useEffect, useState } from 'react';
import './Destination.css'
import Map from './Map';
import Data from '../../assets/data'
import { useParams } from 'react-router';

const Destination = () => {

    const { id } = useParams()

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(Data);
    }, []);

    const { name, price, image } = data;

    const [pickTo, setPickTo] = useState({})
    const [pickDate, setPickDate] = useState({})
    const [pickFrom, setPickFrom] = useState({})
    const [searchResult, setSearchResult] = useState(false)

    const handlePickDate = (e) => {
        let { name, value } = e.target;
        const newValue = {
            pickDateStatus: true,
            [name]: value
        }
        setPickDate(newValue);
    }
    const handlePickFrom = (e) => {
        let { name, value } = e.target;
        if (value !== '0') {
            const newValue = {
                pickFromStatus: true,
                [name]: value
            }
            setPickFrom(newValue);
        }
    }
    const handlePickTo = (e) => {
        let { name, value } = e.target;
        if (value !== '0') {
            const newValue = {
                pickToStatus: true,
                [name]: value
            }
            setPickTo(newValue);
        }
    }


    const handleSearch = () => {
        if (pickTo.pickToStatus === true && pickFrom.pickFromStatus === true && pickDate.pickDateStatus === true) {
            setSearchResult(true)
        }
        if(pickTo.pickToStatus === true && pickFrom.pickFromStatus === true && pickDate.pickDateStatus === true){
            setData(data.find(d => d.id == id))
        }
        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="destination">
                        {
                            searchResult === true ?
                                <div className="search">
                                    <ul>
                                        <li>{pickFrom.pickFrom}</li>
                                        <li>To</li>
                                        <li>{pickTo.pickTo}</li>
                                    </ul>
                                    <ul>
                                        <li>Travel in {pickDate.date}</li>
                                    </ul>
                                    {

                                        <div className="search-result">
                                            <img src={image} alt="" />
                                            <p>{name}</p>
                                            <p>{price} taka</p>
                                        </div>

                                    }
                                </div>


                                :
                                <div className="search">
                                    <form action="">
                                        <p>Pick From</p>
                                        <select name="pickFrom" onBlur={handlePickFrom} id="">
                                            <option value="0">select</option>
                                            <option value="Mirpur">Mirpur</option>
                                            <option value="Gulisthan">Gulisthan</option>
                                        </select>
                                        <hr></hr>
                                        <p>Pick Date</p>
                                        <input type="date" onBlur={handlePickDate} name="date" />
                                        <hr />
                                        <p>Pick To</p>
                                        <select name="pickTo" onBlur={handlePickTo} id="">
                                            <option value="0">select</option>
                                            <option value="Dhanmondi">Dhanmondi</option>
                                            <option value="Uttara">Uttara</option>
                                        </select>
                                    </form>
                                    <button className="search-btn" onClick={handleSearch} >Search</button>
                                </div>
                        }
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