import React, { useState } from 'react'

export default function Card() {
    const [name , setName] = useState('')
    const [counter , setCounter] = useState(0)
    const price = 10
  return (
    <div className='card'>
      <input type="text" value={name} onChange={e=>setName(e.target.value) }/> <br />
      <h6>price={price}$</h6>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      {counter}
      <button onClick={()=>setCounter(counter-1)}>-</button>
      <h5>{name}</h5>
      <h4>Total = {counter*price}</h4>
    </div>
  )
}
