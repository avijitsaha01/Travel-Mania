import React from 'react';
import './Home.css'
import { useEffect, useState } from 'react';
import Data from '../../assets/data.js'
import Ticket from '../Ticket/Ticket';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(Data);
    }, []);
    return (
        <div className="container">
            <div className="row main">
                {
                    data.map(dt => <Ticket data={dt}></Ticket>)
                }
            </div>

        </div>
    );
};

export default Home;