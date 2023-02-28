import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function UpdateProduct() {
    const [pName,setPName]=useState('')
    const [price,setPrice]=useState('')
    const [catogory,setCatogory]=useState('')
    const navigate=useNavigate()
    const params=useParams();

    useEffect(()=>{
        getdetails()
    },[])

    const getdetails=async()=>{
        console.log(params.id)
    let result1 = await fetch(`/product/${params.id}`,{
        method:"get"
    })   
    result1=await result1.json();
    setPName(result1.data.productName)
    setPrice(result1.data.price)
    setCatogory(result1.data.catogory)
    }
    
    let updateProduct= async()=>{
    
        const userId=JSON.parse(localStorage.getItem('users')).data._id;
        let object={productName:pName,price:price,catogory:catogory,userId:userId}
        let result= await fetch(`/update/${params.id}`,{
            method:"Put",
            body:JSON.stringify(object),
            headers:{
                "content-type":"application/json"
            }
        })
        result=await result.json()
        if(result){
            alert(`${result.message}`)
            navigate('/')
        }
      console.log(result)
    }
  return (
    <div className='product'>
        <h1>Update Product</h1>
        <input className='inputbox' type="text" value={pName} placeholder='Enter Product Name' onChange={(e)=>setPName(e.target.value)} />
     
        <input className='inputbox' type="text" value={price} placeholder='Enter Product Price' onChange={(e)=>setPrice(e.target.value)} />
        
        <input className='inputbox' type="text" value={catogory} placeholder='Enter Product catogory' onChange={(e)=>setCatogory(e.target.value)} />

        <button className='btn' onClick={updateProduct}>Update</button>
    </div>
  )
}
