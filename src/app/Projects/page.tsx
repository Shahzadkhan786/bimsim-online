import { BgImage } from "../components/bgImage";
import React from "react";
import { ProjectsData } from "@/data/data";
import { ImagesSection } from "./sections/images-section";

export default function Projects() {
  return (
    <div>
      <BgImage
        imageData="/images/image44.png"
        BadgeData="OUR PROJECTS"
      ></BgImage>
      <div className="w-full justify-center text-center px-96 py-16">
        <h1 className="text-5xl font-bold text-center">{ProjectsData.title}</h1>
        <p className="text-xl">{ProjectsData.body}</p>
      </div>
      <div>
        <ImagesSection />
      </div>
    </div>
  );
}
