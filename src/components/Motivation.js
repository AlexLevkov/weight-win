import React from 'react'
import { useEffect, useState } from 'react';

const Motivation = () => {

   
    const [quote, setQuote] = useState('Loading...')
    const [author, setAuthor] = useState('Loading...')
    
    useEffect(()=>{
      fetch('https://api.api-ninjas.com/v1/quotes?category=fitness',{
          method: 'GET',
          headers: {
          'Content-type': 'application/json',
          'X-Api-Key': '+wLw35/dcMxWmfdAb8nNiw==q2Dd5ZACjUT4QwjV'
          }
      })
      .then( (res)=> res.json())
      .then( (res)=> {
        setQuote(res[0].quote)
        setAuthor(res[0].author)
      })
      .catch( err => {
        setQuote("The thing standing between you and your goal is the will to try and the belief that it is possible.")
        setAuthor("Joel Brown")
      }
        
         )
  },[])

  return (
    <div>
      <h5><span style={{fontWeight:"bold"}}>Today's Quote:</span>
      <p> "{quote}" - {author} </p>
      </h5>
    </div>
  )
}

export default Motivation


