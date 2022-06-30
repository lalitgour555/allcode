import React, { useEffect, useState } from 'react'

const Ueseeffect =() => {
  const [show , setshow] = useState('posts')
  const [item , setitem] =useState([])
  
  useEffect (() => {
      fetch(`https://jsonplaceholder.typicode.com/${show}`)
      .then((response) => response.json())
  .then((json) => setitem(json))
      
  } ,[show])
  // useEffect (() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${show}`)
  //   .then(response => response.json())
  //   .then(json => setitem(json))
  // }, [show])
  // console.log(show)
  return (
    <>
    <button onClick={()=>setshow('posts')}>posts</button>
    <button onClick={()=>setshow('users')}>users</button>
    <button onClick={()=>setshow('comments')}>Comments</button>
        <h1>{show}</h1>
        {item.map(item =>{
          return<pre>{JSON.stringify(item)}</pre>
        })

        }

        </>
  )
}

export default Ueseeffect