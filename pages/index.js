import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-800 to-red-600 text-white">
      <h1 className="text-4xl font-bold mb-6">João Paulo!</h1>

      <Image
        src="/foto.jpeg"
        width={150}
        height={150}
        alt="foto"
        className="rounded-full shadow-xl border-4 border-white hover:scale-105 transition-transform duration-300"
      />

      <p className="mt-6 text-lg max-w-md text-center">
        Clique no bootão abaixo para ver a lista de posts.
      </p>

      <Link
        href="/posts"
        className="mt-8 bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-200 transition inline-block"
      >
        Ver Posts
      </Link>

      {/* Ícone GitHub */}
      <a
        href="https://github.com/joaopaulo37-del"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-3xl hover:text-gray-300 transition"
      >
        <FaGithub />
      </a>
    </div>
  );
}
