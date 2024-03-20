import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";
import toast from "react-hot-toast";

const RGBTOHEX = (number) => {
  let hexCode = "";
  for (let i = 0; i < 3; i++) {
    let twoLetters = number[i].toString(16);
    if (twoLetters.length < 2) {
      hexCode += "0" + twoLetters;
    } else {
      hexCode += twoLetters;
    }
  }
  hexCode = hexCode.toUpperCase();
  return hexCode;
};

const generateColor = () => {
  const random = [];
  let finalColor;
  for (let i = 0; i < 3; i++) {
    random.push(Math.floor(Math.random() * 256));
  }
  finalColor = "#" + RGBTOHEX(random);
  return finalColor;
};

const restartColors = (setPalette) => {
  const tempPalette = Array.from({ length: 6 }, (_, index) => ({
    color: generateColor(),
    blocked: false,
  }));
  setPalette(tempPalette);
};

const Generator = () => {
  const [palette, setPalette] = useState(
    Array.from({ length: 6 }, (_, index) => ({
      color: generateColor(),
      blocked: false,
    })),
  );

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    toast.success("Text copied successfully");
  };

  function handleClick() {
    restartColors(setPalette);
  }

  return (
    <div className="p-8 focus:outline-none">
      <div className="text-center flex flex-col gap-1 md:gap-2 items-center justify-center">
        <h1 className="md:mb-4 text-3xl font-bold">
          Random Color Palette Generator
        </h1>
        <p className=" md:text-lg text-gray-600">
          Generate a random color palette by clicking the "Restart Palette"
          button. Each box represents a color, and you can copy the hex code by
          clicking the copy button.
        </p>
        <button
          className="mb-4 rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700  w-max"
          onClick={handleClick}
        >
          Restart Palette
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6  pt-2 md:pt-8">
        {palette.map((colorObj, index) => (
          <div
            className="relative flex h-40 md:h-[40rem] flex-col items-center justify-center rounded-sm "
            key={index}
            style={{ backgroundColor: colorObj.color }}
          >
            <button
              className="absolute bottom-16  text-gray-200 focus:outline-none"
              onClick={() => copyToClipboard(colorObj.color)}
            >
              <FaCopy size={24} />
            </button>
            <span className="absolute bottom-4 text-lg font-semibold tracking-wide text-gray-800">
              {colorObj.color}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Generator;
