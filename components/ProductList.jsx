"use client";
import React from "react";
import ItemProduct from "@/components/ItemProduct";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/lib/services";

export default function ProductList() {
  const getQuery = async () => {
    return await getData("/products");
  };

  const query = useQuery({
    queryKey: ["product"],
    queryFn: getQuery,
  });

  if (query.isLoading) {
    return (
      <div className="wrspper relative flex justify-center mt-10">
        <div className="animate-pulse w-full flex gap-4">
          <div className="rounded-sm bg-slate-200 h-[100px] w-full"></div>
          <div className="rounded-sm bg-slate-200 h-[100px] w-full"></div>
          <div className="rounded-sm bg-slate-200 h-[100px] w-full"></div>
        </div>
      </div>
    );
  }

  if (query.error) {
    return (
      <div className="wrapper">
        <div className="bg-red-500 text-white text-center p-5 my-7">
          error network
        </div>
      </div>
    );
  }

  console.log(query.data.data);

  const myData = query.data.data;

  return (
    <div className="relative flex flex-wrap -mx-4">
      {myData.map((item) => {
        return (
          <ItemProduct
            category={item.category}
            image={item.image}
            link={`/product/${item.id}`}
            title={item.title}
            price={`$${item.price}`}
            rate={parseInt(`${item.rating.rate}`)}
          />
        );
      })}
    </div>
  );
}

/* /* <ItemProduct
        category="MENS"
        title="Fjallraven - Foldsack No. 1 Backpac, Fits 15 Laptops"
        price="$105"
        image="/images/prod.jpg"
      />
      <ItemProduct
        category="WOMEN"
        title="Fjallraven - Foldsack No. 1 Backpac, Fits 15 Laptops"
        price="$125"
        image="/images/prod.jpg"
      />
      <ItemProduct
        category="SHOP"
        title="Fjallraven - Foldsack No. 1 Backpac, Fits 15 Laptops"
        price="$95"
        image="/images/shop.jpg"
      />
      <ItemProduct
        category="CHILD"
        title="Fjallraven - Foldsack No. 1 Backpac, Fits 15 Laptops"
        price="$100"
        image="/images/child.jpg"
      />
      <ItemProduct /> */
