
interface Props {
    params: { id: string }
}

interface Blog {
    id: number;
    title: string;
    author: string;
    authorImage: string;
    category: string;
    content: string;
    createdAt: number
}

const getSingleBlog = async (id: string) => {
    const res = await fetch(`http://localhost:3000/api/blog/${id}`);
    const blog = await res.json()

    return blog;
}

export default async function SingleBlog({ params: { id } }: Props) {

    const blog: Blog[] = await getSingleBlog(id);

    return (
        <div className="mx-4 my-10">
            <h2 className="text-2xl font-bold text-indigo-700 p-3 ">{blog[0].title}</h2>
            <div>
                <img src={blog[0].authorImage} alt="authorProfile" className="w-12 h-12 object-cover rounded-full" />

                <div>
                    <h1>{blog[0].author}</h1>
                    {/* <span>{Date(blog[0].createdAt).}</span> */}
                </div>
            </div>
            <p className="text-gray-600 font-medium mt-10">{blog[0].content}</p>
        </div>
    )
}