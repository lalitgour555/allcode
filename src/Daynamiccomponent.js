import React from 'react'   
import { useParams } from "react-router-dom";

 const Daynamiccomponent = () => {
    const { id } = useParams();
        console.log("params movieId container", id); 
        console.log(useParams())     
  return (
    <div><h1>{id}</h1></div>
  )
}
export default Daynamiccomponent
