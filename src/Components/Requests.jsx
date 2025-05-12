// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { BASE_URL } from '../utils/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import { addRequests } from '../utils/RequestSlice';

// const Requests = () => {
//   const requests = useSelector((store) => store.request);
//   const dispatch = useDispatch();

//   // Fetch all received requests
//   const fetchRequests = async () => {
//     try {
//       const res = await axios.get(BASE_URL + "/user/request/recieved", {
//         withCredentials: true,
//       });
//       dispatch(addRequests(res.data.data));
//     } catch (err) {
//       console.error("Failed to fetch requests:", err);
//     }
//   };

//   // Handle review action (accept/reject)
//   const reviewRequest = async (status, _id) => {
//     try {
//       await axios.post(`${BASE_URL}/request/review/${status}/${_id}`, {}, {
//         withCredentials: true,
//       });
//       // Refetch requests after action
//       fetchRequests();
//     } catch (err) {
//       console.error("Failed to review request:", err);
//     }
//   };

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   if (!requests || requests.length === 0) {
//     return <h1 className="text-white text-center mt-10 text-2xl">No Requests Found !!</h1>;
//   }

//   return (
//     <div className="text-center my-10 px-4">
//       <h1 className="font-bold text-white text-3xl mb-6">Requests</h1>

//       {requests.map((request) => {
//         const { _id, firstName, lastName, photoUrl, age, gender, About } = request.fromUserId;

//         return (
//           <div
//             key={_id}
//             className="flex flex-col sm:flex-row items-center sm:items-start m-4 p-4 rounded-lg bg-base-300 max-w-full sm:max-w-md lg:max-w-lg mx-auto shadow-md"
//           >
//             <div className="flex-shrink-0">
//               <img
//                 src={photoUrl}
//                 className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
//                 alt="Profile"
//               />
//             </div>

//             <div className="text-left sm:ml-4 mt-4 sm:mt-0">
//               <h2 className="font-bold text-xl text-white">{firstName + " " + lastName}</h2>
//               {age && gender && (
//                 <p className="text-gray-400">{age + ", " + gender}</p>
//               )}
//               <p className="text-gray-300 mt-2">{About}</p>
//               <div className="my-2">
//                 <button
//                   className="btn btn-active btn-primary mx-2"
//                   onClick={() => reviewRequest("rejected", request._id)}
//                 >
//                   Reject
//                 </button>
//                 <button
//                   className="btn btn-active btn-secondary mx-2"
//                   onClick={() => reviewRequest("accepted", request._id)}
//                 >
//                   Accept
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Requests;


import React, { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../utils/RequestSlice';

const Requests = () => {
  const requests = useSelector((store) => store.request);
  const dispatch = useDispatch();

  // Accept or reject request and update list
  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(`${BASE_URL}/request/review/${status}/${_id}`, {}, {
        withCredentials: true,
      });

      // Filter out the handled request
      const updatedRequests = requests.filter((req) => req._id !== _id);
      dispatch(addRequests(updatedRequests));

      // Optional toast (uncomment if using)
      // alert(`Request ${status} successfully.`);
    } catch (err) {
      console.error("Failed to review request:", err);
    }
  };

  // Fetch all received requests on mount
  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/request/recieved`, {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error("Failed to fetch requests:", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests || requests.length === 0)
    return <h1 className="text-center text-white text-2xl my-10">No Requests Found!!</h1>;

  return (
    <div className="text-center my-10 px-4">
      <h1 className="font-bold text-white text-3xl mb-6">Requests</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, About } = request.fromUserId;

        return (
          <div
            key={request._id}
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
                <button
                  className="btn btn-active btn-primary mx-2"
                  onClick={() => reviewRequest("rejected", request._id)}
                >
                  Reject
                </button>
                <button
                  className="btn btn-active btn-secondary mx-2"
                  onClick={() => reviewRequest("accepted", request._id)}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;

