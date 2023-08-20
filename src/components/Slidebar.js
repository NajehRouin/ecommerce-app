import React  from 'react'
import { Link } from 'react-router-dom'
import {MdStore} from 'react-icons/md'
import {FaShoppingBag} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
const Slidebar = () => {

  const product = useSelector(state => state)
  const locationvalid = useLocation()


  return (
    <section className='sidebar'>
      <Link to='/' >
        <div className='logo' >
          RN
        </div>
      </Link>
      <Link to='/'>
        <div className={`marcket ${locationvalid.pathname === '/' ? 'active' : ''} `} >
          <MdStore size="24px"/>
          </div>
      </Link>
      <Link to='/bag'>
        <div className={`bag ${locationvalid.pathname === '/bag' ? 'active' : ''} `}  >
          <FaShoppingBag size="22px"/>
          <div className='notification-bag'>{product.bagItems.length}</div>
        </div>
      </Link>
    </section>
  )
}

export default Slidebar