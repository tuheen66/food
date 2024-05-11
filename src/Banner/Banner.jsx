import "./banner.css";

const Banner = () => {
  return (
    <div className="min-h-[90vh] rounded-xl banner-bg bg-cover bg-center text-center py-52 space-y-8 mb-12 w-[410px] md:w-[750px] mx-auto  lg:w-full">
      <div className="text-white mx-2  lg:w-[897px] lg:mx-auto space-y-8">
        <h2 className="text-4xl lg:text-5xl font-bold">
          Discover an exceptional cooking class tailored for you
        </h2>
        <p>
        Indulge your taste buds on our culinary haven! Explore an array of delectable recipes, expert tips, and vibrant content that inspires every kitchen enthusiast. Join our flavorful adventure today!
        </p>
      </div>
      <div className="flex flex-col  lg:flex-row justify-center gap-8 font-bold w-[350px] mx-auto">
        <button className="btn border-2 border-[#0BE58A] bg-[#0BE58A] py-2 px-6 rounded-full hover:bg-transparent hover:text-white hover:border-2 hover:border-white">
          Explore Now
        </button>
        <button className="btn border-2 text-white py-2 px-6 rounded-full hover:bg-[#0BE58A] hover:text-black hover:border-2 hover:border-[#0BE58A]">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;
