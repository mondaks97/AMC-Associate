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






 <div className="min-h-screen w-full max-w-7xl mx-auto p-4 md:p-8">
      {/* Header Section with Contact Info */}
      <div className="mb-8 md:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-25">
          {/* Left side - Title and description */}
          <div className="flex-shrink-0 lg:max-w-md">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-md">
              We'd love to hear from you! Whether you have questions, need support, or want to learn more about our services, our team is here to help.
            </p>
          </div>

          {/* Right side - Contact Information aligned with title */}
          <div className="flex flex-col sm:flex-row lg:flex-row gap-6 lg:gap-45 lg:items-start lg:mt-0">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Address</h3>
                <p className="text-gray-600">
                  Asklepios Tower<br />
                  Makima Street 251
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Contact Info</h3>
                <p className="text-gray-600">
                  +123 456 789<br />
                  help@nightingale.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80 lg:h-96">
          {/* Google Maps iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3bb5a4b%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1609459200000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>

          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <button
              onClick={handleZoomIn}
              className="w-10 h-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center"
            >
              <Plus className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleZoomOut}
              className="w-10 h-10 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center"
            >
              <Minus className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Map Overlay - You can customize this */}
          <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3 max-w-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Your Location</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Asklepios Tower, Makima Street 251
            </p>
          </div>
        </div>
      </div>
    </div>