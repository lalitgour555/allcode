import React from 'react'
import { useState } from 'react'

const T1 = () => {
  const [tech , settech]=useState([""])
  let teacher={jitendra:["math" , "english"]
, lalit:["english" , "science"]}
let teachername= Object.keys(teacher)
let teachersub=Object.values(teacher)
console.log(teachername)
console.log(teachersub)
if("english"){

}
  return (
    <div>
      <h1>{teachername}</h1>
    <h1>{teachersub}</h1>
    
    
    </div>
  )
}

export default T1