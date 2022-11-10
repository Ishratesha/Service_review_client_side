import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div>
            {/* header */}
            
            <Header></Header>
           <Outlet></Outlet>            
            {/* outlet */}
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;