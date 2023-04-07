
import React from 'react'

export function Navbar(props) {
  return (
  <>
    <div className='flex products'>
        <div className='left' onClick ={()=>props.handleChange(false)}>TeeRex Store</div>
        <div className='right' onClick ={()=>props.handleChange(true)}>Product
        <i className="fa fa-cart-plus" aria-hidden="true"></i>
        <sup className='shoppingCart'>{props.count}</sup>
        </div>
    </div>
</>
    )
    }

  