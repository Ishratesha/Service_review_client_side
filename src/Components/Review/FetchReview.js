import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const FetchReview = () => {
    const [review, setreview] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/reviews')
        .then(res =>res.json())
        .then(data => setreview(data))
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
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

    // const handleStatusUpdate = id => {
    //     fetch(`http://localhost:5000/reviews/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json',
    //             //authorization: `Bearer ${localStorage.getItem('genius-token')}`
    //         },
    //         body: JSON.stringify({ status: 'Approved' })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount > 0) {
    //                 const remaining = review.filter(rvw => rvw._id !== id);
    //                 const approving = review.find(rvw => rvw._id === id);
    //                 approving.status = 'Approved'

    //                 const newOrders = [approving, ...remaining];
    //                 setreview(newOrders);
    //             }
    //         })
    //}
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    review.map(review => <Reviews
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                        // handleStatusUpdate={handleStatusUpdate}
                    ></Reviews>)
                }
            </div>
        
            
        </div>
    );
};

export default FetchReview;