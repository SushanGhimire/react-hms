import Footer from "../Footer";
import Main from "../Main";
import RecentBlog from "./RecentBlog";

const Blog = () => {
  return (
    <section className="w-screen h-screen flex flex-col overflow-x-hidden">
      <Main
        title="News & Events"
        subTitle=" Read our daily news and events of our luxury hotel."
        button="hidden"
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-3">
          <RecentBlog />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Blog;
