import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Addproduct() {
    const [pName,setPName]=useState('')
    const [price,setPrice]=useState('')
    const [catogory,setCatogory]=useState('')
    const [company,setCompany]=useState('')
    const [error, setError]=useState(false)
    const navigate = useNavigate()

    const addProduct=async ()=>{
if(!pName || !price || !catogory || !company || !company){
    setError(true)
    return false
}
        const userId=JSON.parse(localStorage.getItem('users')).data._id;
        let object={productName:pName,price:price,catogory:catogory,userId:userId,company:company}
        let result= await fetch('/addproduct',{
            method:"POST",
            body:JSON.stringify(object),
            headers:{
                "content-type":"application/json"
            }
        })
        result=await result.json()
        if(result){
            alert(`${result.message}`) 
            navigate("/")
        }
      
    }

  return (
    <div className='product'>
        <h1>Add product</h1>
        <input className='inputbox' type="text" value={pName} placeholder='Enter Product Name' onChange={(e)=>setPName(e.target.value)} />
        {error && !pName && <span className='invalid'>valid Product Name</span>}
        <input className='inputbox' type="text" value={price} placeholder='Enter Product Price' onChange={(e)=>setPrice(e.target.value)} />
        {error && !price && <span className='invalid'>valid price</span>}
        <input className='inputbox' type="text" value={catogory} placeholder='Enter Product catogory' onChange={(e)=>setCatogory(e.target.value)} />
        {error && !catogory && <span className='invalid'>valid Product catogory</span>}
        <input className='inputbox' type="text" value={company} placeholder='Enter Product company Name' onChange={(e)=>setCompany(e.target.value)} />
        {error && !company && <span className='invalid'>valid Product company</span>}<br></br>
        <button className='btn' onClick={addProduct}>Add</button>
    </div>
  )
}

export default Addproduct