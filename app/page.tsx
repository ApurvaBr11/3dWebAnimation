import Link from "next/link";
import Links from "../app/(components)/data";

export default function Home() {
  return (
   <div className="h-screen px-20 flex items-center justify-center w-screen">
     <div className="flex justify-center flex-wrap gap-3 ">
      {Links.map((e: any) => (
        <Link
          key={e.id}
          href={e.linkname}
          className="border-gray-600 border rounded-full px-5 py-1 font-bold">
          {e.displayname}
        </Link>
      ))}
    </div>
   </div>
  );
}
