import React from 'react';
import './Home.css'
import image from '../../assets/images/Frame-1.png'

const Home = () => {
    return (
        <div className="container ">
            <div className="row main">
                <div className="col-md-3">
                    <div className="card card-style">
                        <img src={image} className="card-img-top card-img-style" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-style">
                        <img src={image} className="card-img-top card-img-style" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-style">
                        <img src={image} class="card-img-top card-img-style" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card card-style">
                        <img src={image} class="card-img-top card-img-style" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;