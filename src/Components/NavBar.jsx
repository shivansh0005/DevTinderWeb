
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useState } from 'react';

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const  navigate=useNavigate();
  const dispatch=useDispatch();
// const [userr,setUser]=useState("Please Login") 
// const[photooUrl,setPhotoUrl]=useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-978409_1280.png")
  
const handleLogout=async()=>{

try{

  await axios.post(BASE_URL+"/logout",{},{withCredentials:true});
dispatch(removeUser())
  return navigate("/login")

}
catch(err){

}

}


  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/Feed" className="btn btn-ghost text-xl">👨‍💻DevTinder</Link>
      </div>

      <div className="flex items-center gap-4 pr-4">
        {user!= null && (

          
          <div className="dropdown dropdown-end flex items-center gap-2 relative">
            <p className="text-sm font-medium">Welcome, {user.firstName}</p>

            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Error" src={user.photoUrl}/>
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content absolute top-14 w-52 bg-base-100 p-2 shadow rounded-box z-50"
            >
              <li>
                <Link to="/profile"  className="justify-between">
                  Profile
                  {/* <span className="badge">New</span> */}
                </Link>
              </li>
              <li><Link to="/user/connections">Connections</Link></li>
             
              <li><Link to="/user/request/recieved">Requests</Link></li>
              <li><a onClick={handleLogout}>Logout</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavBar;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { BASE_URL } from '../utils/constant';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { removeUser } from '../utils/userSlice';

// const NavBar = () => {
//   const user = useSelector((store) => store.user); // Get user from Redux
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogout = async () => {
//     try {
//       await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
//       dispatch(removeUser());
//       navigate("/login");
//     } catch (err) {
//       console.error("Logout failed", err);
//     }
//   };

//   return (
//     <div className="navbar bg-base-300 shadow-sm">
//       <div className="flex-1">
//         <Link to="/Feed" className="btn btn-ghost text-xl">👨‍💻DevTinder</Link>
//       </div>

//       <div className="flex items-center gap-4 pr-4">
//         {user ? (
//           <div className="dropdown dropdown-end flex items-center gap-2 relative">
//             <p className="text-sm font-medium">Welcome, {user.firstName}</p>

//             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="User Avatar"
//                   src={user.photoUrl || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-978409_1280.png"}
//                 />
//               </div>
//             </div>

//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content absolute top-14 w-52 bg-base-100 p-2 shadow rounded-box z-50"
//             >
//               <li>
//                 <Link to="/profile" className="justify-between">
//                   Profile
//                   <span className="badge">New</span>
//                 </Link>
//               </li>
//               <li><a>Settings</a></li>
//               <li><a onClick={handleLogout}>Logout</a></li>
//             </ul>
//           </div>
//         ) : (
//           <p className="text-sm font-medium">Please Login</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;