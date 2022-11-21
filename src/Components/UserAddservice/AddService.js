import React from 'react';
import { useState } from 'react';

const AddService = () => {
    const [service, setservice] = useState({});

    const handleAddservice = event =>{
        event.preventDefault();
        console.log(service);

        fetch('https://app-server-side.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert(' successful');
                event.target.reset();
            }
        })
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...service}
        newUser[field] = value;
        setservice(newUser);
    }

    return (
        <div>
            
<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      <div class="max-w-md mx-auto">
        <div class="flex items-center space-x-5">
          <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
          <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 class="leading-relaxed">Create an Event</h2>
            <p class="text-sm text-gray-500 font-normal leading-relaxed"></p>
          </div>
        </div>
        <form onSubmit={handleAddservice}class="divide-y divide-gray-200">
          <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <div class="flex flex-col">
              <label class="leading-loose">Service Title</label>
              <input onBlur={handleInputBlur} type="text" name='service_name'  class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Event title"/>
            </div>
            <div class="flex flex-col">
            <div>
                <label class="block text-sm font-medium text-white">
                Image
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="">Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Set Price</label>
              <input onBlur={handleInputBlur}name ='balance'type="text" className=" divide-amber-50 dark:text-gray-400 px-4 py-2 border focus:ring-gray-500 focus:border-gray-500 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Img"/>
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Rating</label>
              <input onBlur={handleInputBlur}name ='rating'type="text" className="  dark:text-gray-400 px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Img"/>
            </div>
            <div class="flex items-center space-x-4">
             
              
            </div>
            <div class="flex flex-col">
              <label class="leading-loose">Event Description</label>
              <input onBlur={handleInputBlur} name='description'type="text" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"/>
            </div>
          </div>
          <div class="pt-4 flex items-center space-x-4">
              <button class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
              </button>
              <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default AddService;