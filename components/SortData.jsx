import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SortData() {
  return (
    <div className="flex items-center gap-4">
      Sort
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="man">Low Price</SelectItem>
          <SelectItem value="women">High Price</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
