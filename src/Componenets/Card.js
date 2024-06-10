import React from 'react'
import '../index.css'

const Card = (props) => {
    // console.log("recieved prop : "+props.post)
  return (
    <div className='container '>

<div>
    {props.post}
</div>
    </div>
  )
}

export default Card