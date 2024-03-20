import React from "react";
import StartButton from "../Components/StartButton";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-72 text-center">
      <h1 className="text-3xl font-semibold text-gray-700">
        Welcome to the React Color Palette Generator
      </h1>
      <p className="text-gray-700 ">
        Explore colors and generate your own color palettes, copy color rgb and
        hexadecimal codes, and more!
      </p>

      <StartButton />
    </div>
  );
};

export default Home;
