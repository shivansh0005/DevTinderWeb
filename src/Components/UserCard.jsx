import React from 'react'

const UserCard = ({user}) => {
  console.log(user.firstName);
  
  console.log(user.about);
  const {firstName, lastName, age, photoUrl,gender,About} = user;

  
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
    <button className="btn btn-primary">Ignore</button>
      <button className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>


    </div>
  )
}

export default UserCard
