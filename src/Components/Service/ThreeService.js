import React from 'react';
import{useLoaderData}from 'react-router-dom'
const ThreeService = ({service}) => {
    const {service_name,picture,description,balance,rating} = service
    return (
        <div>
            <h1>We provide</h1>
            <div className="card w-50 glass">
  <figure><img src={picture} alt="image"/></figure>
  <div className="card-body">
    <h2 className="card-title">{service_name}</h2>
    <p>{description}</p>
    <h3>Price:{balance}</h3>
    <h4>Rating:{rating}</h4>
    <div className="card-actions justify-end">
      <button className="btn btn-warning"> view details</button>
    </div>
  </div>
</div>
 
        </div>
    );
};

export default ThreeService;