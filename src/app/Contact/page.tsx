import { ContactsData } from "@/data/data";
import { BgImage } from "../components/bgImage";
import React from "react";
import { Form } from "./components/form";
import GoogleMapComponent from "./components/googlemapComponent";

export default function Contact() {
  return (
    <div>
      <BgImage
        imageData="/images/image33.png"
        BadgeData="HOW CAN WE HELP"
      ></BgImage>
      <div className="w-full justify-center text-center px-96 py-16">
        <h1 className="text-5xl font-bold text-center">{ContactsData.title}</h1>
        <p className="text-xl">{ContactsData.body}</p>
      </div>
      <div className="flex flex-row ">
        <div className="pl-12 w-1/2">
          Add Map
          <GoogleMapComponent />
        </div>
        <div className="w-1/2">
          <Form />
        </div>
      </div>
    </div>
  );
}
