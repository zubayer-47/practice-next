import { BASE_URL } from "@/lib/constents";
import Image from "next/image";

export const dynamic = "force-dynamic";

interface Props {
  params: { id: string };
}

interface Blog {
  id: number;
  title: string;
  author: string;
  authorImage: string;
  category: string;
  content: string;
  createdAt: number;
}

export default async function SingleBlog({ params: { id } }: Props) {
  const res = await fetch(`${BASE_URL}/api/blog/${id}`, {
    next: {
      revalidate: 440,
    },
  });
  const blog: Blog[] = await res.json();

  return (
    <div className="mx-4 my-10">
      <h2 className="text-3xl font-bold text-indigo-800 py-3 ">
        {blog[0].title}
      </h2>
      <div className="flex gap-3">
        <Image
          src={blog[0].authorImage}
          width={460}
          height={500}
          alt="authorProfile"
          className="w-12 h-12 object-cover rounded-full"
        />

        <div>
          <h1 className="capitalize font-bold text-indigo-900">
            {blog[0].author}
          </h1>
          <span>{new Date(blog[0].createdAt).toDateString()}</span>
        </div>
      </div>
      <p className="text-gray-600 font-medium mt-10 text-lg">
        {blog[0].content}
      </p>
    </div>
  );
}
