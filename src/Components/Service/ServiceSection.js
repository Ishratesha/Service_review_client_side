import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import ThreeService from './ThreeService';
import {Link} from 'react-router-dom'

const ServiceSection = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('https://app-server-side.vercel.app/threeservice')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ThreeService
                        key={service._id}
                        service={service}
                    ></ThreeService>)
                }
            </div>
            <button className="btn btn-primary m-3"><Link to='/services'>See All</Link></button>
        </div>
    );
};

export default ServiceSection;