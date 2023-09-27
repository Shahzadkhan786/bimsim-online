import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";



export function BgImage(props:{
  imageData:string
  BadgeData:string
}) {
  return (
    <div className="fixed bg-scroll bg-center bg-cover flex flex-col relative min-width-screen h-screen z-[-100]">
      <div className="flex flex-col justify-around h-full place-items-center">
        <Badge className="py-16 px-8 rounded-md text-4xl absolute top-80 " variant="secondary">
          {props.BadgeData}
        </Badge>
       
      </div>
      <div className="flex flex-col justify-center h-full place-items-center">
      <Badge className="flex flex-col rounded-md py-4 px-2 text-bold text-black absolute bottom-8 " variant={"secondary"}>
        SCROLL
              <ArrowDown size={30} />
        </Badge>
      </div>
      <Image
        priority
        height={1024}
        width={2048}
        src={props.imageData}
        alt="Building"
        className="min-w-screen h-full bg-cover absolute mb-6 z-[-100] p-0  top-0 left-0"
      />
    </div>
  );
}
