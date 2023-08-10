import { useEffect } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

export default function deleteProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/products?id=" + id).then((response) => {
      setProductInfo(response.data);
    });
  }, [id]);
  function goBack() {
    router.push("/products");
  }
  async function deleteProduct() {
    await axios.delete("/api/products?id=" + id);
    goBack();
  }
  return (
    <Layout>
      <div className="ml-8 mt-4 gap-2">
        <h1 className="text-center">
          Are you sure you want to delete &nbsp;'{productInfo?.title}'?
        </h1>
        <div className="text-center">
          <button className="btn-primary" onClick={deleteProduct}>
            Yes
          </button>
          <button className="btn-primary" onClick={goBack}>
            No
          </button>
        </div>
      </div>
    </Layout>
  );
}
