import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export function ImagesSection() {
  return (
    <div>
        <div className="relative bg-white w-screen h-screen">
          <div className="absolute top-0 right-0 ">
            <div className="">
              <Badge
                className="py-4 px-2 rounded-md text-2xl absolute top-48 right-48 text-center"
                variant="secondary"
              >
                <Link href={"/category/BIM"}>
                Building Information Modeling
                </Link>
              </Badge>
            </div>
            <Image
              priority
              height={670}
              width={800}
              src="/images/image22.png"
              alt="Building"
              className="mb-6 z-[-100] p-0 h-[536px] w-[960px] border-4 border-black"
            />
          </div>
          <div className="absolute top-0 left-0 ">
            <div className="">
              <Badge
                className="py-4 px-2 rounded-md text-2xl absolute top-24 left-48 text-center"
                variant="secondary"
              >
                <Link href={"/category/Stucture"}>
                Stucture
                </Link>

              </Badge>
            </div>
            <Image
              priority
              height={670}
              width={520}
              src="/images/image33.png"
              alt="Building"
              className="mb-6 z-[-100] p-0 h-[290px] w-[674px] border-2 border-black"
            />
          </div>
          <div className="absolute top-72 left-0 ">
            <div className="">
              <Badge
                className="py-4 px-2 rounded-md text-2xl absolute top-24 left-48 text-center"
                variant="secondary"
              >
                <Link href={"/category/Architecture"}>
                Architecture
                </Link>
              </Badge>
            </div>
            <Image
              priority
              height={670}
              width={520}
              src="/images/image33.png"
              alt="Building"
              className="mb-6 z-[-100] p-0  h-[264px] w-[674px] border-4 border-black"
            />
          </div>
          <div className="absolute bottom-0 left-0">
            <div className="">
              <Badge
                className="py-4 px-2 rounded-md text-2xl absolute top-48 left-48 text-center"
                variant="secondary"
              >
                <Link href={"/category/Education"}>
                Education
                </Link>
              </Badge>
            </div>
            <Image
              priority
              height={670}
              width={520}
              src="/images/image44.png"
              alt="Building"
              className="z-[-100] p-0 h-[400px] w-[836px]  border-4 border-black"
            />
          </div>
          <div className="absolute bottom-0 right-0 ">
            <div className="">
              <Badge
                className="py-4 px-2 rounded-md text-2xl absolute top-48 right-48 text-center"
                variant="secondary"
              >
                <Link href={"/category/Residential"}>
                Residential
                </Link>
              </Badge>
            </div>
            <Image
              priority
              height={670}
              width={600}
              src="/images/image55.png"
              alt="Building"
              className="z-[-100] p-0 h-[400px] w-[796px] border-4 border-black"
            />
          </div>
        </div>
        <div className="relative bg-gray-200 mb-12 pb-96 pt-192 w-screen h-screen">
        <div className="absolute top-0 right-0 ">
            <div className="">
              <Badge
                className="py-4 px-2 rounded-md text-2xl absolute top-48 right-48 text-center"
                variant="secondary"
              >
                <Link href={"/category/Commercial"}>
                Commercial
                </Link>
              </Badge>
            </div>
            <Image
              priority
              height={670}
              width={800}
              src="/images/image22.png"
              alt="Building"
              className="mb-6 z-[-100] p-0 h-[536px] w-[960px] border-4 border-black"
            />
          </div>
          <div className="absolute top-0 left-0 ">
            <div className="">
              <Badge
                className="py-4 px-2 rounded-md text-2xl absolute top-24 left-48 text-center"
                variant="secondary"
              >
                <Link href={"/"}>
                BIM DESIGNING
                </Link>

              </Badge>
            </div>
            <Image
              priority
              height={670}
              width={520}
              src="/images/image33.png"
              alt="Building"
              className="mb-6 z-[-100] p-0 h-[290px] w-[674px] border-2 border-black"
            />
          </div>
          <div className="absolute  top-72 left-0">
            <div className="">
              <Badge
                className="py-4 px-2 rounded-md text-2xl absolute top-24 left-48 text-center"
                variant="secondary"
              >
                <Link href={"/"}>
                BIM DESIGNING
                </Link>
              </Badge>
            </div>
            <Image
              priority
              height={670}
              width={520}
              src="/images/image33.png"
              alt="Building"
              className="mb-6 z-[-100] p-0 h-[264px] w-[674px] border-4 border-black"
            />
          </div>
          <div className="absolute bottom-0 left-0">
            <div className="">
              <Badge
                className="py-4 px-2 rounded-md text-2xl absolute top-48 left-48 text-center"
                variant="secondary"
              >
                <Link href={"/"}>
                BIM DESIGNING
                </Link>
              </Badge>
            </div>
            <Image
              priority
              height={670}
              width={520}
              src="/images/image44.png"
              alt="Building"
              className="z-[-100] p-0 h-[400px] w-[836px]  border-4 border-black"
            />
          </div>
          <div className="absolute bottom-0 right-0 ">
            <div className="">
              <Badge
                className="py-4 px-2 rounded-md text-2xl absolute top-48 right-48 text-center"
                variant="secondary"
              >
                <Link href={"/"}>
                BIM DESIGNING
                </Link>
              </Badge>
            </div>
            <Image
              priority
              height={670}
              width={600}
              src="/images/image55.png"
              alt="Building"
              className="z-[-100] p-0 h-[400px] w-[796px] border-4 border-black"
            />
          </div>
        </div>
        </div>
    // <div>
    //   <div className="grid grid-rows-2 w-screen h-screen mb-96 ">
    //     {/*section 1*/}
    //     <section className="grid grid-cols-2">
    //       {/* (1)division 1*/}
    //       <div className="grid grid-rows-2 relative">
    //         <div className="">
    //           <Image
    //             src="/images/image22.png"
    //             alt="image"
    //             width={1024}
    //             height={1024}
    //             className="h-1/2 w-full absolute top-0 left-0"
    //           />
    //         </div>
    //         <div className="">
    //           <Image
    //             src="/images/image22.png"
    //             alt="image"
    //             width={1024}
    //             height={1024}
    //             className="h-1/2 w-full top-56 "
    //           />
    //         </div>
    //       </div>
    //       {/* (1)division 2*/}
    //       <div className="">
    //         <Image
    //           src="/images/image22.png"
    //           alt="image"
    //           width={1024}
    //           height={1024}
    //           className=""
    //         />
    //       </div>
    //     </section>

    //     {/*section 2*/}

    //     <section className="grid grid-cols-2">
    //       {/* (2)division 1*/}
    //       <div className="">
    //         <Image
    //           src="/images/image22.png"
    //           alt="image"
    //           width={1024}
    //           height={1024}
    //           className=""
    //         />
    //       </div>
    //       {/* (2)division 1*/}
    //       <div className="">
    //         <Image
    //           src="/images/image22.png"
    //           alt="image"
    //           width={1024}
    //           height={1024}
    //           className=""
    //         />
    //       </div>
    //     </section>
    //   </div>
    //   <div className="w-768 h-768">
    //     <div className="">
    //       <Image
    //         src="/images/image22.png"
    //         alt="image"
    //         width={1024}
    //         height={1024}
    //         className=" w-96 h-96"
    //       />
    //     </div>
    //     <div className="">
    //       <Image
    //         src="/images/image22.png"
    //         alt="image"
    //         width={1024}
    //         height={1024}
    //         className="w-96 h-96"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
