import { useEffect } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import ProductForm from "../../../components/ProductForm";

export default function editProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!id) return;
    axios.get("/api/products/?id=" + id).then((res) => {
      setProductInfo(res.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1>Edit Product</h1>
      {productInfo && <ProductForm {...productInfo} />}
    </Layout>
  );
}
