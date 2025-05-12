import React, { use } from 'react'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addRequests } from '../utils/RequestSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Requests = () => {
  const requests=useSelector((store)=>store.request);
  console.log(requests);
  const dispatch=useDispatch();
  const fetchRequests=async()=>{
    try{
      const res=await axios.get(BASE_URL+ "/user/request/recieved",{         
        withCredentials:true
      });
      console.log(res.data.data)   
      dispatch(addRequests(res.data.data));
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    fetchRequests();
  }, []);
  
  if(!requests) return ;
  if(requests.length===0) return <h1>No Requests Found !!</h1>

// return (
//   <div className=" text-center my-10">
//   <h1 className="text-bold text-white text-3xl">Requests</h1>

//  {requests.map((request)=>{
//   const{firstName,lastName,photoUrl,age,gender,About}=request.fromUserId;

//   return (

//   <div className=" flex  m-4 p-4  rounded-lg bg-base-300 max-w-1/2 mx-auto">
// <div><img src={photoUrl} className="w-20 h-20 rounded-full" alt="Photo" /></div>
// <div className="text-left mx-4">
//   <h2 className="font-bold text-xl">{firstName+" "+lastName}</h2>
//  {age&&gender&& <p>{age+","+gender}</p>
//  }

// <p>{About}</p>
// </div>
//   </div>
//  )})}

// </div >
// );
return (
  <div className="text-center my-10 px-4">
    <h1 className="font-bold text-white text-3xl mb-6">Requests</h1>

    {requests.map((request) => {
      const {_id, firstName, lastName, photoUrl, age, gender, About } = request.fromUserId;

      return (
        <div
          key={_id} 
          className="flex flex-col sm:flex-row items-center sm:items-start m-4 p-4 rounded-lg bg-base-300 max-w-full sm:max-w-md lg:max-w-lg mx-auto shadow-md"
        >
       
          <div className="flex-shrink-0">
            <img
              src={photoUrl}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
              alt="Profile"
            />
          </div>

          
          <div className="text-left sm:ml-4 mt-4 sm:mt-0">
            <h2 className="font-bold text-xl text-white">{firstName + " " + lastName}</h2>
            {age && gender && (
              <p className="text-gray-400">{age + ", " + gender}</p>
            )}
            <p className="text-gray-300 mt-2">{About}</p>
            <div className="my-2">
            <button className="btn btn-active btn-primary mx-2">Reject</button>
            <button className="btn btn-active btn-secondary mx-2">Accept</button>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);
}

export default Requests
