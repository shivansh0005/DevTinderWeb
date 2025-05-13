import React from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({user}) => {
  console.log(user.firstName);
  
  console.log(user.about);
  const {firstName, lastName, age, photoUrl,gender,About,_id} = user;
const dispatch=useDispatch();
  const handleSentRequest=async(status,userId)=>{
  
try{
  const res=await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,{},{
  withCredentials:true,
  }

)

dispatch(removeUserFromFeed(userId));

}
catch(err){

}


  }
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={photoUrl}
      alt="Photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName}</h2>
    { age && gender &&<p>{age+","+gender}</p> }
    <p>{About}</p>
  
    <div className="card-actions justify-center m-4">
    <button className="btn btn-primary"onClick={()=>handleSentRequest("ignored",_id)}>Ignore</button>
      <button className="btn btn-secondary"onClick={()=>handleSentRequest("intrested",_id)}>Interested</button>
    </div>
  </div>
</div>


    </div>
  )
}

export default UserCard
