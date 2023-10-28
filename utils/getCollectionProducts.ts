export const getCollectionProducts = async (queryData: CollectionQueryData) => {
  const collectionData: Promise<CollectionData> =
    apiGetCollectionProducts(queryData);
  const collection = await Promise.resolve(collectionData);

  return collection;
};

const apiGetCollectionProducts = async (queryData: CollectionQueryData) => {
  const [tag, sortQuery] = queryData.query // farbe-braun&price-descending
    ? queryData.query.split("&")
    : ["", ""];
  const [sortBy, sortingOrder] = sortQuery // price-descending
    ? sortQuery.split("-")
    : ["", ""];
  //const url = `http://localhost:3000/api/collection/${collectionName}?page=${page}&query=${query}&products_on_page=${products_on_page}`;
  const url = `http://localhost:3000/api/collection/${queryData.collectionName}?page=${queryData.page}&tag=${tag}&sort_by=${sortBy}&sorting_order=${sortingOrder}&products_on_page=${queryData.products_on_page}`;

  const response = await fetch(url, { next: { revalidate: 10 } });

  if (!response) return null;
  console.log(`http://localhost:3000/api/collection/${queryData.collectionName}`);
  const data = await response.json();

  return data;
};
