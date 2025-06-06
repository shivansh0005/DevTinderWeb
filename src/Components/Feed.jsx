import React, { use } from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import { useEffect } from 'react';
import UserCard from './UserCard';


const Feed = () => {

  const feed=useSelector((store)=>store.Feed);
const dispatch=useDispatch();

  const getFeed=async()=>{
    if(feed) return;

    try{
      const res=await axios.get(BASE_URL+"/Feed",{withCredentials:true});
 
    dispatch(addFeed(res.data))
    }
    catch(err){

    }
  }

  useEffect(()=>{
    getFeed();
        },[])
       if(feed===null) return (
          <div className="flex justify-center my-10 mb-30">
            <h1 className="text-3xl font-bold text-white">No Feed Available</h1>
          </div>
        ) 
  if(feed.length===0) return (
          <div className="flex justify-center my-10 mb-30">
            <h1 className="text-3xl font-bold text-white">No Feed Available</h1>
          </div>
        )
  return ( feed &&(
 

    <div className="flex justify-center my-10 mb-30">
     <UserCard user= {feed[0]}/>
   
    </div>
  )
)
}

export default Feed
