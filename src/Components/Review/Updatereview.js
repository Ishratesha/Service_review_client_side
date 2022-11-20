import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Updatereview = () => {
  
        const storedUser = useLoaderData();
        
        const [review, setreview] = useState(storedUser);
    
        const handleUpdateReview = event =>{
            event.preventDefault();
             console.log(review);
            fetch(`http://localhost:5000/reviews/${storedUser._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(review)
            })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0){
                    alert('review updated')
                    console.log(data);
                }
                
            })
        }
      
        const handleInputChange = event =>{
            const field = event.target.name;
            const value = event.target.value;
            const newUser = {...review}
            newUser[field] = value;
            setreview(newUser);
        }
    return (
        <div>
            <h2>Update</h2>
            <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 class="text-xl font-bold text-white capitalize dark:text-white">Give a review</h1>
    <form onSubmit={handleUpdateReview} >
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-white dark:text-gray-200" for="username">name</label>
                <input name="name" onChange={handleInputChange} defaultValue={storedUser.serviceName} type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-white dark:text-gray-200" for="emailAddress">Email Address</label>
                <input name="email" type="email"onChange={handleInputChange}  defaultValue={storedUser.email}
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>

           
            
           
            
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Rating</label>
                <input name="range" type="range" class="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Date</label>
                <input name="date" type="date" onChange={handleInputChange} defaultValue={storedUser.date}class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Text Area</label>
                <textarea name="textarea" onChange={handleInputChange} defaultValue={storedUser.textarea} type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
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

export default Updatereview;