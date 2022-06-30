import React from 'react'
import { Link } from 'react-router-dom'
const button = () => {
  
  return (<>  
<div class="d-grid gap-6 d-md-block">

  <button class="btn btn-danger" type="button" ><Link to="/login">Log in</Link></button>
  <button class="btn btn-danger" type="button"><Link to="/signup">Sign Up</Link></button>
</div>
  </> 
  )
}

export default button