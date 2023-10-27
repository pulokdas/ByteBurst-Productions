import React from 'react'
import { MdOutlineReportGmailerrorred } from 'react-icons/md';
const NotFoundPage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <div className=' text-8xl text-red-600 flex justify-center'><MdOutlineReportGmailerrorred /></div>
                <h1 className=' font-bold text-center text-5xl text-red-600'>404 - Not Found</h1>
                <p className='text-center mt-3' >The page you are looking for does not exist.</p>
            </div>
        </div>
    )
}

export default NotFoundPage;