import React from 'react'
import EventCard from './EventCard';


const UpcomingEvents = ({eventData}) => {
    
    const upcomingEvents = eventData.filter((event) => !event.isDone && !event.isRunning);
console.log(upcomingEvents)

  return (
  <div> 
  <h1 data-aos="fade-up" className='text-4xl text-center mb-10 '>Our Upcoming Events</h1>
     <div className='grid grid-cols-1 Lg:grid-cols-2 gap-10'>
  {
      upcomingEvents.map(event=><EventCard event={event}/> )
  }
  </div></div>
  )
}

export default UpcomingEvents