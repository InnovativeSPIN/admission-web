import collegeVideo from '../assets/drone/collegedrone.mp4';
import '../styles/CollegeVideo.css'; 

const CollegeVideo = () => {
  return (
    <div className="college-video-container">
      
      <video
        className="college-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={collegeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CollegeVideo;
