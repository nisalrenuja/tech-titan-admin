import ProductForm from "../../components/ProductForm";
import Layout from "../../components/Layout";

export default function NewProductPage() {
  return (
    <Layout>
      <h1>Add New Product</h1>
      <ProductForm />
    </Layout>
  );
}
