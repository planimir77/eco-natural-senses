import cn from "clsx";
import Link from "next/link";
import s from "./CollectionPreview.module.css";
import React from "react";
import Chevron from "../Chevron/Chevron";
import { toCapitalCase } from "utils/stringToCapitalCase";
import ProductsGrid from "components/product/ProductsGrid/ProductsGrid";
import { getProducts } from "utils/getProducts";

interface Props {
  collection: Collection;
}

async function CollectionPreview({ collection }: Props) {
  const products = await getProducts(collection.productsHandle);
  return (
    <div className="py-6 w-full lg:max-w-5xl md:mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_150px] mb-1">
        <h1 className={cn(s.heading)}>
          {collection.name !== "new products" ? "Collection " : ""}{" "}
          {toCapitalCase(collection.name)}
        </h1>
        <span className="hidden sm:block text-sm text-slate-600 leading-8">
          <Link className="inline-flex" href={collection.link}>
            See more
            <Chevron className="h-[11px] -rotate-90 translate-x-[10px] translate-y-[11px]" />
          </Link>
        </span>
      </div>
      <hr />
      <span className="block sm:hidden text-sm text-slate-600 leading-8">
        <Link className="inline-flex" href={collection.link + "?page=1"}>
          See more
          <Chevron className="h-[11px] -rotate-90 translate-x-[10px] translate-y-[11px]" />
        </Link>
      </span>
      {products && <ProductsGrid products={products} />}
    </div>
  );
}

export default CollectionPreview as unknown as (props: Props) => JSX.Element;
