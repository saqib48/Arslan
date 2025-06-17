const InterestSection = () => {
  const interests = [
    {
      icon: "🎵", 
      title: "Music",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque.",
    },
    {
      icon: "🎮",
      title: "Video Games",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque.",
    },
    {
      icon: "✈️",
      title: "Travelling",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque.",
    },
    {
      icon: "🏀",
      title: "Basketball",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque.",
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-sm font-semibold text-[#e0c840]">INTEREST</h5>
            <h3 className="text-3xl font-bold mt-2 mb-4">MY INTEREST</h3>
            <p className=" text-[#b9b4b4]">
              Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel dolor pulvinar bibendum.
              Curabitur molestie, nisl quis porta laoreet.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {interests.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h5 className="text-lg text-[#ffffff] font-semibold">{item.title}</h5>
                  <p className="text-[#b9b4b4] text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestSection;
