import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from '../component/newComponent/UserTable';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import Feedback from '../component/newComponent/Feedback';

// const reviews = [
// {
//   title: 'Grand Plaza Serviced Apartments',
//   date: 'April 5, 2019',
//   content: 'Our stay was pleasant and welcoming. We stayed in an apartment meant for 3 adults with kitchen facilities. The cleaning services were superb. We liked the laundry and kitchen cleaning services on top of the regular cleaning services.',
//   rating: 5
// },
// {
//   title: 'Three-Hour South Beach Lunch Tour',
//   date: 'April 5, 2019',
//   content: 'Our stay was pleasant and welcoming. We stayed in an apartment meant for 3 adults with kitchen facilities. The cleaning services were superb. We liked the laundry and kitchen cleaning services on top of the regular cleaning services.',
//   rating: 4
// },
// {
//   title: '7 Night Western Caribbean Cruise',
//   date: 'April 5, 2019',
//   content: 'Our stay was pleasant and welcoming. We stayed in an apartment meant for 3 adults with kitchen facilities. The cleaning services were superb. We liked the laundry and kitchen cleaning services on top of the regular cleaning services.',
//   rating: 5
// },
// {
//   title: 'Two Hour Walking Tour of Manhattan',
//   date: 'April 5, 2019',
//   content: 'Our stay was pleasant and welcoming. We stayed in an apartment meant for 3 adults with kitchen facilities. The cleaning services were superb. We liked the laundry and kitchen cleaning services on top of the regular cleaning services.',
//   rating: 4

// },
// ];
const Dashboard = () => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:4000/api/users');
  //       setUsers(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error.message);
  //       setLoading(false);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error}</p>;
 
  return (
    <div> 
      {/* <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <div className="w-full max-w-6xl mx-auto p-8">
          <h1 className="text-3xl font-bold text-center mb-6 text-sky-900">My Reviews</h1>
          <div className="bg-secondary h-0.5 mx-auto mb-4" style={{ width: '361px' }}></div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-sky-900">Reviews</h2>
            <p className="text-gray-600 mb-6">Showing 1-4 of 18 results</p>
            {reviews.map((review, index) => (
              <div key={index} className="mb-6 p-4 border-b">
                <div className="flex items-center mb-2">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    alt="Reviewer"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-sky-900">{review.title}</h3>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {Array(review.rating).fill().map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.685a1 1 0 00.95.69h3.867c.969 0 1.371 1.24.588 1.81l-3.122 2.266a1 1 0 00-.363 1.118l1.2 3.685c.3.921-.755 1.688-1.54 1.118l-3.122-2.266a1 1 0 00-1.175 0l-3.122 2.266c-.784.57-1.84-.197-1.54-1.118l1.2-3.685a1 1 0 00-.363-1.118L2.142 8.412c-.784-.57-.38-1.81.588-1.81h3.867a1 1 0 00.95-.69l1.2-3.685z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700">{review.content}</p>
              </div>
            ))}
            <div className="flex justify-between items-center mt-4">
              <button className="text-sky-900">&lt; Previous</button>
              <div className="flex space-x-2">
                <button className="text-sky-900">1</button>
                <button className="text-sky-900">2</button>
                <button className="text-sky-900">3</button>
              </div>
              <button className="text-sky-900">Next &gt;</button>
            </div>
          </div>
        </div>
      </div>
      <UserTable users={users} /> Pass users data to UserTable component */}
      <Feedback/>
      </div>
  )
}

export default Dashboard