import profile from "../assets/img/profile.jpg";
import SingleBlog from "./blogs/SingleBlog";
const Staffs = () => {
  const staffs = [
    {
      type: "STAFF",
      name: "Michelle Aguilar",
      src: profile,
      id: 1,
    },
    {
      type: "STAFF",
      name: "Chris Standworth",
      src: profile,
      id: 2,
    },
    {
      type: "STAFF",
      name: "Rob McDonald",
      src: profile,
      id: 3,
    },
  ];
  return (
    <div className="w-full p-5 lg:p-20 flex flex-col bg-gray-100 space-y-5">
      <div
        className="text-sm text-center font-semibold font-rubik text-gray-400 tracking-widest"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        OUR BLOG
      </div>
      <div className="font-playfair text-center text-4xl md:text-5xl">
        Our Recent Blog
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-5 lg:px-20">
        {staffs.map((staff) => (
          <SingleBlog
            key={staff.id}
            id={staff.id}
            src={staff.src}
            type={staff.type}
            title={staff.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Staffs;
