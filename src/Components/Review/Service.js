import React from 'react';
import{useLoaderData}from 'react-router-dom'
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

const Reviwe = () => {
    const {_id,service_name,picture,description,balance,rating} = useLoaderData()
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{service_name}</h2>
    <p>{description}</p>
    <h3>Price:{balance}</h3>
    <h3>Rating:{rating}</h3>
    <div className="card-actions justify-end">
      <button className="btn btn-warning">Book now!</button>
    </div>
  </div>
</div>

<ReviewForm></ReviewForm>
            
        </div>
        
    );
};

export default Reviwe;