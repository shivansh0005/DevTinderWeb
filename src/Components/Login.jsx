// import React from 'react'
// import { useState } from 'react';
// import axios from 'axios';
// import { addUser } from '../utils/userSlice';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { BASE_URL } from '../utils/constant';

// const Login = () => {


//   const [email,setEmailId]=useState("");
//   const [password,setPassword]=useState("");
//   const [firstName,setFirstName]=useState("");
//   const [lastName,setLastName]=useState("");
//   const[error,setError]=useState("")
//   const [islogin,setIsLogin]=useState(true);
//   const dispatch=useDispatch();
//   const navigate=useNavigate(); 

//   const handleLogin=async()=>{
   
//     try{
//  const res=await axios.post(BASE_URL+"/login",{
// email,password

//   },{withCredentials:true});

//   dispatch(addUser(res.data))
//   setTimeout(() => {
//   }, 0);
  
//   return window.location.href = "/Feed";
//   // return navigate("/Feed")
// } 

// catch(err){
//   setError("Invalid Credentials")


// }
    

// }
  
//   return (
//     <div className="flex justify-center my-50">
//    <div className="card bg-base-300 w-96 shadow-sm">
//   <div className="card-body">
//     <h2 className="card-title justify-center"> {islogin?"Login":"Signup"}</h2>
//   { !islogin && <div >
//    <div className="form-control w-full max-w-xs my-2">
//   <label className="label">
//     <span className="label-text">First Name</span>
//   </label>
//   <input type="text"value={firstName} placeholder="Enter Your FirstName" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
//     setFirstName(e.target.value)
//   }}/>
// </div>

//    </div>
//    <div >
//    <div className="form-control w-full max-w-xs my-2">
//   <label className="label">
//     <span className="label-text">LastName</span>
//   </label>
//   <input type="text"value={lastName} placeholder="Enter Your Lastname" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
//     setLastName(e.target.value)
//   }}/>
// </div>
//    </div>
   
//    <div >
//    }
//    <div className="form-control w-full max-w-xs my-2">
//   <label className="label">
//     <span className="label-text">Email Id</span>
//   </label>
//   <input type="text"value={email} placeholder="Enter Your mail" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
//     setEmailId(e.target.value)
//   }}/>
// </div>

//    </div>
//    <div >
//    <div className="form-control w-full max-w-xs my-2">
//   <label className="label">
//     <span className="label-text">Password</span>
//   </label>
//   <input type="text"value={password} placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" onChange={(e)=>{
//     setPassword(e.target.value);
//   }}/>
// </div>

//    </div>
//    { <p className="text-red-500">{error}</p> }
//     <div className="card-actions justify-center">
//       <button className="btn btn-primary" onClick={handleLogin}>Login</button>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

// export default Login

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { BASE_URL } from '../utils/constant';

const Login = () => {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [skills, setSkills] = useState([]);
  const [photoUrl, setPhotoUrl] = useState("");
  const [about, setAbout] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      let res;
      if (isLogin) {
        res = await axios.post(`${BASE_URL}/login`, {
          email,
          password
        }, { withCredentials: true });
         
      } else {
        res = await axios.post(`${BASE_URL}/signup`, {
          firstName,
          lastName,
          email,
          password,
          age,
          gender,
          skills,
          photoUrl,
          About: about,
        }, { withCredentials: true });
         
      }
           dispatch(addUser(res.data));
      return window.location.href = "/Feed";


    } catch (err) {
      setError("Invalid Credentials or something went wrong.");
    }
  };

  return (
    <div className="flex justify-center my-20">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLogin ? "Login" : "Signup"}</h2>

          {!isLogin && (
            <>
              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  placeholder="Enter Your First Name"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  placeholder="Enter Your Last Name"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="number"
                  value={age}
                  placeholder="Enter your age"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select
                  className="select select-bordered"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Skills (comma separated, max 5)</span>
                </label>
                <input
                  type="text"
                  value={skills.join(", ")}
                  placeholder="e.g., React, Node, MongoDB"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => {
                    const enteredSkills = e.target.value.split(",").map(skill => skill.trim());
                    setSkills(enteredSkills.slice(0, 5));
                  }}
                />
              </div>

              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  value={photoUrl}
                  placeholder="Enter your photo URL"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </div>

              <div className="form-control w-full max-w-xs my-2">
                <label className="label">
                  <span className="label-text">About</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  value={about}
                  placeholder="Tell something about yourself"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>
            </>
          )}

          <div className="form-control w-full max-w-xs my-2">
            <label className="label">
              <span className="label-text">Email Id</span>
            </label>
            <input
              type="text"
              value={email}
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          <div className="form-control w-full max-w-xs my-2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              value={password}
              placeholder="Enter Your Password"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="card-actions justify-center mt-2">
            <button className="btn btn-primary" onClick={handleAuth}>
              {isLogin ? "Login" : "Signup"}
            </button>
            <button
              className="btn btn-link text-sm"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
