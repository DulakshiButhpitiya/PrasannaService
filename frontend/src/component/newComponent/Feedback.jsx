import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [feedbackData, setFeedbackData] = useState([]);
  
    useEffect(() => {
      const fetchFeedbackData = async () => {
        try {
          const response = await axios.get('http://localhost:4000/api/feedback');
          setFeedbackData(response.data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      fetchFeedbackData();
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-sky-900">Feedback Admin Panel</h1>
        <div className="bg-secondary h-0.5 mx-auto mb-4" style={{ width: '361px' }}></div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-sky-900">Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedbackData.map((feedback, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">{feedback.name}</h3>
                <p className="text-gray-700">{feedback.message}</p>
                <p className="text-gray-500 mt-2">Email: {feedback.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
