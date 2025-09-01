import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts: posts.slice(0, 10), // só os 10 primeiros
    },
  };
}

export default function Posts({ posts }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
          📑 Lista de Posts
        </h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="font-bold text-xl text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600">{post.body}</p>
            </li>
          ))}
        </ul>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-500 transition"
          >
            ⬅ Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}
