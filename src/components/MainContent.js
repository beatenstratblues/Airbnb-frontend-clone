import React from "react";
import TaxFilter from "./TaxFilter";
import CarousalCard from "./CarousalCard";
import { IMAGES } from "../utils/constants";

const MainContent = () => {
  return (
    <div className="px-[80px] overflow-auto py-[3vh]">
      <TaxFilter />
      <div className="grid grid-cols-4 gap-x-3 gap-y-11">
        {
          IMAGES.map((x, idx)=>{
            return <CarousalCard image={x} key={idx}/>
          })
        }
      </div>
    </div>
  );
};

export default MainContent;
