import React from 'react'
import { BiSolidUserCircle } from 'react-icons/bi';

const ReviewCard = ({review}) => {
    const {id, eventId, name, rating, comment}= review;
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
  return (
    <div data-aos="zoom-out" className='card   bg-[#212122] shadow-xl'>
        <div className="card-body relative">
            <h1 className='flex items-center gap-2'><span className='text-3xl bg-[#edac07] rounded-3xl'><BiSolidUserCircle/></span><span>{name}</span></h1>
            <h1 className='text-sm absolute bottom-2 right-4'>{
            stars
            } {rating}/5</h1>
            <p className=' text-green-500'>{comment}</p>
        </div>
    </div>
  )
}

export default ReviewCard