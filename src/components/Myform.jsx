import React, { useState } from 'react'
import axios from "axios"

function Myform() {

    const [name , setname] = useState()
    const [id , setid] = useState()
    const [ifsc , setifsc] = useState()

    const [response , setresponse] = useState()
    const handleSubmit =  (e)=>{
        e.preventDefault()
        axios.post("https://backend-vpatrol.onrender.com/register" , {name , id , ifsc})
        .then((response) => setresponse(response.data))
        .catch(()=> setresponse(response.data))

    }
  return (
    <>
    <div className="form-box">  
        <form className="form-box-inside" onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name : <input type="text" id="name" onChange={(e)=> setname(e.target.value)} />
            </label>
            <label htmlFor="id">
                ID : <input type="number" id="id" onChange={(e)=> setid(e.target.value)} />
            </label>
            <label htmlFor="ifsc">
                IFSC : <input type="text" id="ifsc" onChange={(e)=> setifsc(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
        <h2>{response}</h2>
    </div>
    </>
  )
}

export default Myform
