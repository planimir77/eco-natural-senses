import { getProduct } from "./getProduct";

export const getProducts = async (productsHandle:string[]) => {
    const products: Product[] = [];

    for (let index = 0; index < productsHandle.length; index++) {
        const product = await getProduct(productsHandle[index]) ;
        products.push(product);
    }

    return products;
}