import Nav from "@/components/Nav";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-black w-screen h-screen items-center flex">
        <div className="text-center w-full">
          <button
            className="py-2 px-4 rounded bg-white"
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black w-screen h-screen text-white flex">
      <Nav />
      <div className="flex-grow bg-white text-black mt-4 ml-4 rounded-lg mb-2">
        {children}
      </div>
    </div>
  );
}
