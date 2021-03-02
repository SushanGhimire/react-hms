const SingleBlog = ({ id, src, type, title }) => {
  return (
    <div
      className="col-span-1"
      v-for="(blog, index) in blogs"
      data-aos-duration="1000"
      key={id}
    >
      <div className="w-full bg-white border border-gray-300 flex flex-col">
        <div>
          <img src={src} className="w-full object-cover h-56" alt="" />
        </div>
        <div className="w-full px-5 py-3">
          <span className="text-xs tracking-widest font-rubik font-semibold text-gray-400 border-b border-black py-2">
            {type}
          </span>
        </div>
        <div className="font-playfair text-xl md:text-2xl px-5 pb-5 text-text">
          {title}
        </div>
        <div className="text-gray-600 text-sm font-rubik px-5 pb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          beatae atque ut ipsa quaerat voluptates adipisci, perspiciatis officia
          odio qui molestiae.
        </div>
        <div className="p-5">
          <button className="border-2 border-text text-text font-rubik px-6 py-3 focus:outline-none hover:bg-text hover:text-white transition-all">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
