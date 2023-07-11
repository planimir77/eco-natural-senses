export const getCollectionProducts = async (
  collectionName: string,
  page?: string,
  query?: string,
  products_on_page?: string
) => {
    const collectionData: Promise<CollectionData> = apiGetCollectionProducts(
        collectionName,
        page,
        query
      );
      const collection = await Promise.resolve(collectionData);

  return collection;
};

const apiGetCollectionProducts = async (
    collectionName: string,
    page?: string,
    query?: string,
    products_on_page?: string,
  ) => {
    const url = `http://localhost:3000/api/collection/${collectionName}?page=${page}&query=${query}&products_on_page=${products_on_page}`;
  
    const response = await fetch(url, { next: { revalidate: 10 } });
  
    if (!response) return null;
    console.log(`http://localhost:3000/api/collection/${collectionName}`);
    const data = await response.json();
  
    return data;
  };
