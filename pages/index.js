import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="ml-4 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}!</b>
        </h2>
        <div className="flex gap-1 bg-gray-300 rounded-l-full">
          <img
            src={session?.user?.image}
            className="w-6 h-6 rounded-full"
          ></img>
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
