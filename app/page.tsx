import NavBar from "@/components/NavBar";
import Link from "next/link";

<<<<<<< HEAD
interface blogs {
=======
// export func
interface Blog {
>>>>>>> 6ed58e17bf37cc2ee65293a50ebb9e7ba881d617
  id: number;
  title: string;
  author: string;
  authorImage: string;
  category: string;
  content: string;
  createdAt: number
}

const fetchBlogPost = async () => {
  const response = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 60 } });
  const data = await response.json();
  return data;
};

export default async function Home() {
  const data = await fetchBlogPost();

  return (
    <>
      <NavBar />
      <main className="max-w-7xl md:mx-auto mx-2">
        <div className="grid md:grid-cols-3 gap-4 mx-5 md:mx-10 my-10">
          {data.map((data: Blog) => (
            <div key={data.id} className="p-2 md:p-4 border-2 rounded-md hover:scale-105 hover:transition-all">
              <Link href={`/blog/${data.id}`} className="font-bold">{data.title}</Link>
              <div className="">{data.content.length > 100 ? data.content.slice(0, 100) : data.content} <span className="text-gray-400">...</span></div>

              <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start gap-2 lg:items-center mt-2">
                <span className="border border-indigo-400 bg-indigo-400 text-white font-bold uppercase p-1 rounded-md text-xs transition-all">{data.category}</span>

                <div className="flex justify-end gap-2 items-center">
                  <img src={data.authorImage} alt="authorImage" className="w-8 h-8 object-cover rounded-full" />
                  <p className="font-semibold text-xs lg:text-sm capitalize">{data.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
