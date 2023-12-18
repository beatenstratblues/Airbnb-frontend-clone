import React, { useState } from "react";
import leftarr from "../assets/car_arrow_left.png"
import rightarr from "../assets/car_arrow_left.png"


const Carousal = ({ data }) => {

  const [slide, setslide] = useState(0);
  const [Over,setOver] = useState(false);

  const nextSlide = () => {
    setslide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setslide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div>
      <div className="flex justify-center items-center w-[302px] h-[286.9px] relative" onMouseOver={()=>{setOver(true)}} onMouseOut={()=>(setOver(false))}>
        <img
          alt="left arrow"
          src={leftarr}
          className="absolute w-[2rem] p-[10px] h-[2rem] bg-white left-[1rem] cursor-pointer rounded-full  top-[50%] transform -translate-y-1/2  z-10 opacity-0 hover:opacity-75"
          onClick={prevSlide}
        />
        {data.map((x, idx) => {
          return (
            <img
              alt="images"
              src={x}
              key={idx}
              className={`${
                slide === idx
                  ? "rounded-[0.5rem] shadow-lg w-[100%] h-[100%] object-cover"
                  : "hidden"
              }`}
            />
          );
        })}
        <img
          alt="right arrow"
          src={rightarr}
          className="absolute w-[2rem] p-[10px] h-[2rem] bg-white right-[1rem] cursor-pointer rounded-full top-[50%] transform -translate-y-1/2 z-10 opacity-0 hover:opacity-75"
          onClick={nextSlide}
        />
        <span className="flex absolute bottom-[1rem]">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setslide(idx)}
                className={`${
                  slide === idx
                    ? "bg-[white] h-[6px] w-[6px] rounded-full border-none outline-none shadow-md mx-[2px] cursor-pointer"
                    : " bg-[grey] h-[5px] w-[5px] rounded-full border-none outline-none shadow-md mx-[2px] cursor-pointer"
                }`}
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default Carousal;
