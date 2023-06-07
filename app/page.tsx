// import NavBar from "@/components/NavBar";
// import { BASE_URL } from "@/lib/constents";
// import Image from "next/image";
// import Link from "next/link";

// export const dynamic = "force-dynamic";

// interface Blog {
//   id: number;
//   title: string;
//   author: string;
//   authorImage: string;
//   category: string;
//   content: string;
//   createdAt: number;
// }

// export default async function Home() {
//   const data: Blog[] = await fetch(`${BASE_URL}/api/blog`).then((res) =>
//     res.json()
//   );

//   return (
//     <div>
//       <NavBar />
//       <div className="max-w-7xl md:mx-auto mx-2">
//         <div className="grid md:grid-cols-3 gap-4 mx-5 md:mx-10 my-10">
//           {data.map((data: Blog) => {
//             return (
//               <div
//                 key={data.id}
//                 className="p-2 md:p-4 border-2 rounded-md hover:scale-105 hover:transition-all"
//               >
//                 <Link href={`/${data.id}`}>
//                   <h1 className="font-bold">{data.title}</h1>

//                   <div className="">
//                     {data.content.length > 100
//                       ? data.content.slice(0, 100)
//                       : data.content}{" "}
//                     <span className="text-gray-400">...</span>
//                   </div>

//                   <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start gap-2 lg:items-center mt-2">
//                     <span className="border border-indigo-400 bg-indigo-400 text-white font-bold uppercase p-1 rounded-md text-xs transition-all">
//                       {data.category}
//                     </span>

//                     <div className="flex justify-end gap-2 items-center">
//                       <Image
//                         src={data.authorImage}
//                         width={480}
//                         height={500}
//                         alt="authorImage"
//                         className="w-8 h-8 object-cover rounded-full"
//                       />
//                       <p className="font-semibold text-xs lg:text-sm capitalize">
//                         {data.author}
//                       </p>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
import { BASE_URL } from "@/lib/constents";

interface Blog {
  id: number;
  title: string;
  author: string;
  authorImage: string;
  category: string;
  content: string;
  createdAt: number;
}

export default async function Home() {
  const data: Blog[] = await fetch(`${BASE_URL}/api/blog`).then((res) =>
    res.json()
  );
  return (
    <div>
      {data.map((blog) => {
        return (
          <div key={blog.id}>
            <div>{blog.title}</div>
          </div>
        );
      })}
    </div>
  );
}
