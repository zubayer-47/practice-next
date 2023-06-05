import NavBar from "@/components/NavBar";

// export func
interface blogs {
  id: number;
  title: string;
  author: string;
  category: string;
  content: string;
}

export const fetchBlogPost = async () => {
  const response = await fetch("http://localhost:3001/api/blog");
  const data = await response.json();
  return data;
};

export default async function Home() {
  const data = await fetchBlogPost();

  return (
    <main className="">
      <NavBar />
      <div>
        {data.map((data: any) => {
          return (
            <div key={data.id} className="p-4">
              <div className="font-semibold ">{data.title}</div>
              <div className="font-bold">{data.author}</div>
              <div>{data.categroy}</div>
              <div className="px-2">{data.content}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
