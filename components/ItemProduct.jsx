"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getData } from "@/lib/services";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ItemProduct(props) {
  const [product, setProduct] = useState([]);

  // const getProduct = getData("/products");
  // useEffect(() => {
  //   getProduct.then((res) => {
  //     setProduct(res.data.data);
  //   });
  // }, []);
  // console.log(product);

  return (
    <div className="lg:w-4/12 w-6/12 p-4">
      <div className="border-[1px] border-gray-200 border-solid rounded-lg min-h-6 p-3 flex flex-col lg:gap-4 gap-2">
        <div className="relative">
          <Image
            src={`${props.image ? props.image : "/images/no-image-square.jpg"}`}
            width={1049}
            height={1500}
            alt={props.title}
          />
        </div>
        <Link
          href={`${props.link ? props.link : "/"}`}
          className="bg-slate-400 rounded-lg text-white lg:px-4 lg:py-3 px-2 py-1 text-center hover:bg-black"
        >
          Detail
        </Link>
        <h5 className="lg:text-lg text-sm">
          {props.category ? props.category : "no category"}
        </h5>
        <h2 className=" lg:text-3xl text-lg font-bold">
          {props.title ? props.title : "no title"}
        </h2>
        <div className="flex gap-2">
          {" "}
          {props.rate <= 1 ? (
            <>
              <FaStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </>
          ) : props.rate <= 2 ? (
            <>
              <FaStar /> <FaStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </>
          ) : props.rate <= 3 ? (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </>
          ) : props.rate <= 4 ? (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </>
          ) : (
            <>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </>
          )}
        </div>
      </div>

      <div className="flex justify-between">
        {props.price ? props.price : "no price"}
      </div>
    </div>
  );
}
