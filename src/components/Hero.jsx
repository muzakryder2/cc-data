import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-primary text-[0.9rem] uppercase font-bold sm:text-lg md:text-2xl">
          Growing with data analytics
        </p>
        <h1 className="text-3xl py-6 font-bold sm:text-6xl md:text-7xl">
          Grow with data.
        </h1>
        <div className="flex space-x-3 items-center justify-center">
          <p className="text-lg sm:text-3xl md:text-5xl font-bold">
            Fast, flexible financing for
          </p>
          <Typed
            className="text-lg sm:text-3xl md:text-5xl font-bold text-primary"
            strings={["BTB", "BTC", "SAAS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-gray-500 text-lg p-6 font-bold sm:text-2xl md:text-3xl md:py-8">
          Monitor your data analytics to increase revenue for BTB, BTC, & SAAS
          platforms.
        </p>
        <button className="bg-primary w-[200px] rounded-3xl text-black font-medium my-6 mx-auto py-3 hover:brightness-125">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
