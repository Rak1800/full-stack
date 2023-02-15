import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Nav() {
  let auth = localStorage.getItem("users")
  const navigate = useNavigate()
  let logout = () => {
    localStorage.clear()
    navigate('/signUp')
  }

  return (
    <div >
     
      {auth ?
        <ul className='nav'>
           <img 
           alt='logo'
        className='logo'
      src='https://t4.ftcdn.net/jpg/03/31/93/85/360_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg' />
          <li><Link to="/">Product</Link></li>
          <li><Link to="/add">Add Product</Link></li>
          <li><Link to="/update">Update Product</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li className='logout-right'><Link onClick={logout} to="/login">Logout ({JSON.parse(auth).data.name})</Link></li>
        </ul> :
        <ul className='nav nav-right' >
           <img 
           alt='logo'
        className='logo'
      src='https://t4.ftcdn.net/jpg/03/31/93/85/360_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg' />
          <li><Link to="/signup">SignUp</Link></li>
        </ul>}
    </div>
  )
}

export default Nav;

