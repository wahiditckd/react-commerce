import Image from "next/image";
import { Button } from "@/components/ui/button";
import FilterData from "@/components/FilterData";
import SortData from "@/components/SortData";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="my-7">
        <div className="flex items-center justify-between w-full">
          <FilterData />
          <SortData />
        </div>
      </div>
    </div>
  );
}
