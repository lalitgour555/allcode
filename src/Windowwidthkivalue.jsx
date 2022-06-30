import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Windowwidth = () => {
  const[width , setwindowwidth] = useState(window.innerWidth)
  const [height , setheight]= useState(window.innerHeight)
   const handleReize =()=>{
     setwindowwidth( window.innerWidth)
     setheight(window.innerHeight)
   }
   console.log(width)
   useEffect (()=>{
window.addEventListener('resize', handleReize)},[])
  return (
    <div>
<h1>Width : {width} </h1>
<h1>Height :{height}</h1>
export default windowwidth
    </div>
  )
}
export default Windowwidth