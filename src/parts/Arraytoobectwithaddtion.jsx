import React from 'react'

const Arraytoobectwithaddtion = () => {
    const keys = ['a', 'b', 'c'];
const obj = {
  ...Object.fromEntries(
    keys.map(key => [key, " mohan"])
   // number bhi fill kr skte h  keys.map(key => [key, 5])
  ),
name:"Array to obect withaddtion"

  //e:7
  //d: 6
};

console.log(obj);
  return (
    <div><h1> {obj.name}</h1>
    <h1> {obj.a}</h1>
    <h1> {obj.b}</h1>
    
    </div>
  )
}

export default Arraytoobectwithaddtion