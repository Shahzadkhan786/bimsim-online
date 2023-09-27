import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Cportion() {
  return (
    <div className="py-8 px-8">
      <h1 className="text-5xl font-bold text-center">Contact</h1>
      <p className="text-xl text-center pt-2">
        We’d love to discuss your upcoming project!
      </p>
      <Link
        href="/Contact"
        className=" flex justify-center pt-2 py-0 px-0 place-items-center"
      >
        <Button className="bg-black text-white text-xl px-6 py-3 place-items-center">
          GET IN TOUCH
        </Button>
      </Link>
    </div>
  );
}
