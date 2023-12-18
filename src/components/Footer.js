import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="px-[80px] grid grid-flow-col justify-stretch">
        <ul className="py-[48px] border-b-[1px] border-gray-300">
          <h3 className="text-sm">Support</h3>
          <li className="text-sm font-normal my-3 opacity-80">Help Centre</li>
          <li className="text-sm font-normal my-3 opacity-80">AirCover</li>
          <li className="text-sm font-normal my-3 opacity-80">Anti-discrimination</li>
          <li className="text-sm font-normal my-3 opacity-80">Disability support</li>
          <li className="text-sm font-normal my-3 opacity-80">Cancellation options</li>
          <li className="text-sm font-normal my-3 opacity-80">Report neighbourhood concern</li>
        </ul>
        <ul className="py-[48px] border-b-[1px] border-gray-300">
          <h3 className="text-sm">Hosting</h3>
          <li className="text-sm font-normal my-3 opacity-80">Airbnb your home</li>
          <li className="text-sm font-normal my-3 opacity-80">AirCover for Hosts</li>
          <li className="text-sm font-normal my-3 opacity-80">Hosting resources</li>
          <li className="text-sm font-normal my-3 opacity-80">Community forum</li>
          <li className="text-sm font-normal my-3 opacity-80">Hosting responsibly</li>
        </ul>
        <ul className="py-[48px] border-b-[1px] border-gray-300">
          <h3 className="text-sm">Airbnb</h3>
          <li className="text-sm font-normal my-3 opacity-80">Newsroom</li>
          <li className="text-sm font-normal my-3 opacity-80">New features</li>
          <li className="text-sm font-normal my-3 opacity-80">Careers</li>
          <li className="text-sm font-normal my-3 opacity-80">Investors</li>
          <li className="text-sm font-normal my-3 opacity-80">Airbnb.org emergency stays</li>
        </ul>
      </div>
      <div className="py-[24px]">
        <div className="px-[80px] grid grid-flow-col">
          <ul className="flex">
            <li className="text-sm font-normal opacity-80 pr-[15px]">© 2023 Airbnb, Inc.</li>
            <li className="text-sm font-normal opacity-80 pr-[15px]">Privacy</li>
            <li className="text-sm font-normal opacity-80 pr-[15px]">Terms</li>
            <li className="text-sm font-normal opacity-80 pr-[15px]">Sitemap</li>
            <li className="text-sm font-normal opacity-80 pr-[15px]">Company details</li>
          </ul>
        
        <div className="grid grid-flow-col">
          <ul className="flex justify-end items-center gap-4">
            <li>
              <img
                alt="web"
                src="https://cdn.pixabay.com/photo/2016/11/30/17/10/web-1873373_640.png"
                className="w-4"
              />
            </li>
            <li className="text-sm">English (IN)</li>
            <li className="text-sm">₹ INR </li>
            <div className="flex gap-4">
              <img alt="facebook" src="https://i.pinimg.com/1200x/b6/99/1c/b6991c27a36077737c09a40cb31ecdef.jpg" className="w-5"/>
              <img alt="twitter" src="https://cdn-icons-png.flaticon.com/512/60/60580.png" className="w-5"/>
              <img alt="instagram" src="https://i.pinimg.com/originals/64/c7/c8/64c7c86fd70cb2aea77b49fd340164b3.webp" className="w-5"/>
            </div>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
