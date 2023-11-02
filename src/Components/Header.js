import { ClockIcon, HeartIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/download.jpg";

const Header = () => {
  return (
    <div className=" ">
      <div className="py-2 px-2 md:pl-10 shadow-sm bg-blue-gray-50 border-b border-blue-gray-100">
        <div className="flex justify-between items-center ">
          <Typography variant="h5" color="blue-gray">
            Photo-HUB
          </Typography>
          <img src={profile} className=" w-6 h-6 rounded-full" alt="" />
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-5 xs:hidden">
        <Link to="/favourites">
          {" "}
          <HeartIcon className="h-5 w-5 text-red-600"></HeartIcon>
        </Link>
        <Link to="/memories">
          <ClockIcon className="h-5 w-5 text-blue-gray-200"></ClockIcon>
        </Link>
        <Link to="">
          {" "}
          <TrashIcon className="h-5 w-5 text-blue-gray-200"></TrashIcon>
        </Link>
      </div>
    </div>
  );
};

export default Header;
