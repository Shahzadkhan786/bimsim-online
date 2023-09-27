import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

function ProjectCard(props: {
    id:number,
    title:string,
    image:string|StaticImageData,
    category:string,
    year:string,
    detail:string
}) {
  return (
    <Link href={`/prjects/${props.id}`}>
      <div className="z-10">
        <Image src={props.image} alt="project" height={200} width={400} />
        <h1 className="font-bold font-xl">{props.category}</h1>
        <p className="font-bold font-lg">Year:{props.year}</p>
        <p className="font-bold font-lg">
          Category:
          <span className="text-base font-normal capitalize">
            {props.category}
          </span>
        </p>
        <div className="flex flex-row font-bold font-lg">Project Detail:<p className="flex text-md font-semibold gap-2">{props.detail}</p></div>
      </div>
    </Link>
  );
}

export default ProjectCard;