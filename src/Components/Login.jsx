import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';

const Login = () => {


  const [email,setEmailId]=useState("Lakha2@gmail.com");
  const [password,setPassword]=useState("Lakha@1231");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleLogin=async()=>{
   
    try{
 const res=await axios.post(BASE_URL+"/Login",{
email,password

  },{withCredentials:true});
  console.log(res);
  dispatch(addUser(res.data))
  return navigate("/Feed")
} 

catch(err){

  console.log(err);
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
  <input type="text"value={email} placeholder="" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
    setEmailId(e.target.value)
  }}/>
</div>

   </div>
   <div >
   <div className="form-control w-full max-w-xs my-2">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input type="text"value={password} placeholder="" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
    setPassword(e.target.value);
  }}/>
</div>

   </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login



// import React from 'react';

// const Login = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-base-300">
//       <div className="card bg-base-200 w-full max-w-md shadow-lg rounded-lg p-6">
//         <div className="card-body">
//           {/* <h2 className="card-title text-center text-2xl font-bold text-gray-800 mb-6">Login</h2> */}
//           <h2 className="card-title justify-center">Login</h2>
//           <div className="form-control w-full mb-6">
//             <label className="label mb-2">
//               <span className="label-text text-gray-700">Email Id</span>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>
//           <div className="form-control w-full mb-6">
//             <label className="label mb-2">
//               <span className="label-text text-gray-700">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               className="input input-bordered w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>
//           <div className="card-actions justify-center mt-4">
//             <button className="btn btn-primary w-3/4 py-3 rounded-lg text-white font-semibold text-lg hover:shadow-lg">
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
