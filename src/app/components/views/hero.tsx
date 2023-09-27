import { BgImage } from "../bgImage";
import { HomeData } from "@/data/data";
import { Cportion } from "./heroitems/cportion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="">

      {/*Bg Image*/}
      <div className="bg-local z-[-100]">
        <BgImage
          imageData="/images/image11.jpg"
          BadgeData="BUILDING TOGATHER"
        ></BgImage>
      </div>

      {/*Data 1*/}
      <div className="w-full justify-center text-center px-96 py-16">
        <h1 className="text-5xl font-bold text-center">{HomeData.title1}</h1>
        <p className="text-xl">{HomeData.body1}</p>
        <Link href={"/About"}>
          <Badge className="text-orange-500 underline underline-offset-1 bg-white rounded-md hover:bg-gray-300 object-start text-xl">
            Read Our Story
          </Badge>
        </Link>
      </div>

      {/* images1*/}
      <div className="w-full h-1/2 flex flex-row py-4">
        <Image
          src="/images/image55.png"
          alt="image of project"
          width={1024}
          height={1024}
          className="w-1/2 h-2full shadow-sm border-orange-300 border-8"
        />
        <Image
          src="/images/image44.png"
          alt="image of project"
          width={1024}
          height={1024}
          className="w-1/2 h-full shadow-lg border-orange-300 border-8"
        />
      </div>

      {/*Data 2*/}
      <div className="w-full justify-center text-center pb-24 px-96">
        <h1 className="text-5xl font-bold text-center">{HomeData.title2}</h1>
        <p className="text-xl">{HomeData.body2}</p>
        <Link href={"/Services"}>
          <Badge className="text-orange-500 underline underline-offset-1 bg-white rounded-md hover:bg-gray-300 object-start text-xl">
            Learn More
          </Badge>
        </Link>
      </div>

      {/* images2*/}
      <div className="w-full h-1/2 flex flex-row py-4">
        <Image
          src="/images/image55.png"
          alt="image of project"
          width={1024}
          height={1024}
          className="w-1/2 h-2full shadow-xs border-orange-300 border-8"
        />
        <Image
          src="/images/image44.png"
          alt="image of project"
          width={1024}
          height={1024}
          className="w-1/2 h-full shadow-xs border-orange-300 border-8"
        />
      </div>

      {/*Data 3*/}
      <div className="w-full justify-center text-center pt-24 px-96">
        <h1 className="text-5xl font-bold text-center">{HomeData.title3}</h1>
        <p className="text-xl">{HomeData.body3}</p>
        <Link href={"/Projects"}>
          <Badge className="text-orange-500 underline underline-offset-1 rounded-md bg-white hover:bg-gray-300 object-start text-xl">
            See Our All Projects
          </Badge>
        </Link>
      </div>

      {/* images3*/}
      <div className="w-full h-1/2 flex flex-row py-4">
        <Image
          src="/images/image44.png"
          alt="image of project"
          width={1024}
          height={1024}
          className="w-1/2 h-full shadow-xs border-orange-300 border-8"
        />
        <Image
          src="/images/image55.png"
          alt="image of project"
          width={1024}
          height={1024}
          className="w-1/2 h-2full shadow-xs border-orange-300 border-8"
        />
      </div>

      {/*Contact Portion*/}
      <div>
        <Cportion />
      </div>
    </div>
  );
}
