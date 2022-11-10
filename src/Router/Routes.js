import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import FetchReview from '../Components/Review/FetchReview';
import ReviewForm from '../Components/Review/ReviewForm';
import Reviews from '../Components/Review/Reviews';
import Service from '../Components/Review/Service';
import Services from '../Components/Service/Services';
import ServiceSection from '../Components/Service/ServiceSection';
import ThreeService from '../Components/Service/ThreeService';
import AddService from '../Components/UserAddservice/AddService';

import Main from '../Layout/Main';

//routes
export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
               path:'/',
               element:<Home></Home>,
              
            },
            {
                path:'/service/threesection',
                element:<ServiceSection></ServiceSection>,
                loader:()=>fetch('http://localhost:5000/threeservice')
                
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/addservice',
                element:<AddService></AddService>
            },
            
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch('http://localhost:5000/services')
            },
           
            {
                path:'/reviwe/:id',
                element:<Service></Service>,
                loader:({params})=>fetch (`http://localhost:5000/service/${params.id}`)
            },
            {
                path:'/reviwe/:id',
                element:<ReviewForm></ReviewForm>,
                loader:({params})=>fetch (`http://localhost:5000/service/${params.id}`)
            },
            {
                path:'/myreview',
                element:<FetchReview></FetchReview>
            }
        ]
    }
])
const Routes = () => {
     
    return (
        <div>
            
        </div>
    );
};

export default Routes;