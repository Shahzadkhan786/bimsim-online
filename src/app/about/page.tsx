import { AboutData } from "@/data/data";
import { BgImage } from "../components/bgImage";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div>
      <BgImage
        imageData="/images/image22.png"
        BadgeData="A HISTORY OF EXCELLENCE"
      ></BgImage>
      <section className="w-full justify-center text-center px-96 py-16">
        <h1 className="text-3xl font-bold text-center">{AboutData.title}</h1>
        <p className="text-xl">{AboutData.body} </p>
      </section>
      <section className=" flex flex-row gap-4 w-full justify-left tect-center pl-32 pr-72">
        <Image src="/images/house3.jpg" alt="image" width={200} height={200} />
        <p className="text-xl">{AboutData.body2}</p>
      </    section>
      <div className="w-full justify-center text-center px-96 py-16">
        <p className="text-xl">{AboutData.body} </p>
      </div>
      <div className="w-full justify-center text-center px-96 py-16">
        <h1 className="text-3xl font-bold text-center">LeaderShip</h1>
      </div>
      <div className=" grid grid-cols-3 w-full justify-center text-center p-8 gap-8" >
        <div>
          <Image
            src="/images/house2.jpg"
            alt="image"
            width={400}
            height={400}
            className="pl-12 py-2 justify-center"
          />    
          <p className="text-xl">{AboutData.body} </p>
        </div>
        <div >
        <Image
            src="/images/house2.jpg"
            alt="image"
            width={400}
            height={400}
            className="pl-12 py-2 justify-center"
          />    
          <p className="text-xl">{AboutData.body} </p>
        </div>
        <div>
        <Image
            src="/images/house2.jpg"
            alt="image"
            width={400}
            height={400}
            className="pl-12 py-2 justify-center"
          />    
          <p className="text-xl">{AboutData.body} </p>
        </div>
      </div>
      <div className="w-full justify-center text-center px-96 py-16 "> 
        <Separator className="my-6" />
        <h1 className="text-3xl font-bold text-center">{AboutData.title}</h1>
        <p className="text-xl">{AboutData.body} </p>
      </div>
    </div>
  );
}
