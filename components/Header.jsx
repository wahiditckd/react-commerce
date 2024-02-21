import React from "react";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";

export default function Header() {
  return (
    <div className="bg-color-main">
      <div className="wrapper">
        <div className="flex justify-between items-center py-5">
          <Link href="#" className="text-white text-2xl font-extrabold">
            MyCommerce
          </Link>
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-3 rounded-lg min-w-[300px]"
            />
          </div>
          <div className="text-3xl text-white">
            <IoMdCart />
          </div>
        </div>
      </div>
    </div>
  );
}
