import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider';

const Reviews = ({review,handleDelete,}) => {
  const {_id,serviceName,customer,date,textarea}=review
 const {user} = useContext(AuthContext)
  return (
    <div>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" />

<section>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="swiper-container !overflow-hidden">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <blockquote class="bg-gray-100 p-8">
            <div class="flex items-center">
              <img
                alt="Dog"
                src={user?.photoURL}
                class="h-16 w-16 rounded-full object-cover"
              />

              <div class="ml-4 text-sm">
                <p class="font-medium">{customer}</p>
                <p class="mt-1">Service Title: {serviceName} </p>
                <p class="mt-1">{date} </p>
              </div>
            </div>

            <p class="relative mt-4 text-gray-500">
              <span class="text-xl">&ldquo;</span>

              {textarea}

              <span class="text-xl">&rdquo;</span>
            </p>
          </blockquote>
          <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                    {/* <button 
                onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button> */}
                </label>
        </div>

       

       

    
      </div>

      <div class="swiper-pagination !relative !bottom-0 mt-12"></div>
    </div>
  </div>
</section>

<script>
  
</script>

    </div>
  );
};

export default Reviews;