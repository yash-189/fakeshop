import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
  return (
    <div className='text-center h-60 m-auto' style={{textAlign: '-webkit-center'}}>
      <img src={loading} className='object-center' alt='loading' />

    </div>
  )
}

export default Spinner