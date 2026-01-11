import React, { useState } from "react";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const photos = Array.from({ length: 41 }, (_, i) => ({
    id: i + 1,
    src: `oam${i + 1}.jpeg`,
    title:
      i === 8 ? "Yoga Day Celebrations 2024" : `Certification Photo ${i + 1}`,
  }));

  // Updated with your YouTube links
  const videos = [
    {
      id: 1,
      youtubeId: "FI1oiHjTWaE",
      title: "World Acupuncture Day Celebrations @ ASPA INDIA",
    },
    {
      id: 2,
      youtubeId: "F3q_s8uW_uo",
      title: "15th Nov World Acupuncture Day Celebrations",
    },
    {
      id: 3,
      youtubeId: "tqcavYqgwgc",
      title: "Health Awareness Camp Highlights Dr. Makala Satyanarayana ",
    },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="title">Professional Gallery</h2>
          <div className="underline"></div>
        </div>

        {/* YouTube Video Section */}
        <h3 className="sub-title">Featured Videos</h3>
        <div className="video-grid">
          {videos.map((video) => (
            <div className="video-card" key={video.id}>
              <div className="video-responsive">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h4>{video.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Photo Section */}
        <h3 className="sub-title">Certifications & Events</h3>
        <div className="photo-masonry">
          {photos.map((photo) => (
            <div
              className="photo-card"
              key={photo.id}
              onClick={() => setSelectedImg(photo.src)}
            >
              <img src={photo.src} alt={photo.title} loading="lazy" />
              <div className="photo-overlay">
                <span>View Full Size</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal for Photos */}
        {selectedImg && (
          <div className="lightbox" onClick={() => setSelectedImg(null)}>
            <div className="lightbox-content">
              <span className="close-lightbox">✕</span>
              <img src={selectedImg} alt="Enlarged view" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
