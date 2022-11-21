import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Components/Home/Blog';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import FetchReview from '../Components/Review/FetchReview';
import ReviewForm from '../Components/Review/ReviewForm';
import Reviews from '../Components/Review/Reviews';
import Service from '../Components/Review/Service';
import Updatereview from '../Components/Review/Updatereview';
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
                loader:()=>fetch('https://app-server-side.vercel.app/services')
            },
           
            {
                path:'/reviwe/:id',
                element:<Service></Service>,
                loader:({params})=>fetch (`https://app-server-side.vercel.app/service/${params.id}`)
            },
            {
                path:'/reviwe/:id',
                element:<ReviewForm></ReviewForm>,
                loader:({params})=>fetch (`https://app-server-side.vercel.app/service/${params.id}`)
            },
            {
                path:'/myreview',
                element:<FetchReview></FetchReview>,
                
            },
            {
                path:'/update/:id',
                element:<Updatereview></Updatereview>,
                loader: ({params}) => fetch(`https://app-server-side.vercel.app/reviews/${params.id}`)
            },{
                path:'/blog',
                element:<Blog></Blog>
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