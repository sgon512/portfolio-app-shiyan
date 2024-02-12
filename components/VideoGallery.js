export const VideoGallery = () => {
  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
  ];

  return (
    <div className="videoGallery">
      {videos.map((video, index) => (
        <video key={index} controls className="responsiveVideo">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};
