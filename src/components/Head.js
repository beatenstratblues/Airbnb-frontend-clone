import React from "react";

const Head = () => {
  return (
    <div className="px-[80px] border-b-[0.9px] border-gray-300 ">
      <div className="flex items-center justify-between min-h-[80px]">
        <div className="flex-1">
          <img
            alt="logo"
            src="https://1000logos.net/wp-content/uploads/2023/01/Airbnb-logo-768x432.png"
            className="w-[118px] h-[64px]"
          />
        </div>

        <div className="px-[24px]">
          <div className="border-[1px] border-gray-300 p-[6px] shadow-md rounded-r-full rounded-l-full">
            <button className="m-[-1] border-r-[1px] border-gray-300">
              <div className="px-[16px] text-sm">Anywhere</div>
            </button>
            <button className="m-[-1] border-r-[1px] border-gray-300">
              <div className="px-[16px] text-sm">Any week</div>
            </button>
            <button className="m-[-1] inline-flex items-center">
              <div className="px-[16px] flex text-sm font-light opacity-70">
                Add guests
              </div>
              <div className="bg-[#FF5A5E] rounded-full w-8 p-[10px]">
                <img
                  alt="search"
                  src="https://static-00.iconduck.com/assets.00/search-icon-1023x1024-cz5u4134.png"
                  className=""
                />
              </div>
            </button>
          </div>
        </div>

        <div className="flex items-center flex-1 justify-end">
        <div className="text-sm w-[11vw] hover:bg-slate-100 rounded-full flex justify-center h-9 items-center">
          <div>
          Airbnb your home
          </div>
          </div>
          <div className="hover:bg-slate-100 rounded-full p-3 mx-2">
            <img alt="web" src="https://cdn.pixabay.com/photo/2016/11/30/17/10/web-1873373_640.png" className="w-4"/>
          </div>
          <div className="border border-gray-300 p-[6px] rounded-full overflow-clip">
            <button className="flex items-center">
              <img alt="hamburger" src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" className="w-6 mr-[10px]"/>
              <img alt="user" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" className="w-7"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
