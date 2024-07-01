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

export default function SortData() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramCategory = searchParams.get("category");
  const handleSort = (e) => {
    paramCategory
      ? router.push(`/?Category=${paramCategory}&sort=${e}`)
      : router.push(`/?sort=${e}`);
  };
  return (
    <div className="flex items-center gap-4">
      Sort
      <Select onValueChange={(e) => handleSort(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low Price</SelectItem>
          <SelectItem value="high">High Price</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
