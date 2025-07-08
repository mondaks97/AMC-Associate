import { MapPin, Phone } from "lucide-react";
const ContactUs = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8 pt-16 md:pt-25">
      {/* Header Section with Contact Info */}
      <div className="mb-8 md:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-30">
          {/* Left side - Title and description */}
          <div className="flex-shrink-0 lg:max-w-md">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-4">Get In Touch</h1>
            <p className="text-gray-600 text-base md:text-lg max-w-md">
              We'd love to hear from you! Whether you have questions, need support, or want to learn more about our services, our team is here to help.
            </p>
          </div>

          {/* Right side - Contact Information aligned with title */}
          <div className="flex flex-col sm:flex-row lg:flex-row gap-6 lg:gap-45 lg:items-start lg:mt-0">
            {/* Address */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Address</h3>
                <p className="text-gray-600">
                  Asklepios Tower
                  <br />
                  Makima Street 251
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Contact Info</h3>
                <p className="text-gray-600">
                  +123 456 789
                  <br />
                  help@nightingale.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative mt-26">
        <div className="relative bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80 lg:h-96">
          {/* Google Maps iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7723.35394112818!2d121.01467377494839!3d14.560456085921217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9096ec55555%3A0xfc5936b371540697!2sAMC%20%26%20Associates!5e0!3m2!1sen!2sph!4v1751982300441!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>

          {/* Map Overlay - You can customize this */}
          {/* <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3 max-w-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Your Location</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Asklepios Tower, Makima Street 251
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
