// import NavBar from "@/components/NavBar";
export const dynamic = "force-static";

interface Todo {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data: Todo[] = await res.json();
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
