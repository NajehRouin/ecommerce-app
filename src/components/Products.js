import React, { useEffect, useState } from 'react'

import products from '../data'
import {BsFillBagPlusFill } from 'react-icons/bs'
import {  useDispatch } from 'react-redux'
import { addProduct } from '../store/actions/bag-actions'
import { message } from 'antd';
import { GoSearch } from "react-icons/go";
const Products = () => {
  const [Data,setData]=useState([])
  const [product,setProduct]=useState([])

  useEffect(()=>{
    setData(products)
    setProduct(products)
  },[])
    const dispatch = useDispatch()

    const alertmsg = () => {
      setTimeout(() => {
        message.error("No results found !")
  
      }, 10);
    }
    const filter = (param) => {
      if (!param) {
        setData(product)
      } else {
        const array = product.filter(({ title }) => title.indexOf(param) > -1)
        //console.log(array)
        if (array.length > 0) {
          //   setEmploye(newData);
          setData(array)
          return array
        } else {
          alertmsg()
        }
  
      }
  
    }

    const searchFilterFunction = async (e, text) => {
      const { name, value } = e.target
  
      filter(value)
    };

  return (
    <div className='products'>
      <div className='divsearche'>
            <GoSearch className="Iconsearche" />
            <input type='text' name='searche'
              className='txtsearche'

              placeholder="Search Product .."

              onChange={(text) => {

                searchFilterFunction(text)
              }}
              //onClear={(text) => searchFilterFunction('')}
              maxLength={15} />
          </div>
      <div className='row'>
        {Data.map((product) => {
            return (
              <div key={product.id} className="items-card" >
                <div className='itmes-img'>
                  <img src={product.img} alt={product.title} />
                </div>
                <div className='item-info'>
                  <h4>{product.title}</h4>
                  <p>{product.model}</p>
                  <div className='item-price'>
                    <span>{`$${product.price}`}</span>
                    <button className='add-to-cart'  onClick={() => dispatch(addProduct(product))}  >
                    <BsFillBagPlusFill/>
                    </button>
                  </div>
                </div>
              </div>
            )
        })}  

      </div>
    </div>
  )
}

export default Products