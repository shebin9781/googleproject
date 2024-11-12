import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SERVER_URL } from '../allAPi';

function Dashboard() {
  const [userdata,setUserdata] =useState({})
  const Navigate = useNavigate()
  console.log("respones",userdata);
  const getUser =async()=>{
    try {
      const response = await axios.get(`${SERVER_URL}/login`,{withCredentials:true});
      

      setUserdata(response.data.user)
      
    }catch(err){
      console.log("err",err);
      
    }
  }

  useEffect(()=>{
    getUser()
    
  },[])

  const handleLogout = ()=>{
    localStorage.removeItem
    Navigate('/')
  }

  return (
    <>
    <div>
      <h1>Welcome {userdata?.displayName}</h1>
      <h3>Email:{userdata?.email}</h3>
      <img className='mb-5' src={userdata?.image} alt={userdata?.email} />
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  

</>
  )
}

export default Dashboard