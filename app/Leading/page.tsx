"use client"; // Mark this component as a Client Component

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Leading() {
//   const { data: session, status } = useSession();
//   const isLoading = status === "loading"; // Check if session is being fetched

//   if (isLoading) {
//     return (
//       <main className="flex min-h-screen flex-col items-center justify-center p-24">
//         <div className="text-center">
//           <p className="text-2xl">Loading...</p>
//         </div>
//       </main>
//     );
//   }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Welcome to Our App</h1>

      {/* {session ? (
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <p className="text-2xl mb-4 text-gray-700">Hello, {session.user?.name}!</p>
          <p className="mb-6 text-gray-600">You're logged in.</p>
          <div className="space-y-4">
            <Link
              href="/dashboard"
              className="block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Go to Dashboard
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="block w-full px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4 bg-white p-8 rounded-lg shadow-lg">
          <button
            onClick={() => signIn("credentials", { callbackUrl: "/dashboard" })}
            className="block w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <Link
            href="/signup"
            className="block w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 text-center"
          >
            Sign Up
          </Link>
        </div>
      )} */}
    </main>
  );
}