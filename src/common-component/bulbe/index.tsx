import React from 'react'
import './bulbe.css'

const Bulbe = () => {
  return (
    <div className='bulbe-form  w-40 h-12 '>
      <div className='flex justify-center items-center space-x-1 h-full'>
        <svg
          width='25'
          height='24'
          viewBox='0 0 25 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M21.5 11.5C21.5034 12.8199 21.1951 14.1219 20.6 15.3C19.8944 16.7118 18.8098 17.8992 17.4674 18.7293C16.1251 19.5594 14.5782 19.9994 13 20C11.6801 20.0035 10.3781 19.6951 9.2 19.1L3.5 21L5.4 15.3C4.80493 14.1219 4.49656 12.8199 4.5 11.5C4.50061 9.92179 4.94061 8.37488 5.77072 7.03258C6.60083 5.69028 7.78825 4.6056 9.2 3.90003C10.3781 3.30496 11.6801 2.99659 13 3.00003H13.5C15.5843 3.11502 17.553 3.99479 19.0291 5.47089C20.5052 6.94699 21.385 8.91568 21.5 11V11.5Z'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span className='text-style'>Book Now</span>
      </div>
    </div>
  )
}

export default Bulbe
