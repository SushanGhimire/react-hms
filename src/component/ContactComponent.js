import checkin from "../assets/img/checkin.jpg";
const ContactComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 px-5 lg:px-20 my-20 md:space-x-10">
      {/* contact side  */}
      <div className="col-span-1 flex flex-col lg:px-10 md:space-y-5">
        <div className="w-full  font-playfair text-2xl md:text-4xl pb-10">
          Contact Form
        </div>
        <div className="w-full space-y-3">
          <label htmlFor="" className="text-gray-600">
            Name
          </label>
          <input type="text" className=" input-style" name="" id="" />
        </div>
        <div className="w-full space-y-3">
          <label htmlFor="" className="text-gray-600">
            Email
          </label>
          <input type="text" className=" input-style" />
        </div>
        <div className="w-full space-y-3">
          <label htmlFor="" className="text-gray-600">
            Phone
          </label>
          <input type="number" className=" input-style" />
        </div>
        <div className="w-full space-y-3">
          <label htmlFor="" className="text-gray-600">
            Write Message
          </label>
          <textarea
            name=""
            className="input-style"
            id=""
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <div>
          <button className="button py-2">SEND MESSAGE</button>
        </div>
      </div>
      {/* image  */}
      <div className="col-span-1 flex flex-col lg:px-10 space-y-5 mt-10 md:mt-0">
        <div className="w-full  font-playfair text-2xl  md:text-4xl md:pb-10">
          Paragraph
        </div>
        <img src={checkin} className="w-full h-80 object-cover" alt="" />
        <div className="text-gray-600 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          error voluptatibus, eius sapiente accusantium modi iure ut itaque
          beatae nulla hic, laudantium quod officia temporibus dolorem non.
          Fugiat, libero ullam.
        </div>
        <div className="text-gray-600 text-sm md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est veniam,
          dignissimos delectus aspernatur iure molestiae nisi laborum quisquam
          amet ullam, totam ipsa consequuntur! Voluptatem quisquam a perferendis
          consequatur! Ex, tenetur.
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
