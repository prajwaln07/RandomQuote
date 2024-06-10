import React, { useEffect, useState } from 'react'
import '../index.css'
import Card from '../Componenets/Card'
import Loader from '../Componenets/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../redux/slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
const {cart} =useSelector((state)=>state)
const dispatch=useDispatch();

  const [quotes,setQuotes] =useState("Greate Quotes");
  const [loader,setLoader]=useState(false);
  const [dataGot,SetDataGot]=useState(true);

  async function fetchData(){
    
    try{
      setLoader(true);
const res=await fetch(' https://ron-swanson-quotes.herokuapp.com/v2/quotes');
const data= await res.json();
console.log(data[0])
setQuotes(data);
setLoader(false)
    }
    catch(e){

SetDataGot(false);
    }

  }
  useEffect(()=>{
fetchData();
  },[])

function nextHandler(){
  fetchData();
}

function saveHandler(){
dispatch(add(`${quotes}`))
toast.success("quote  saved ")
}

  return (
    <div className='home'>
    {loader && <Loader></Loader>}
    {!loader && 
    <Card post={quotes[0]}></Card>
  }
  <div className='buttons'>
    <button className='btn' onClick={nextHandler}>Next</button>
    <button className='btn' onClick={saveHandler}>save</button>
    {/* <toastify></toastify> */}
    </div>
    </div>
  )
}

export default Home