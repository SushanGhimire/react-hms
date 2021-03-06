// import { useState } from "react";
import room1 from "../../assets/img/hotelroom1.jpg";
import SingleBlog from "./SingleBlog";
const RecentBlog = () => {
  const blogs = [
    {
      type: "ROOMS",
      title: "New Rooms",
      src: room1,
      id: 1,
      aos: "fade-right",
    },
    {
      type: "NEWS",
      title: "New Staff Added",
      src: room1,
      id: 2,
      aos: "fade-up",
    },
    {
      type: "NEW ROOMS",
      title: "Big Rooms For All",
      src: room1,
      id: 3,
      aos: "fade-left",
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
        {blogs.map((blog) => (
          <SingleBlog
            key={blog.id}
            id={blog.id}
            src={blog.src}
            title={blog.title}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
