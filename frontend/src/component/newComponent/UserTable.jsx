import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container className="my-4">
      <div className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <Table striped bordered hover responsive className="table-auto">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Number</th>
              <th className="px-4 py-2">Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="bg-white border-b hover:bg-gray-100">
                <td className="border px-4 py-2">{user.firstname}</td>
                <td className="border px-4 py-2">{user.lastname}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.number}</td>
                <td className="border px-4 py-2">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default UserTable;
