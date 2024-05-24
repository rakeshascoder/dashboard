import React from "react";
import menu_icon from "../assets/images/svg/menu_icon.svg";
import search_icon from "../assets/images/svg/search_icon.svg";
import notify_icon from "../assets/images/svg/notify_icon.svg";

const Navbar = () => {
  return (
    <div className="bg-white position-sticky top-0 start-0 z-3 ">
      <div className="px-3 py_12 navbar ">
        <div className="nav">
          <img src={menu_icon} alt="" />
          <div className="d-flex align-items-center bg_blueish ms-2 p-2">
           <label htmlFor="search"> <img src={search_icon} alt="" /></label>
            <input
              className="ms-2 border-0 bg-transparent "
              placeholder="Search in the admin panel"
              type="search"
              name=""
              id="search"
              size={40}
            />
          </div>
        </div>
        <img src={notify_icon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
