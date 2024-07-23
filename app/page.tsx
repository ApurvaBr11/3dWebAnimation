import Link from "next/link";
import Links from "../app/(components)/data";

export default function Home() {
  return (
   <div className="h-screen px-20 flex items-center justify-center w-screen">
     <div className="flex justify-center flex-wrap gap-4 ">
      {Links.map((e: any) => (
        <div className="relative my-1">
          <Link
          key={e.id}
          href={e.linkname}
          className="border-gray-600 border rounded-full px-5 py-2 font-bold">
          {e.displayname}
          <div className="absolute text-[10px] font-semibold rounded-full  px-3  bg-purple-300 text-neutral-800 -top-3 right-3">
            {
              e.isRecommended ? "Must !" : ""
            }
          </div>
        </Link>
        </div>
      ))}
    </div>
   </div>
  );
}
