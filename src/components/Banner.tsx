export const Banner: React.FC = () => {
  return (
    <section className="flex flex-wrap items-center fit">
      <div className="banner-bg col-12 md-col-7 lg-col-8 flex items-center">
        <div className="fw-700 col-12 md-col-10 lg-col-9">
          Host your meeting with world-class amenities. Starting at
          <span className="primary2"> ₹199/-!</span>
        </div>
      </div>
      <div className="lg-col-4 relative video-wrapper">
        <video
          className="video-bg"
          src="co-working.mp4"
          autoPlay
          muted
          height="100%"
        />
      </div>
    </section>
  );
};

export default Banner;
