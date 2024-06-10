import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import '../index.css'
import {remove} from '../redux/slices/cartSlice'
const Saved = () => {
 


    const {cart} = useSelector((state)=>state);
    const dispatch =useDispatch();

    function removeHandler(){
      dispatch(remove())
    }
    useEffect(()=>{
console.log(cart);
    },[cart])

    if(cart.length ===0){
      return <div className='empty' >No Quotes saved</div>
    }

  return (
    <div className='quote-container'>

{
 cart.map((quote)=>{
  return <div className='quote-sub-container'>
  <div className='quote'>{quote}</div>
  </div>
 })
}

    </div>
   
  )
}

export default Saved