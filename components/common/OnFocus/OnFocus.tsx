import ProductCard from "components/product/ProductCard/ProductCard";
import React from "react";


interface Props {
  onFocusProducts?: Product[];
}

export default function OnFocus({onFocusProducts: products}: Props) {
  return (
    <>
      {products && products.map((data) => (
            <ProductCard key={data.id} product={data}></ProductCard>
          )
      )}
      {!products && <div>No Products</div>}
    </>
  );
}
