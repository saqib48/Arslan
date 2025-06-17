'use client';

export default function ExperienceSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-white"
      style={{
        backgroundImage: "url('/bg-overlay.jpg')", 
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="mb-4">
            <h3 className="text-[#e0c840] text-2xl font-bold">01</h3>
            <h4 className="text-3xl font-semibold">Work Experience</h4>
          </div>

          <div className="mb-10">
            <h6 className="text-sm text-[#e0c840]">2004 - 2008</h6>
            <h5 className="text-xl font-semibold">Videographer - Alexander Durham Studio</h5>
            <p className="text-[#b9b4b4] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque...
            </p>
          </div>

          <div>
            <h6 className="text-sm text-[#e0c840]">2008 - 2015</h6>
            <h5 className="text-xl font-semibold">Video Editor - Rometheme Studio</h5>
            <p className="text-[#b9b4b4] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque...
            </p>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h3 className="text-[#e0c840] text-2xl font-bold">02</h3>
            <h4 className="text-3xl font-semibold">Education</h4>
          </div>

          <div className="mb-10">
            <h6 className="text-sm text-[#e0c840]">1999 - 2004</h6>
            <h5 className="text-xl font-semibold">Telkom University - Indonesia</h5>
            <p className="text-[#b9b4b4] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque...
            </p>
          </div>

          <div>
            <h6 className="text-sm text-[#e0c840]">2004 - 2008</h6>
            <h5 className="text-xl font-semibold">Video Editing Course - Singapore</h5>
            <p className="text-[#b9b4b4] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
