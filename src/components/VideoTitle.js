const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-1/3 left-4 right-0 text-white bg-gradient-to-r p-4">
      <h1 className="text-2xl md:text-4xl font-extrabold text-gray-100 mb-2">
        {title}
      </h1>
      <div className="overview-container max-w-md">
        {" "}
        {/* Adjust max-w-md as needed */}
        <p className="hidden md:inline-block py-2 text-sm md:text-lg text-gray-300">
          {overview}
        </p>
      </div>
      <div className="my-2 md:m-0">
        <button className="bg-white text-black py-1 md:py-2 px-2 md:px-6 text-sm md:text-lg rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-1 bg-gray-500 text-white p-2 px-6 text-sm md:text-lg bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
