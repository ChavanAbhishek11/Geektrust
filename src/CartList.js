
import React, { useEffect, useState } from 'react'

function CartList({cart}) {
    const [CART,setCart] = useState([]);
  

    useEffect(()=>{
        setCart(cart)
    },[cart])
  return (
    <div className="cartList">
      
        {CART?.map((x,i)=>{
            return(
                <div style={{padding:"15px" }}>
                    <img src={x.imageURL} width={40}/>
                    <span style={{fontSize:"15px",fontWeight:"25px"}}> {x.name} </span>
                    <span>Rs. {x.price * x.quantity}</span>

                  
                    <button onClick={()=>{
                        const _CART = CART.map((item,index)=>{
                            return i === index ?{...item,quantity:item.quantity+1}:item
                        })
                     setCart(_CART)
                    }}> + </button>
                      <span>{x.quantity}</span>
                    <button onClick={()=>{
                        const _CART = CART.map((item,index)=>{
                            return i === index ?{...item,quantity:item.quantity>0 ? item.quantity-1 : 0}:item
                        })
                        setCart(_CART)
                    }}> Delete </button>
                  
                    

                </div>
            )
        })}

        <p style={{background:"blue",fontSize:"20px", width:"30%",color:"whitesmoke",padding:"10px"}}>Total : Rs.
           {CART.map(item=>item.price * item. quantity).reduce((total,value)=> total + value , 0)}
        </p>
      
    </div>
  )
}

export default CartList
