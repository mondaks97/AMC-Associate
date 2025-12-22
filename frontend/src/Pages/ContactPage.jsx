import React from 'react'
import { assets } from '../assets/assets'
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt="Contact"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600">Our Office</p>

          <div className="flex items-start gap-3 text-gray-500">
  <HiOutlineLocationMarker className="text-lg mt-0.5 text-[#880000]" />
  <p>
    Suite 1805–1807, Cityland 10 Tower 2, H.V. Dela Costa St.,
    Makati City 1227, Philippines
  </p>
</div>

<div className="flex items-center gap-3 text-gray-500">
  <HiOutlinePhone className="text-lg text-[#880000]" />
  <p>Tel: +63 2 8841 0462</p>
  <HiOutlinePhone className="text-lg text-[#880000]" />
  <p>Tel: +63 2 8893 0287</p>
</div>



<div className="flex items-center gap-3 text-gray-500">
  <HiOutlineMail className="text-lg text-[#880000]" />
  <p>Email: info@amc</p>
</div>

          <p className="font-semibold text-lg text-gray-600">Career at <span className="text-[#000099] font-bold">AMC</span><span className="text-[#880000] font-bold">  & ASSOCIATES</span></p>
          <p className="text-gray-500">
            Learn more about opportunities. Lorem ipsum dolor sit amet.
          </p>

          <button className="border border-[#880000] px-8 py-4 text-sm hover:bg-[#880000] hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
