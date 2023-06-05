import Link from "next/link";

export default function NavBar() {
  return (
    <div className="py-2 px-8  flex justify-between bg-indigo-500 text-white">
      <div className="flex gap-x-5 items-center">
        <Link href="/"> Home</Link>
        <Link href="/" className="">
          Team
        </Link>
      </div>
      <div>
        <button className="px-4 py-1.5 border-2 border-gray-100 rounded-xl hover:bg-indigo-700 hover:border-indigo-500">
          New
        </button>
      </div>
    </div>
  );
}
