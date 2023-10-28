import React from 'react'
import EventCard from '../../Components/EventComponents/EventCard';
import { useLoaderData } from 'react-router-dom';

const Events = () => {
    const events  = useLoaderData();
  return (
    <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {
            events.map(event=><EventCard event={event}/>)
        }
    </div>
  )
}

export default Events