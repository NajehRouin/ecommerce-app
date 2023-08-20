import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Bagslid = () => {
  
  const BagItems = useSelector(state => state.bagItems)
  const totalPrice = useSelector(state => state.totalPrice)

  
  return (
    <div className='bag-slide'>
      <div className='line'></div>
      <div className='bag'>
        <h1>Bag</h1>
        <div className='items-bag'>
           {BagItems.map((item) => {
            return (
              <div className='item-image' key={item.id}>
                <img src={item.img} alt={item.title}/>
              </div>
            )
          })} 
        </div>
        <Link to='/bag'>
        <button type='button' className='bag-btn'>
        <FaShoppingBag />
        <p>View Bag</p>
        </button>
        </Link>
        <h5>Total Price :{`$${totalPrice.toFixed(2)}`} </h5>
      </div>
    </div>
  )
}

export default Bagslid