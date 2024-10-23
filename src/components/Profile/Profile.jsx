"use client";

import React from 'react';

const Profile = () => {
  return (
    <div className="w-full h-full flex flex-col items-start gap-6 p-6 bg-white shadow-none rounded-lg">
      <div className="w-16 h-16 p-2 bg-opacity-90 bg-white rounded-full flex justify-center items-center">
        <img
          className="w-15 h-15 rounded-full"
          src="https://via.placeholder.com/60x60"
          alt="Profile"
        />
      </div>
      <div className="text-black text-3xl font-bold leading-9">
        Software engineer, father, and believer
      </div>
      <div className="text-gray-600 text-base leading-7">
      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
      </div>
      <div className="bg-gray-100 p-2 rounded-md flex gap-3">
        <button onClick={() => handleClick(1)} className="w-6 h-6 flex items-center justify-center focus:outline-none">
          <div className="w-5 h-5 bg-gray-600"></div>
        </button>
        <button onClick={() => handleClick(2)} className="w-6 h-6 flex items-center justify-center focus:outline-none">
          <div className="w-5 h-5 bg-gray-600"></div>
        </button>
        <button onClick={() => handleClick(3)} className="w-6 h-6 flex items-center justify-center focus:outline-none">
          <div className="w-5 h-5 bg-gray-600"></div>
        </button>
      </div>
    </div>
  );
};

export default Profile;
