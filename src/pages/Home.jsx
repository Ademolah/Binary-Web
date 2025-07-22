import React from 'react';
import CanvasBackground from '../components/CanvasBackground';

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-black text-white">
      <CanvasBackground />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#50D6FE]">
          Empowering Innovation.
        </h1>
        <p className="mt-4 max-w-xl text-base sm:text-lg md:text-xl text-white">
          Binary builds intelligent, scalable digital solutions for startups, enterprises, and governments.
        </p>
      </div>
    </div>
  );
};

export default Home;
