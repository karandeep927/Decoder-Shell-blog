import Slider from "../Components/common/Slider";
import BlogCard from "../Components/blog/BlogCard";
import HomeMainNews from "./HomeMainNews";

function Home() {
  return(
    <div className="w-full min-h-screen overflow-x-hidden">
      <main className="w-full p-3">
        <h1 className="text-2xl text-base mb-2">Latest</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-2 w-full sm:min-w-72 sm:min-h-96 justify-items-stretch">
            <Slider>
              <HomeMainNews />
              <HomeMainNews />
              <HomeMainNews />
            </Slider>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 sm:grid-rows-2 sm:grid-cols-1">
            <HomeMainNews />
            <HomeMainNews />
          </div>
        </div>
        <section>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-base my-3">Top News</h1>
            <p className="sm:hidden cursor-pointer text-base">See more</p>
          </div>
          <div className="max-h-64 grid gap-4 grid-cols-2 sm:grid-cols-4  p-3 overflow-hidden">
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-base my-3">Popular Articles</h1>
            <p className="sm:hidden cursor-pointer">See more</p>
          </div>
          <div className="max-h-64 grid gap-4 grid-cols-2 sm:grid-cols-4  p-3 overflow-hidden">
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
            <BlogCard imgUrl="" tags={[]} title="title" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
