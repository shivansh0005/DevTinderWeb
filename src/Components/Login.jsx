import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';

const Login = () => {


  const [email,setEmailId]=useState("");
  const [password,setPassword]=useState("");
  const[error,setError]=useState("")
  const dispatch=useDispatch();
  const navigate=useNavigate(); 

  const handleLogin=async()=>{
   
    try{
 const res=await axios.post(BASE_URL+"/login",{
email,password

  },{withCredentials:true});

  dispatch(addUser(res.data))
  // localStorage.setItem("user", JSON.stringify(res.data));
  return navigate("/Feed")
} 

catch(err){
  setError("Invalid Credentials")


}
    

}
  
  return (
    <div className="flex justify-center my-50">
   <div className="card bg-base-300 w-96 shadow-sm">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
   <div >
   <div className="form-control w-full max-w-xs my-2">
  <label className="label">
    <span className="label-text">Email Id</span>
  </label>
  <input type="text"value={email} placeholder="Enter Your mail" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
    setEmailId(e.target.value)
  }}/>
</div>

   </div>
   <div >
   <div className="form-control w-full max-w-xs my-2">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input type="text"value={password} placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
    setPassword(e.target.value);
  }}/>
</div>

   </div>
   { <p className="text-red-500">{error}</p> }
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login

