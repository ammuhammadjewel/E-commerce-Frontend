import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductDetails from "../components/ProductDetails";
import Header from "../components/header";
import Footer from "../components/footer";

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <div>
        <ProductDetails productId={id} />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
