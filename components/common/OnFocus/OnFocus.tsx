import cn from "clsx";
import s from "./OnFocus.module.css";
import ProductCard from "components/product/ProductCard/ProductCard";
import React from "react";

interface Props {
  onFocusProducts?: Product[];
}

export default function OnFocus({ onFocusProducts: products }: Props) {
  return (
    <>
      <h1 className={cn(s.heading)}>On Focus</h1>
      <hr />
      {products &&
        products.map((data) => (
          <ProductCard key={data.id} product={data}></ProductCard>
        ))}
      {!products && <div>No Products</div>}
    </>
  );
}
