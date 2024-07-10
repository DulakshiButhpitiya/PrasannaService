// import React from 'react'
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUserDetails, updateUserDetails, deleteUser } from './';
// import { useParams } from 'react-router-dom';

// const UserProfile = () => {
//     const { email } = useParams();
//     const dispatch = useDispatch();
  
//     const userDetails = useSelector((state) => state.userDetails);
//     const { loading, error, user } = userDetails;
  
//     const userUpdate = useSelector((state) => state.userUpdate);
//     const { success: updateSuccess } = userUpdate;
  
//     const userDelete = useSelector((state) => state.userDelete);
//     const { success: deleteSuccess } = userDelete;
  
//     const [editMode, setEditMode] = useState(false);
//     const [formData, setFormData] = useState({
//       firstname: '',
//       lastname: '',
//       email: '',
//       number: '',
//       address: ''
//     });
  
//     useEffect(() => {
//       if (!user || user.email !== email || updateSuccess || deleteSuccess) {
//         dispatch(getUserDetails(email));
//       } else {
//         setFormData(user);
//       }
//     }, [dispatch, email, user, updateSuccess, deleteSuccess]);
  
//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     const handleUpdate = () => {
//       dispatch(updateUserDetails(formData));
//       setEditMode(false);
//     };
  
//     const handleDelete = () => {
//       dispatch(deleteUser(email));
//     };
  
//     return (
//         <div className="container mx-auto p-4">
//         {loading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p>{error}</p>
//         ) : (
//           <div className="row">
//             <div className="col-md-4 mb-4">
//               <div className="card text-white h-100">
//                 <div className="card-body">
//                   <h3>User Profile</h3>
//                   <p><strong>Name:</strong> {user.firstname} {user.lastname}</p>
//                   <p><strong>Email:</strong> {user.email}</p>
//                   <p><strong>Phone Number:</strong> {user.number}</p>
//                   <p><strong>Address:</strong> {user.address}</p>
//                   <button onClick={() => setEditMode(true)} className="btn btn-primary">Edit</button>
//                   <button onClick={handleDelete} className="btn btn-danger ml-2">Delete</button>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-8">
//               {editMode && (
//                 <div className="card text-white h-100">
//                   <div className="card-body">
//                     <h3>Edit User Profile</h3>
//                     <input
//                       type="text"
//                       name="firstname"
//                       value={formData.firstname}
//                       onChange={handleInputChange}
//                       placeholder="First Name"
//                       className="form-control mt-2"
//                     />
//                     <input
//                       type="text"
//                       name="lastname"
//                       value={formData.lastname}
//                       onChange={handleInputChange}
//                       placeholder="Last Name"
//                       className="form-control mt-2"
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder="Email"
//                       className="form-control mt-2"
//                       disabled
//                     />
//                     <input
//                       type="text"
//                       name="number"
//                       value={formData.number}
//                       onChange={handleInputChange}
//                       placeholder="Phone Number"
//                       className="form-control mt-2"
//                     />
//                     <input
//                       type="text"
//                       name="address"
//                       value={formData.address}
//                       onChange={handleInputChange}
//                       placeholder="Address"
//                       className="form-control mt-2"
//                     />
//                     <button onClick={handleUpdate} className="btn btn-success mt-3">Update</button>
//                     <button onClick={() => setEditMode(false)} className="btn btn-secondary mt-3 ml-2">Cancel</button>
//                  </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//   )
// }

// export default UserProfile