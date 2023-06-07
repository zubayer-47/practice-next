export const dynamic = "force-dynamic";

interface Blog {
  id: number;
  title: string;
}

export default async function Home() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`, {
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
