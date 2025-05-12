import React, { use } from 'react'
import { useEffect } from 'react';

import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addConnection } from '../utils/connectionSlice';
import { useSelector } from 'react-redux';
const Connections = () => {
    const connections=useSelector((store)=>store.connections);
   
    const dispatch=useDispatch();
    const fetchConnections=async()=>{
        try{
            const res=await axios.get(BASE_URL+"/user/connections",{withCredentials:true});
           console.log(res.data.data[0].firstName); 
           dispatch(addConnection(res.data.data));
        }
        catch(err){
            console.log(err);
        }
    } 
    useEffect(()=>{{
        fetchConnections();
    }},[]); 
    if(!connections) return ;
    if(connections.length===0) return <h1>No Connections Found !!</h1>

  return (
    <div className=" text-center my-10">
    <h1 className="text-bold text-white text-3xl">Connections</h1>

   {connections.map((connection)=>{
    const{_id,firstName,lastName,photoUrl,age,gender,About}=connection;
    console.log(About);
    return (
    <div  key={_id}className=" flex  m-4 p-4  rounded-lg bg-base-300 max-w-1/2 mx-auto">
<div><img src={photoUrl} className="w-20 h-20 rounded-full" alt="Photo" /></div>
<div className="text-left mx-4">
    <h2 className="font-bold text-xl">{firstName+" "+lastName}</h2>
   {age&&gender&& <p>{age+","+gender}</p>
   }
<p>{About}</p>
</div>
    </div>
   )})}

</div >
  );
}

export default Connections
