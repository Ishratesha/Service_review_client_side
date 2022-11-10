import React, { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';

const ReviewForm = () => {
    const {_id,service_name}=useLoaderData();
 const {user} = useContext(AuthContext)
  
    const addReview = event =>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value
      const email = user?.email||'unregister'
      const date = form.date.value;
      const textarea = form.textarea.value;
      const review={
        serviceid: _id,
        serviceName: service_name,
       
        customer: name,
        email,
        date,
        textarea
      }
 console.log(review)
 fetch('http://localhost:5000/reviews', {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        //authorization: `Bearer ${localStorage.getItem('genius-token')}`
    },
    body: JSON.stringify(review)
})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            alert('Order placed successfully')
            form.reset();
            
        }
    })
    .catch(er => console.error(er));
    }
      //username,email,date,textarea
   
    return (
        <div>
           
<section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 class="text-xl font-bold text-white capitalize dark:text-white">Give a review</h1>
    <form onSubmit={addReview}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-white dark:text-gray-200" for="username">name</label>
                <input name="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-white dark:text-gray-200" for="emailAddress">Email Address</label>
                <input name="email" type="email" 
                defaultValue={user?.email}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

           
            
           
            
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Rating</label>
                <input name="range" type="range" class="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Date</label>
                <input name="date" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Text Area</label>
                <textarea name="textarea" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
          
        </div>

        <div class="flex justify-end mt-6">
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600" type='submit'>Save</button>
            
        </div>
    </form>
</section>

 
    
   

        </div>
    );
};

export default ReviewForm;