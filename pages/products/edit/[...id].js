import { useEffect } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from "next/router";
import axios from "axios";

export default function editProductPage() {
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (!id) return;
    axios.get("/api/products/?id=" + id).then((res) => {
      console.log(res.data);
    });
  }, [id]);

  return <Layout>edit page goes here</Layout>;
}
