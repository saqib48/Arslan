import Link from "next/link";
export default function Portfolio() {
  const projects = [
    {
      title: 'Anonymous Traveller',
      image: '/images/F3.jpg',
    },
    {
      title: 'Cloudy Evening Sky',
      image: '/images/F4.jpg',
    },
    {
      title: 'Travelling Man on Green Rural',
      image: '/images/F6.jpg',
    },
    {
      title: 'Wonderful Green Fields',
      image: '/images/F8.jpg',
    },
    {
      title: 'Small River in Canyon',
      image: '/images/F7.jpg',
    },
    {
      title: 'Hobby of Photography',
      image: '/images/F5.jpg',
    },
  ];

  return (
    <section className="bg-[#0d0d0d] px-4 py-12 md:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h5 className="text-sm text-[#ffde21] tracking-widest">PORTFOLIO</h5>
        <h3 className="text-3xl font-bold text-white">MY WORK</h3>
        <p className="text-[#b0b0b0] mt-3 max-w-xl mx-auto text-base">
          Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel dolor pulvinar bibendum.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative h-64 bg-cover bg-center rounded-xl shadow-xl overflow-hidden"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300 ease-in-out"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-lg font-semibold">{project.title}</h3>
              <button className="mt-2 text-sm text-black bg-[#e0c840] hover:bg-yellow-300 px-4 py-1.5 rounded transition duration-200">
               <Link href='/'> View Project</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
