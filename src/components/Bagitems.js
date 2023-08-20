import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { useSelector,useDispatch } from 'react-redux'
import { removeProduct } from '../store/actions/bag-actions'

const Bagitems = () => {

  const BagItems = useSelector(state => state.bagItems)
  const dispatch = useDispatch()
  return (
    <div className='Bag-section'>
      <h1>Check your Bag Items</h1>
      <div className='Bag-products'>
        {BagItems.map((product) => {
          return (
            <div key={product.id} className='Bag-product'>
               <div className='Bag-img'>
                   <img src={product.img} alt={product.title} />
               </div>
               <div className='Bag-product-info'>
                    <h3>{product.title}</h3>
                    <span className='product-model'>{product.model}</span>
                    <p>{product.description}</p>
                   <div >
                          <span className='price'>{`$${product.price} x ${product.amount }`}</span>
                   </div>
               </div>
               <button className='delet-btn' onClick={() => dispatch(removeProduct(product))} ><MdDeleteForever></MdDeleteForever></button>
               
          </div>
          )
        })} 
      </div>
    </div>
  )
}

export default Bagitems