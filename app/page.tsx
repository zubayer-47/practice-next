// import NavBar from "@/components/NavBar";
export const dynamic = "force-dynamic";

interface Todo {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

export default async function Home() {
  const data: Todo[] = await fetch(
    "https://jsonplaceholder.typicode.com/todos/",
    {
      next: { revalidate: 440 },
    }
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
