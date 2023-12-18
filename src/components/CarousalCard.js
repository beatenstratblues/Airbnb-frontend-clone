import React from "react";
import Carousal from "./Carousal";





const CarousalCard = ({image}) => {
  return (
    <div className="w-[302px] h-[386.9px]">
      <Carousal data={image.images} />
      <div className="py-2">
        <h3 className="font-medium">{image.location},{image.country}</h3>
        <h3 className="font-light text-slate-600 opacity-80">{image.distance}, Kilometres away</h3>
        <h3 className="font-light text-slate-600 opacity-80">{image.date}, Oct</h3>
        <h3 className="mt-1 text-[14px]">₹{image.price}, <span className="font-light">night</span></h3>
      </div>
    </div>
  );
};

export default CarousalCard;
