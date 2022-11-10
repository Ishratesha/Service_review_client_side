import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, picture, balance, service_name } = service;
    return (
        <div className="card card-compact w-50 bg-base-100 shadow-xl">
            <figure><img src={picture} alt="img" className='w-50 h-50' /></figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: {balance}</p>
                <div className="card-actions justify-end">
                    <Link to={`/reviwe/${_id}`}>
                        <button className="btn btn-warning">Check Reviwes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;