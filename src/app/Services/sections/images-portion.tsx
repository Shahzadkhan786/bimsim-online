import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export function ImagesPortion() {
  return (
    <div>
    <div className="relative bg-white w-screen h-screen">
      <div className="absolute top-0 right-0 ">
        <div className="">
          <Badge
            className="py-4 px-2 rounded-md text-2xl absolute top-48 right-48 text-center"
            variant="secondary"
          >
            <Link href={"/Services/BIM"}>
            BIM DESIGNING
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
            <Link href={"/Services/BIM"}>
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
      <div className="absolute top-72 left-0 ">
        <div className="">
          <Badge
            className="py-4 px-2 rounded-md text-2xl absolute top-24 left-48 text-center"
            variant="secondary"
          >
            <Link href={"/Services/Architecture"}>
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
            <Link href={"/Services/Autocad"}>
            Autocad
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
    <div className="relative bg-gray-200 mb-12 pb-96 pt-192 w-screen h-screen">
    <div className="absolute top-0 right-0 ">
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
  );
}
