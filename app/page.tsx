import { BASE_URL } from "@/lib/constents";

export const dynamic = "force-dynamic";

interface Blog {
  id: number;
  title: string;
  author: string;
  authorImage: string;
  category: string;
  content: string;
  createdAt: string;
}

export default async function Home() {
  const res = await fetch(`${BASE_URL}/api/blog`, {
    next: {
      revalidate: 440,
    },
  });
  const data: Blog[] = await res.json();

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
