import ProductsGrid from "components/product/ProductsGrid/ProductsGrid";
import Container from "components/ui/Container";
import Link from "next/link";
import React from "react";
import { getCollectionProducts } from "utils/getCollectionProducts";
import { translateTag } from "utils/translateTag";

export default async function Page({
  params,
}: {
  params: { collectionName: string };
}) {
  const collection = await getCollectionProducts({
    collectionName: params.collectionName,
  });
  const searchTags = collection.tags?.map((tag) => translateTag(tag));
  const sorted = searchTags?.sort((a: any, b: any) =>
    a?.tag > b?.tag ? 1 : a?.tag === b?.tag ? (a?.name > b?.name ? 1 : -1) : -1
  );
  const tags: string[] = [];
  if (sorted) {
    
    for (const obj of sorted) {
      if (obj && !tags.includes(obj.tag)) {
        tags.push(obj.tag);
      }
    }
    //console.log(JSON.stringify(sorted));
  }

  return (
    <Container>
      <h1>Collection: {params.collectionName}</h1>
      {/* <h1>
        products: {collection.products && collection.products.length} | pages{" "}
        {collection.pages}
      </h1>
      <div>
          <label>Shop by:</label>
          { collection.tags && collection.tags.map((tag)=> (
            <div key={tag}>
              <Link href={`/collection/${collection.collection}/${tag.toLowerCase().replace(' ','-').replace('.','-')}`}>{translateTag(tag)?.name}</Link>
            </div>
          ))}
        
      </div> */}
      <div>
        {collection.products && <ProductsGrid products={collection.products} />}
      </div>
    </Container>
  );
}
