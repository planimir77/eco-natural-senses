import ProductsGrid from "components/product/ProductsGrid/ProductsGrid";
import Link from "next/link";
import React from "react";
import { getCollectionProducts } from "utils/getCollectionProducts";

export default async function Page({
  params,
}: {
  params: { collectionName: string; page: string };
}) {
  const collectionName = params.collectionName;
  const page = decodeURIComponent(params.page).split("=")[1];

  const collectionData = await getCollectionProducts({
    collectionName,
    page,
  });

  return (
    <div>
       <h1>Collection: {params.collectionName}</h1>
      {/*<h1>
        page: {page} | from {collectionData.pages} | products:{" "}
        {collectionData.products && <div>collection.products.length</div>}
      </h1>
      <div>TAGS:</div>
      <div>
        {collectionData.tags &&
          collectionData.tags.map((tag) => (
            <Link
              key={tag}
              href={`/collection/${collectionData.collection}/${tag.toLowerCase().replace(' ','-')}`}
            >
              {tag}
            </Link>
          ))}
      </div> */}
      {collectionData.products && (
        <ProductsGrid products={collectionData.products} />
      )}
    </div>
  );
}
