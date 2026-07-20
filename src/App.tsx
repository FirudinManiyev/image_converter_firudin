import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-indigo-500 to-pink-500 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white/90 p-8 text-center shadow-2xl ring-1 ring-white/25 backdrop-blur-lg">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Tailwind v4 İşləyir! 🚀
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Bu sadə komponent TypeScript və yeni Tailwind v4 sinifləri ilə qurulub.
        </p>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            onClick={() => setCount((c) => c - 1)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-xl font-bold text-white shadow-lg transition duration-200 hover:bg-gray-900 active:scale-95"
          >
            -
          </button>
          
          <span className="text-4xl font-extrabold text-indigo-600">
            {count}
          </span>
          
          <button
            onClick={() => setCount((c) => c + 1)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white shadow-lg transition duration-200 hover:bg-indigo-700 active:scale-95"
          >
            +
          </button>
        </div>

        {count === 10 && (
          <div className="mt-6 animate-bounce rounded-lg bg-green-100 p-3 text-sm font-medium text-green-800">
            🎉 Onluğa çatdınız! Əla işdir.
          </div>
        )}
      </div>
    </div>
  );
}