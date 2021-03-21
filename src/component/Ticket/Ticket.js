import React from 'react';
import { Link } from 'react-router-dom';

const Ticket = (props) => {
    const { name, image, price } = props.data;
    return (
        <div className="col-md-3">
            <Link to="/destination">
                <div className="card card-style">
                    <img src={image} className="card-img-top card-img-style" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Ticket;