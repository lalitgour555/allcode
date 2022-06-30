import React, { useState } from 'react'
import './Form.css'
const Form = () => {
const [fill ,setfill]=useState("")
   const [error ,seterror]=useState(false)
    var [input, setinput] = useState({ input1: "" })
    const handleAdd = () => {
        if(Object.keys(input).length==10){

      seterror(true)
        } else{
        let name = `input${Object.keys(input).length + 1}`
        //name m input as string fetch and array ko object ke form m covert krne ke liye ${object.keys(input)} .length se uski length ka pta chlega 
        const abc = { ...input, [name]: "" }
        setinput(abc)
      
        // const abc = { ...input, [name]: "" }
        //varibale abc m complete input then uske sath m varible  name  ki value add krega 
        // setinput(abc)
        // setinput bhut jruri h kyoki value input m set nhi hogi
    }}

    const handleAlert = () => { 


    for (let key in input) {
        if(!input[key]){
            setfill(fill=>fill+" "+key)
            console.log(key)

         
      }} 
    
      

    }
   
    







    const handlechange = (e) => {
        //yha par e ek parameter h
        setinput({
            ...input,
            [e.target.name]: e.target.value
            //set input m ab phle complete data fir sath m input ka name ko target krke fetch kiya or usme paramerter e ki value ko target kr fetch kiya
        })

    }
    return (
        <div className='form'>
            <button onClick={() => handleAdd()} className="btn">Add New</button>
            {Object.keys(input).map((data, i) => {
              
                //object  keys (input) se pta chal rha h ki object h jo is syntax ki help se array ke form m convert ho jayega jisse us par map function ka use kr skege or map fucntion ka use krke hmne jese hi input ka index increase hota h vesse hi new input creat ho jata h jo ki niche map ke return m likha h
           
                
                    
                    return (
                        <div className='input'>{data}<input id='fname' name={data} value={input[data]} onChange={e => handlechange(e, i)} />
                            {/* {data} hme input ki value dega like input1 , input2 etc . or value m input se data ko fetch krne ke liye [data] ke form m likha h kyoki object nhi h  */}
                        </div>
                    )
            })}
            <hr></hr>
            { error? <h1>you can't add more than 10</h1> :null }
            { fill? <h1>please fill {fill}</h1> :null }

            <button className='btn' onClick={() => handleAlert()}> save</button>
        </div>
    )
}

export default Form