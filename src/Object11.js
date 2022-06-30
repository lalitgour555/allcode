
import React, { useState } from 'react'
 const Object11 = () => {
  const[ show , setshow ]=useState('post')
// console.log(show)
  const arr=[{name:"ravi",
  roll:108
  ,class:5
  ,add:"ram mandir"
  ,city:"gwalior"
  }]
     const Obj1={
         name:"free",
         id:4,
         add:"fghfhf gjghjgg"
       }
       arr.map(x=>console.log(x))
      Object.values(Obj1).map((x)=>console.log(x))
      Object.keys(Obj1).map((x)=>console.log(x)) 
       Object.entries(Obj1).map((x)=>console.log(x))
  return (
    <div>
      {/* {Object.keys(obj12).map((x)=>console.log(x))} */}
      <h1> object ka  page hai !</h1>
      <button onClick={()=>setshow('Button Par Show Message')}>ButtonShow</button>
      <p>{show}</p>
    </div>
  )
}

export default Object11