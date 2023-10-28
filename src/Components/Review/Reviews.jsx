import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews , setReviews]= useState([]);
    useEffect(()=>{
        fetch('/review.json')
        .then(res=>res.json())
        .then(Reviews=> setReviews(Reviews))
        .catch(error=> console.log(error))
    },[])
   
  return (
    <div>
        <h1 data-aos="fade-up" className=' text-4xl text-center mb-10'>
        Our Happy Clients
        </h1>
        <div className='grid grid-cols-3 gap-5'>
{
    reviews.map(review=> <ReviewCard review={review}/>)
}
        </div>
    </div>
  )
}

export default Reviews