import errorImg from '../../assets/error.svg'
import React from 'react'
import { Link } from 'react-router-dom'

function Error(props) {
  return (
    <div className='h-full text-center pt-2'>
      <h3>Ohh! Page Not Found</h3>
      <Link to='/'>
        <span className='text-xl capitalize underline text-red-600'>back home</span>
      </Link>
    </div>
  )
}

export default Error
