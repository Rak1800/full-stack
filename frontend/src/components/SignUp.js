import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    let auth = localStorage.getItem("users")
    if (auth) {
      navigate("/login")
    }
  })

  const signUpData = async (e) => {
    console.log(name, phone, email, pass)
    //   // ============use aqxios library======
    //   e.preventDefault() 
    //  axios.post('http://localhost:5000/register',{
    //     name:name,
    //     phone:phone,
    //     email:email,   
    //     password:pass
    //   }).then(()=>navigate('/'))
    //   .catch(err=>console.log(err))    

    // ====================use fetch method===========
    let objectData = { name: name, phone: phone, email: email, password: pass }

    let result = await fetch('/register', {
      method: 'POST',
      body: JSON.stringify(objectData),
      headers: {
        "content-type": "application/json"
      }
    })
    result = await result.json()
    console.log(result)
    if (result) {
      alert(`${result.message}`)
      navigate('/login')
    } else {

    }
  }
  return (
    <>
      <form className='register'>
        <h1>Register</h1>
        <input className='inputbox' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
        <input className='inputbox' type='number' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter Your phone  number' />
        <input className='inputbox' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
        <input className='inputbox' type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Enter Your Password' />
        <button className='btn' type='button' onClick={signUpData} >SignUp</button>
        <button className='logbtn' type='button'><Link to="/login">login</Link></button>
      </form>
    </>
  )
}
