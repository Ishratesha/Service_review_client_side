import React from 'react';
import ServiceSection from '../Service/ServiceSection';

import Benner from './Benner';
import Tool from './Tool';

const Home = () => {
    return (
        <div>
            <Benner></Benner>
             
         <ServiceSection></ServiceSection>
         
         <Tool></Tool>
        </div>
    );
};

export default Home;