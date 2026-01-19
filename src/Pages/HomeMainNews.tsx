function HomeMainNews() {
  return (
    <div className="relative w-full h-full min-h-60 bg-blue-500 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        alt="card"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <h2 className="absolute bottom-4 left-2 right-2 text-white font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
    </div>
  );
}

export default HomeMainNews;
