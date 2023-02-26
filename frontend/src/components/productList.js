import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ProductList() {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        getproduct()
    },[]);
    
    const userId=JSON.parse(localStorage.getItem('users')).data._id;
   
    const getproduct= async function(){
        let result1= await fetch(`/products/${userId}`)   
        result1=await result1.json()
        if(result1){
       setProducts(result1.data)
        }
    }
    
    const  deleteproduct= async (id)=>{
        console.log(id)
       let result2= await fetch(`/deleteProduct/${id}`,{
        method:'Delete'
       }) 
    result2= await result2.json()
    console.log(result2)
    if(result2){
        alert(`${result2.message}`)
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
    {products?
       products.map((item,index)=>
        <ul key ={item._id}>
        <li>{index}</li>
        <li>{item.productName}</li>
        <li>{item.price}</li>
        <li>{item.catogory}</li>
        <li>{item.company}</li>
        <li><button onClick={()=>deleteproduct(item._id)}>Delete</button>
            <Link to={"/update/"+item._id}><button>update</button></Link>
        </li>
        </ul>
    ):
    <ul>
        <li>No products</li>
    </ul>
    }
    </div>
  )
}

export default ProductList 