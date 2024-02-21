import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FilterData() {
  return (
    <div className="flex items-center gap-4">
      Category
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="man">Man</SelectItem>
          <SelectItem value="women">Women</SelectItem>
          <SelectItem value="electronic">Electonic</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
