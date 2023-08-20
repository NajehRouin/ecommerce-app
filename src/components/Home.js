import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Products from './Products'
import Bagitems from './Bagitems'
const Home = () => {
  return (
    <div className='Home'>
      <Routes>
      <Route path='/' element={<Products />} />
        <Route path='/bag' element={<Bagitems/>}/>
      </Routes>
    </div>
  )
}

export default Home