import React from "react";
import moment from "moment";

export default function Footer() {
  const currentYear = moment().format("YYYY");
  return (
    <div className="bg-gray-800 text-white text-center py-3 text-sm">
      &copy; {currentYear - 1} All Right Reserved. reactcommerce.com
    </div>
  );
}
