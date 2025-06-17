'use client';

import { FaEdit, FaVideo, FaUser } from 'react-icons/fa';

export default function MySpecialties() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4"
      style={{
        backgroundImage: "url('/images/bg-overlay.jpg')", 
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <h5 className="text-sm tracking-widest text-[#e0c840] mb-2">ARSLAN EDIT'S</h5>

        <h3 className="text-3xl md:text-4xl font-semibold mb-4">MY SPECIALTIES</h3>

        <p className="text-gray-200 max-w-2xl mx-auto mb-12">
          Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel dolor pulvinar bibendum. 
          Curabitur molestie, nisl quis porta laoreet, est ex pellentesque orci.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
            <div className="text-[#e0c840] text-4xl mb-4 mx-auto justify-center flex">
              <FaEdit />
            </div>
            <h5 className="text-lg font-semibold text-white mb-1">VIDEO EDITING</h5>
            <p className="text-sm text-gray-200">Editor</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
            <div className="text-[#e0c840] text-4xl mb-4 mx-auto justify-center flex">
              <FaVideo />
            </div>
            <h5 className="text-lg font-semibold text-white mb-1">CONTENT PRODUCTION</h5>
            <p className="text-sm text-gray-200">Content</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
            <div className="text-[#e0c840] text-4xl mb-4 mx-auto justify-center flex">
              <FaUser />
            </div>
            <h5 className="text-lg font-semibold text-white mb-1">COMMUNICATION</h5>
            <p className="text-sm text-gray-200">Techniques</p>
          </div>
        </div>
      </div>
    </section>
  );
}
