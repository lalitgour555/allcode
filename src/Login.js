import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../src/parts/Login.css'
import Footer from './Footer'
import Header from './Header'



const Login = () => {
  const [mail, setmail] = useState()
  const [pass, setpass] = useState()
  const[entry ,setentry]=useState([])

  const submitform =(e)=>{
   e.preventDefault();
    const entry1 = {
      mail: mail,
      password: pass
    }
setentry([...entry,entry1])
console.log(entry)
  }
  return (
    <>
      <Header />
      <div className='box'>
        <h1>Log in</h1>
        <form action='' onSubmit={submitform}>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"> <div className='email mb-3'>
              <label>Email</label>
              <span>"Need an account?"<Link to="/signup">Sign Up</Link></span></div></label>
            <input type="email" value={mail} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setmail(e.target.value)} />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <span> show </span>
            <input type="password" value={pass} name="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setpass(e.target.value)} />
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="button" onClick={submitform}>Log in</button>
            <Link to="/forgetpassword">forgetpassword</Link>
          </div>

        </form>
              {entry.map((currentlement)=>{
                  return(
                    <>
                    <div id='logindata'> 
                      <h1 id='shiftleft'>{currentlement.mail}</h1>
                      <h3 id='shiftright'>{currentlement.password}</h3>
                    </div>
                    </>
                  )
              }  )   }
      </div>
      <Footer />
    </>
  )
}

export default Login