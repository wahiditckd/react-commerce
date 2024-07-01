"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function FilterData() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramSort = searchParams.get("sort");
  const handleSelect = (e) => {
    paramSort
      ? router.push(`/?category=${e}&sort=${paramSort}`)
      : router.push(`/?category=${e}`);
  };
  return (
    <div className="flex items-center gap-4">
      Category
      <Select onValueChange={(e) => handleSelect(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="men's clothing">Men's clothing</SelectItem>
          <SelectItem value="jewelery">jewelery</SelectItem>
          <SelectItem value="electronics">Electonics</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
