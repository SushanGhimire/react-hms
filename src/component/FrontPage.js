const FrontPage = () => {
  return (
    <div className="w-full h-full flex relative">
      <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 space-y-4">
        <div className="font-playfair text-4xl md:text-6xl font-medium text-white text-center">
          Welcome To Our Luxury Rooms
        </div>
        <div className="font-rubik text-xl text-center md:text-3xl font-medium text-white">
          Discover our world's #1 Luxury Room For VIP.
        </div>
        <button className="button">BOOK NOW</button>
      </div>
    </div>
  );
};

export default FrontPage;
