"use client";
import { useState } from "react";
import Link from "next/link";

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    { title: 'Anonymous Traveller', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { title: 'Cloudy Evening Sky', video: 'https://www.youtube-nocookie.com/embed/LTXpNz_ymrs?si=7z20bAGwBZW_BWG-' },
    { title: 'Editing', video: 'https://www.youtube-nocookie.com/embed/6IeVKpXu7cE?si=B6QV8_C8ASZuLJYP' },
    { title: 'Traveling Edits', video: 'https://www.youtube.com/embed/mciqEzOXUU0?si=pLSuJ1nkD977GxHc' },
    { title: 'Traveller', video: 'https://www.youtube-nocookie.com/embed/gbZ6hCNlq7g?si=ID0OXKUZM8nqaH1u' },
    { title: 'Arslan Edits', video: 'https://www.youtube.com/embed/qQdcYdFM17k?si=jNlzBwFYCopvhsHF' },
    { title: 'Anonymous Traveller', video: 'https://www.youtube-nocookie.com/embed/gbZ6hCNlq7g?si=ID0OXKUZM8nqaH1u' },
    { title: 'Sky', video: 'https://www.youtube-nocookie.com/embed/LTXpNz_ymrs?si=7z20bAGwBZW_BWG-' },
    { title: 'Anonymous Traveller', video: 'https://www.youtube-nocookie.com/embed/gbZ6hCNlq7g?si=ID0OXKUZM8nqaH1u' },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  // ✅ Add this function to extract thumbnail from embed URL
  const getYouTubeThumbnail = (url) => {
    const match = url.match(/\/embed\/([a-zA-Z0-9_-]+)/);
    return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : '';
  };

  return (
    <section className="bg-[#101010] px-4 py-16 md:px-10 lg:px-20">
      <div className="text-center mb-12">
        <h5 className="text-sm text-[#e0c840] tracking-widest">PORTFOLIO</h5>
        <h3 className="text-3xl font-bold text-white">MY WORK</h3>
        <p className="text-[#b9b4b4] mt-3 max-w-xl mx-auto text-base">
          Explore my finest video editing projects that blend creativity, storytelling, and visual impact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, idx) => (
          <div
          onClick={() => setSelectedVideo(project.video)}
            key={idx}
            className="group relative cursor-pointer h-64 bg-cover bg-center rounded-xl shadow-xl overflow-hidden"
            style={{ backgroundImage: `url(${getYouTubeThumbnail(project.video)})` }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-300 ease-in-out"></div>
            <div className="absolute bottom-4 left-4">
              <h3 className="text-white text-lg font-semibold">{project.title}</h3>
              <button
                onClick={() => setSelectedVideo(project.video)}
                className="mt-2 text-sm cursor-pointer text-black bg-[#e0c840] hover:bg-yellow-300 px-4 py-1.5 rounded transition duration-200"
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#e0c840] hover:bg-yellow-300 text-black px-6 py-2 rounded text-sm font-semibold transition cursor-pointer"
        >
          {showAll ? 'View Less' : 'View All'}
        </button>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-3xl p-4">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src={selectedVideo}
                className="w-full h-[400px] rounded"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
