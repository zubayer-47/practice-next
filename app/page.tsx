// import NavBar from "@/components/NavBar";

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
  const data: Blog[] = await fetch(
    `practice-next-flame.vercel.app/api/blog`
  ).then((res) => res.json());
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
