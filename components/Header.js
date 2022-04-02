import Image from "next/image";
import React from "react";

import { HiOutlineSearch } from "react-icons/hi";
const Header = () => {
  return (
    <div className="bg-white flex items-center p-2 shadow-md top-0 z-50 sticky h-16">
      {/* Left start */}
      <div className="flex min-w-fit">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          height={40}
          width={40}
        />

        <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
          <HiOutlineSearch size={20} />
          <input
            type="text"
            placeholder="Search facebook"
            className="hidden lg:inline-flex bg-transparent focus:outline-none"
          />
        </div>
      </div>
      {/* Left end */}

      {/* center start*/}

      {/* center start*/}

      {/* right start */}
      {/* right start */}
    </div>
  );
};

export default Header;
