import ProductView from "components/product/ProductView/ProductView";
import React from "react";
import { getProduct } from "utils/getProduct";

interface Props {
  params: { page: string };
}

export default async function Product({ params: { page } }: Props) {
  const productData: Promise<Product> = getProduct(page);
  
  const product = await Promise.resolve(productData);

  return (
    <>
      <ProductView product={product} key={product.id}></ProductView>
    </>
  );
}
