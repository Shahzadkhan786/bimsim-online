import { StaticImageData } from "next/image";

export type Project={
    id:number,
    title:string,
    image:string|StaticImageData,
    category:string,
    year:string,
    detail:string
}