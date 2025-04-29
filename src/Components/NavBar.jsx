// import React, { use } from 'react'
// import { useSelector } from 'react-redux'
// // import { useDispatch } from 'react-redux'

// const NavBar = () => {
//   const user=useSelector((store)=>store.user)
  
//   console.log(user)
//   return (
    
//       <div className="navbar bg-base-300 shadow-sm">
//   <div className="flex-1">
//     <a className="btn btn-ghost text-xl">👨‍💻DevTinder</a>
//   </div>
//  { <div className="flex gap-2">
//   {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
//     <div className="dropdown dropdown-end mx-5 flex item-center ">
   
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="User Avatar"
//             src={user.data.photoUrl}  />
//         </div>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         <li>
//           <a className="justify-between">
//             Profile
//             <span className="badge">New</span>
//           </a>
//         </li>
//         <li><a>Settings</a></li>
//         <li><a>Logout</a></li>
//       </ul>
//     </div>

//   </div>}
// </div>
  
//   );
// }

// export default NavBar

// import React from 'react'
// import { useSelector } from 'react-redux'

// const NavBar = () => {
//   const user = useSelector((store) => store.user)

//   return (
//     <div className="navbar bg-base-300 shadow-sm">
//       <div className="flex-1">
//         <a className="btn btn-ghost text-xl">👨‍💻DevTinder</a>
//       </div>

//       <div className="flex items-center gap-4 pr-4">
//         {user && (
//           <div className="dropdown dropdown-end flex items-center gap-2">
//             <p className="text-sm font-medium">Welcome, {user.data.firstName}</p>

//             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 rounded-full">
//                 <img alt="User Avatar" src={user.data.photoUrl} />
//               </div>
//             </div>

//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content mt-3 w-52 bg-base-100 p-2 shadow rounded-box z-50"
//             >
//               <li>
//                 <a className="justify-between">
//                   Profile
//                   <span className="badge">New</span>
//                 </a>
//               </li>
//               <li><a>Settings</a></li>
//               <li><a>Logout</a></li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default NavBar


import React from 'react';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">👨‍💻DevTinder</a>
      </div>

      <div className="flex items-center gap-4 pr-4">
        {user && (
          <div className="dropdown dropdown-end flex items-center gap-2 relative">
            <p className="text-sm font-medium">Welcome, {user.data.firstName}</p>

            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.data.photoUrl} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content absolute top-14 w-52 bg-base-100 p-2 shadow rounded-box z-50"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;