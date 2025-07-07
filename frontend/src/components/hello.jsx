import React from 'react'

const hello = () => {
  return (
   
 <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="relative z-10 py-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-1 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 leading-tight mb-4">Constructing</h1>

            <div className="flex items-start gap-7">
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm mt-4">
                With our expert team and innovative solutions, we're dedicated to delivering high-quality construction projects that exceed expectations.
              </p>

              <div className="flex items-baseline">
                <span className="text-6xl lg:text-8xl font-bold text-gray-900 mr-4">Your</span>
                <span className="text-6xl lg:text-8xl font-bold text-orange-500">Legacy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    
  )
}

export default hello
<section className="bg-white px-6 md:px-12 lg:px-24 py-16">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
           Our Philosophy
          </h2>

          <p className="text-gray-600 mt-6 text-base md:text-lg">
           We dedicate ourselves to providing superior and high-quality services of audit, accounting, tax, and business process outsourcing in a timely, effective, and efficient manner maintaining the highest standards of professional integrity. We consider our responsibility to embrace responsiveness to our client’s requirements for their business, special opportunities, and challenges that confront them. We foster an enjoyable working environment through open communication, mutual respect, teamwork, continuous innovation, and loyalty to perform our tradition of services and leadership.
          </p>

          <button className="mt-8 bg-red-600 hover:bg-blue-600 text-white px-6 py-3 rounded font-medium cursor-pointer">Know more about us</button>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7">
          <div className="relative w-full">
            {/* Image */}
            <img src="https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&w=800&q=80" alt="Construction workers" className="w-full h-full rounded-lg object-cover" />

            {/* Since Badge */}
            <div className="absolute bottom-4 left-4 bg-black text-white px-4 py-2 rounded shadow-lg text-left">
              <span className="text-xs">Since</span>
              <div className="text-3xl font-bold text-white-500">2002</div>
            </div>
          </div>

          {/* Right Info Box */}
          {/* <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-red-600">◎</span> Our mission
              </h3>
              <p className="text-gray-700 text-sm">To provide the most reliable, effective, and efficient services that add value to clients’ businesses, both local and international. </p>
            </div>

            
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <span className="text-red-600">🎯</span> Goal
              </h3>
              <p className="text-gray-700 text-sm">To be the leading firm provider of high-quality services in the field of audit, taxation, accounting, consulting, and business process outsourcing.</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>