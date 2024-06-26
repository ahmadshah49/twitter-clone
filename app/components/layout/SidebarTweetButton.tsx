import React from "react";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
  return (
    <div>
      <div
        className="
    mt-6 
    lg:hidden
    h-14
    w-14
    flex
    items-center
    justify-center
    rounded-full
    bg-sky-500
    hover:bg-opacity-80
    transition
    cursor-pointer
"
      >
        <FaFeather size={24} color="white" />
      </div>
      <div
        className="
        mt-6
        hidden
        lg:block
        px-4
        py-2
        rounded-full
        bg-sky-500
        hover:bg-opacity-90
        cursor-pointer
        transition  
      "
      >
        <p
          className="
        hidden
        lg:block
        text-center
        font-semibold
        text-white
        text-[20px]
        "
        >
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
