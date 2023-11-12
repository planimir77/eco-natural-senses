import ProductsGrid from "components/product/ProductsGrid/ProductsGrid";
import Container from "components/ui/Container";
import Link from "next/link";
import React from "react";
import { json } from "stream/consumers";
import { getCollectionProducts } from "utils/getCollectionProducts";
import { translateTag } from "utils/translateTag";

interface Props {
  params: { collectionName: string; page: string; query: string };
}

export default async function Page({ params }: Props) // }: {
//   params: { collectionName: string; page: string; query: QueryData };
// }
{
  const collectionName = params.collectionName;
  const page = params.page;

  // decodeQuery()
  // ${process.env.API_URL}/collection/dried-flowers/1/farbe-braun&price-descending
  const query: QueryData = decodeURIComponent(params.query) as QueryData;
  debugger;
  const collectionData = await getCollectionProducts({
    collectionName,
    page,
    query,
  });
  // const tags = collectionData.tags.map(tag => translateTag(tag))
  // console.log(JSON.stringify(tags))

  return (
    <>
      <h1>Collection: {collectionName}</h1>
      {/* <div>page: {page}</div>
      <div>query: {query}</div>
      <h1>
        page: {page} | from {collectionData.pages} | query: {query} | products:
        {collectionData.products?.length}
        {collectionData.products && collectionData.products.length}
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
      <div>
        {collectionData.products && (
          <ProductsGrid products={collectionData.products} />
        )}
      </div>
    </>
  );
}
