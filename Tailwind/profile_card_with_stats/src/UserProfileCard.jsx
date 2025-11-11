import React from 'react';

const UserProfileCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm mx-auto my-10">
      {/* Header with Nigerian flag colors */}
      <div className="h-24 rounded-t-xl bg-gradient-to-r from-[#008753] via-[#008753] to-white relative">
        {/* Avatar */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
           <img src="/assets/my-image.jpg"// Replace with your image path
    alt="Avatar"
    className="w-24 h-24 rounded-full border-4 border-white object-cover"
  />

        </div>
      </div>

      {/* Profile Details */}
      <div className="pt-16 text-center">
        <h2 className="text-xl font-bold text-gray-800">Halimah Akinoso</h2>
        <p className="text-sm text-gray-500">Software Engineer</p>
        <p className="text-xs text-gray-400">Lagos, Nigeria</p>
      </div>

      {/* Bio Section */}
      <div className="mt-4 text-center px-4">
        <p className="text-sm text-gray-600">
          Passionate about building beautiful and functional web applications.
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex justify-around mt-6 border-t border-b border-gray-200 py-4">
        <div className="text-center">
          <p className="font-bold text-gray-800">1.2K</p>
          <p className="text-xs text-gray-500">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-gray-800">150</p>
          <p className="text-xs text-gray-500">Posts</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-gray-800">5.8K</p>
          <p className="text-xs text-gray-500">Likes</p>
        </div>
      </div>

      {/* Follow Button */}
      <div className="mt-6 text-center">
        <button className="bg-[#008753] text-white py-2 px-6 rounded-full font-semibold hover:bg-green-700 transition duration-300">
          Follow
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
