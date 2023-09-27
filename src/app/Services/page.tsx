import { BgImage } from "../components/bgImage";
import React from "react";
import { ServicesData } from "@/data/data";
import { ImagesPortion } from "./sections/images-portion";

export default function Services() {
  return (
    <div>
      <BgImage
        imageData="/images/image55.png"
        BadgeData="SERVICES THAT FIT YOUR NEED"
      ></BgImage>
      <div className="w-full justify-center text-center px-96 py-16">
        <h1 className="text-5xl font-bold text-center">{ServicesData.title}</h1>
        <p className="text-xl">{ServicesData.body}</p>
      </div>
      <div>
        <ImagesPortion />
      </div>
    </div>
  );
}
