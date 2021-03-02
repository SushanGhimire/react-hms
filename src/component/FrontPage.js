const FrontPage = () => {
  return (
    <div className="w-full h-full flex relative">
      <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 space-y-4">
        <div
          className="font-playfair text-4xl md:text-6xl font-medium text-white text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          Welcome To Our Luxury Rooms
        </div>
        <div
          className="font-rubik text-xl text-center md:text-3xl font-medium text-white"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1300"
        >
          Discover our world's #1 Luxury Room For VIP.
        </div>
        <button
          className="button"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1800"
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
