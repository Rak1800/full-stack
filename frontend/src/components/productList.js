import React, { useEffect, useState } from 'react'

function ProductList() {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        getproduct();
    },[])
    const getproduct= async function(){
        let result= await fetch('/products')
        result=await result.json()
       setProducts(result.data)
    }
    const  deleteproduct= async (id)=>{
       let result= await fetch('/deleteProduct',{
        method:'POST',
        body:JSON.stringify({productId:id}),
        headers:{
            "content-type":"application/json"
        }
       
       })
    result= await result.json()
    console.log(result)
    if(result){
        alert(`${result.message}`)
        getproduct();
    }
    }
  return (
    <div className='product-list'>
    <h1>product List</h1>
    <ul>
        <li>S.no</li>
        <li>P.Name</li>
        <li>Price</li>
        <li>Catogory</li>
        <li>Company</li>
        <li>Operation</li>
    </ul>
    {
       products.map((item,index)=>
        <ul key ={item._id}>
        <li>{index}</li>
        <li>{item.productName}</li>
        <li>{item.price}</li>
        <li>{item.catogory}</li>
        <li>{item.company}</li>
        <li><button onClick={()=>deleteproduct(item._id)}>Delete</button></li>
        </ul>
    )}
    </div>
  )
}

export default ProductList 