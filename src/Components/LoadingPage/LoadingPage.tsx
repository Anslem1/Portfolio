import React from 'react'
import ReactLoading from 'react-loading'

import './LoadingPage.css'
function LoadingPage () {
  return (
    <div className='loader-container'>
      <ReactLoading type='cylon' color='#65FF65' height={100} width={50} />
    </div>
  )
}

export default LoadingPage
