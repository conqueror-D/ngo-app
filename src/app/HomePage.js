import React from 'react';

const HomePage = () => {
    return (
        <div className="bg-blue-200 min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4 text-blue-800">NGO Name</h1>
                <p className="text-xl text-gray-700 mb-8">Empowering Lives, Building Futures</p>
                <p className="text-lg text-gray-800 mb-8">
                    At Dharavi Diaries, we believe in providing education to every child, regardless of their background.
                    Join us in our mission to create a brighter future for the next generation.
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                    Donate Now
                </button>
            </div>
        </div>
    );
};

export default HomePage;
