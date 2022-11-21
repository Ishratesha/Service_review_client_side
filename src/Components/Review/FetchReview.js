import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const FetchReview = () => {
    const [review, setreview] = useState([]);
    
    useEffect( () =>{
        fetch('https://app-server-side.vercel.app/reviews')
        .then(res =>res.json())
        .then(data => setreview(data))
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://app-server-side.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                   // authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = review.filter(rvw => rvw._id !== id);
                        setreview(remaining);
                    }
                })
        }
    }

    
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Reviews</p>
                
               
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    review.map(review => <Reviews
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                        //  handleStatusUpdate={handleStatusUpdate}
                    ></Reviews>)
                }
            </div>
        
            
        </div>
    );
};

export default FetchReview;