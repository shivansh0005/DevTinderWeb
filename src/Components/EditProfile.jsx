
import React, { useState } from 'react';
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setabout] = useState(user.about);
  const [error, setError] = useState();
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [showToast,setshowToast]=useState(false);
  const dispatch=useDispatch();
const saveProfile = async() => {
try{


  const res = await axios.post(`${BASE_URL}/profile/edit`, {

    firstName,
    lastName,
    age,
    gender,
    about,
    photoUrl
  }, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  dispatch(addUser(res?.data?.data));
  setshowToast(true);
  setTimeout(() => {
    setshowToast(false);
  }, 2000);
}
catch(err){
setError(err.message);

}

}
  return (
    <>
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-gray-900 p-6 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Form Section */}
      <div className="card bg-base-300 w-full max-w-lg shadow-lg p-8 rounded-lg">
        <div className="card-body">
          <h2 className="card-title justify-center text-3xl font-bold mb-6 text-center text-white">Edit Profile</h2>
          <div className="space-y-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">First Name</span>
              </label>
              <input
                type="text"
                value={firstName}
                placeholder="Enter your first name"
                className="input input-bordered w-full"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Last Name</span>
              </label>
              <input
                type="text"
                value={lastName}
                placeholder="Enter your last name"
                className="input input-bordered w-full"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Age</span>
              </label>
              <input
                type="number"
                value={age}
                placeholder="Enter your age"
                className="input input-bordered w-full"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">about</span>
              </label>
              <textarea
                value={about}
                placeholder="Tell us about yourself"
                className="textarea textarea-bordered w-full"
                onChange={(e) => setabout(e.target.value)}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Gender</span>
              </label>
              <input
                type="text"
                value={gender}
                placeholder="Enter your gender"
                className="input input-bordered w-full"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Photo URL</span>
              </label>
              <input
                type="text"
                value={photoUrl}
                placeholder="Enter your photo URL"
                className="input input-bordered w-full"
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}

          <div className="card-actions justify-center mt-6">
            <button className="btn btn-primary w-full" onClick={saveProfile} >Save Profile</button>
          </div>
        </div>
      </div>

      {/* User Card Section */}
      <div className="card bg-base-300 w-full max-w-sm shadow-lg p-6 rounded-lg">
        <UserCard user={{ firstName, lastName, age, gender, about, photoUrl }} />
      </div>
    </div>

    {showToast && (
      <div className="toast toast-top toast-end z-50">
        <div className="alert alert-success">
          <div>
            <span>Profile updated successfully!</span>
          </div>
        </div>
      </div>
    )}
</>

  );
};

export default EditProfile;