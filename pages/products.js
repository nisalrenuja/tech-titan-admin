import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <div className="mt-6">
        <Link
          href={`products/new`}
          className="bg-black text-white py-4 px-4 rounded-md ml-4"
        >
          Add New Product
        </Link>
      </div>
    </Layout>
  );
}
