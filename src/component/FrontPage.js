import { Link } from "react-router-dom";

let FrontPage = ({ title, button, subTitle }) => {
  return (
    <div className="w-full h-screen flex overflow-hidden relative">
      <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40 space-y-4">
        <div
          className="font-playfair text-4xl md:text-6xl font-medium text-white text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
        >
          {title}
        </div>
        <div
          className="font-rubik text-xl text-center md:text-3xl font-medium text-white"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1300"
        >
          {subTitle}
        </div>
        <Link
          to="/booknow"
          className={`button ${button}`}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1800"
        >
          BOOK NOW
        </Link>
      </div>
    </div>
  );
};

export default FrontPage;
