import React from "react";
import moment from "moment";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const currentYear = moment().format("YYYY");
  return (
    <>
      <div className="fixed bottom-3 right-3 text-4xl bg-slate-200 p-2 rounded-lg">
        <Link href="https://wa.me/6285748616251">
          <FaWhatsapp className="text-green-400" />
        </Link>
      </div>
      <div className="bg-gray-800 text-white text-center py-3 text-sm">
        &copy; {currentYear - 1} All Right Reserved. reactcommerce.com
      </div>
    </>
  );
}
