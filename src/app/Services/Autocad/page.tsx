import { BgImage } from "@/app/components/bgImage";
import React from "react";
import Image from "next/image";

export default function Autocad() {
  return (
    <div>
      <BgImage imageData={"/images/image44.png"} BadgeData={"2D DESIGN"} />
      <div className="">
        <div className="flex flex-row gap-4 py-24 pl-24">
          <Image
            src="/images/house1.jpg"
            alt=""
            width={400}
            height={400}
            className=""
          />
          <p>Autocad</p>
        </div>
        <div className="pr-48 pl-48 justify-center">
          <h1 className="text-3xl font-bold"></h1>
          <p className="text-xl "></p>
        </div>
      </div>
    </div>
  );
}
