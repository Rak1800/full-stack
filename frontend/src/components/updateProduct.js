import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UpdateProduct() {
    const [pName,setPName]=useState('')
    const [price,setPrice]=useState('')
    const [catogory,setCatogory]=useState('')
    const navigate=useNavigate()
    
    let addProduct=async ()=>{
    
        const userId=JSON.parse(localStorage.getItem('users')).data._id;
        let object={productName:pName,price:price,catogory:catogory,userId:userId}
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
        <h1>Update Product</h1>
        <input className='inputbox' type="text" value={pName} placeholder='Enter Product Name' onChange={(e)=>setPName(e.target.value)} />
     
        <input className='inputbox' type="text" value={price} placeholder='Enter Product Price' onChange={(e)=>setPrice(e.target.value)} />
        
        <input className='inputbox' type="text" value={catogory} placeholder='Enter Product catogory' onChange={(e)=>setCatogory(e.target.value)} />

        <button className='btn' onClick={addProduct}>Update</button>
    </div>
  )
}
