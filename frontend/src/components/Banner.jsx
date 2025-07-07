import React from 'react'

const Banner = () => {
  return (
    <div>
       <div className="min-h-[60vh] bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-blue-400 rounded-2xl shadow-2xl p-8 text-center">
        <h1 className="text-white text-5xl md:text-5xl font-bold leading-tight mb-12">
          Start your success journey<br />
          with us today.
        </h1>
        
        <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 transform">
          Get Started
        </button>
      </div>
    </div>
    </div>
  )
}

export default Banner
