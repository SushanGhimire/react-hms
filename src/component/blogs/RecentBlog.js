import { useState } from "react";
import room1 from "../../assets/img/hotelroom1.jpg";
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
      <div
        className="font-playfair text-center text-4xl md:text-5xl"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Our Recent Blog
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 p-5 lg:px-20">
        {blogs.map((blog) => (
          <div
            className="col-span-1"
            v-for="(blog, index) in blogs"
            data-aos-duration="1000"
            key={blog.id}
            data-aos={blog.aos}
            data-aos-duration="1000"
          >
            <div className="w-full bg-white border border-gray-300 flex flex-col">
              <div>
                <img
                  src={blog.src}
                  className="w-full object-cover h-56"
                  alt=""
                />
              </div>
              <div className="w-full px-5 py-3">
                <span className="text-xs tracking-widest font-rubik font-semibold text-gray-400 border-b border-black py-2">
                  {blog.type}
                </span>
              </div>
              <div className="font-playfair text-xl md:text-2xl px-5 pb-5 text-text">
                {blog.title}
              </div>
              <div className="text-gray-600 text-sm font-rubik px-5 pb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati beatae atque ut ipsa quaerat voluptates adipisci,
                perspiciatis officia odio qui molestiae.
              </div>
              <div className="p-5">
                <button className="border-2 border-text text-text font-rubik px-6 py-3 focus:outline-none hover:bg-text hover:text-white transition-all">
                  READ MORE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
