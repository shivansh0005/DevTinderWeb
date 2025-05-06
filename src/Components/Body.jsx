import React, { use } from 'react'
import NavBar from './NavBar'
import { useNavigate, Outlet } from 'react-router-dom'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { addUser } from '../utils/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
const Body = () => {
  const  dispatch = useDispatch();
  const  navigate=useNavigate();
  const userData=useSelector((store)=>store.user);

  const fetchUser=async()=>{
    if(userData)return ;
    try{
    const user=await axios.get(BASE_URL+"/profile/view",{withCredentials:true});
dispatch(addUser(user.data));
  }
  catch(err){
    if(!userData){
      navigate("/login")
    }
   
  
  }
    
  }

  useEffect(()=>{
  fetchUser();
  },[])
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Body
