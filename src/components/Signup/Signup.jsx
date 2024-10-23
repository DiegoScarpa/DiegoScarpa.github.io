import React from 'react';

const Signup = () => {
  return (
    <div
      className="w-[398px] h-[196px] p-6 bg-white rounded-lg border border-gray-300 flex flex-col justify-start"
    >
      <div className="flex items-center gap-3">
        <div className="relative w-6 h-6">
          <div className="absolute w-5 h-3 bg-gray-100 border border-gray-400" />
        </div>
        <div className="text-gray-900 text-lg font-semibold leading-7">
          Stay up to date
        </div>
      </div>
      <div className="mt-2 text-gray-600 text-sm leading-5">
        Get notified when I publish something new, and unsubscribe at any time.
      </div>
      <div className="flex items-center gap-4 mt-6">
        <div className="flex-1 h-10 px-3 bg-white border border-gray-300 rounded-md flex items-center">
          <div className="text-gray-400 text-sm">Email address</div>
        </div>
        <div className="h-10 px-4 bg-black rounded-md flex items-center justify-center">
          <div className="text-white text-sm font-medium">Join</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
