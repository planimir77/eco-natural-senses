import cn from "clsx";
import Link from "next/link";
import Image from "next/image";
import Price from "components/ui/Price/Price";
import React, { Suspense } from "react";
import s from "./ProductView.module.css";
import Container from "components/ui/Container/Container";
import ProductCard from "../ProductCard/ProductCard";
import cartIcon from "@public/images/cart.svg";
import parse from "html-react-parser";
import { headers } from "next/headers";

interface ProductViewProps {
  product: Product;
  relatedProducts?: Product[];
}

export const ProductView = ({ product, relatedProducts }: ProductViewProps) => {
  const headersList = headers();
  const updatedDescription = product.description
    .replaceAll(/Si Nature/gi, "Eco-Natural Senses")
    .replaceAll(/si-nature/gi, headersList.get("host") || "eco-natural-senses");

  const gridCols = () => `grid-cols-${product.media.length} `;

  return (
    <>
      <Container>
        <div className="p-[5%]">
          <nav className={cn(s.navigation)} role="navigation" aria-label="">
            <Link href="/" title="Back to the home page">
              Home
            </Link>
            <span className="text-slate-600 text-lg pt-2" aria-hidden="true">
              ›
            </span>
            <Link href="/collection/earth-matters" title="">
              Earth Matters - Ohchi Nursery
            </Link>
            <span className="text-slate-600 text-lg pt-2" aria-hidden="true">
              ›
            </span>
            <span className="px-2 pt-4 inline-block w-64 lg:w-auto whitespace-nowrap text-ellipsis overflow-hidden relative top-[5px]">
              {product.variants[0].name}
            </span>
          </nav>
          <div className="md:grid grid-rows-2 md:grid-rows-[none] md:grid-cols-[40%,60%] md:gap-16">
            <div className="grid grid-rows-[fit-content(100px),fit-content(100px)] md:grid-rows-[fit-content(100px),fit-content(100px)] gap-8 md:gap-10 mb-10">
              <div className="product-photo-container">
                <Image
                  src={product.media[0].src}
                  alt={product.variants[0].name}
                  className={cn(`w-[100%] h-[${
                    680 / product.media[0].aspect_ratio
                  }px] md:w-[100%] md:h-[${
                    300 / product.media[0].aspect_ratio
                  }px]`, 'image-spinner')}
                  width={680}
                  height={680 / product.media[0].aspect_ratio}
                  loading="lazy"
                />
              </div>
              <ul className={cn("grid gap-6 sm:gap-8", gridCols())}>
                {product.media.map((img) => (
                  <li key={img.id} className="mx-auto">
                    <Image
                      className="image-spinner"
                      src={img.src}
                      alt={img.alt}
                      width={img.width / 16}
                      height={img.height / 16}
                      loading="lazy"
                    />
                  </li>
                ))}
                {/* <li className="">
                  <Image
                    src={product.media[0].src}
                    alt={product.variants[0].name}
                    width={160}
                    height={160 / product.media[0].aspect_ratio}
                    placeholder="blur"
                    blurDataURL={`${product.media[0].src}`}
                    loading="lazy"
                  />
                </li>
                <li className="">
                  <Image
                    src={product.media[1].src}
                    alt={product.variants[0].name}
                    
                    width={160}
                    height={160 / product.media[1].aspect_ratio}
                    placeholder="blur"
                    blurDataURL={`${product.media[1].src}`}
                    loading="lazy"
                  />
                </li>
                <li className="">
                  <Image
                    src={product.media[2].src}
                    alt={product.variants[0].name}
                    width={160}
                    height={160 / product.media[2].aspect_ratio}
                    placeholder="blur"
                    blurDataURL={`${product.media[2].src}`}
                    loading="lazy"
                  />
                </li>
                <li className="">
                  <Image
                    src={product.media[0].src}
                    alt={product.variants[0].name}
                    width={160}
                    height={160 / product.media[0].aspect_ratio}
                    placeholder="blur"
                    blurDataURL={product.media[0].src}
                    loading="lazy"
                  />
                </li> */}
              </ul>
            </div>

            <div className="">
              <h1 className={cn(s.product_name)}>{product.variants[0].name}</h1>
              <div>
                <Price
                  price={product.variants[0].price}
                  fontSize={cn(s.font_size)}
                  currencyTop={cn(s.currency_top)}
                ></Price>
                <div className="text-sm text-slate-600 my-4">
                  <a href="/policies/shipping-policy">Shipping costs</a>{" "}
                  calculated at checkout.
                </div>
                <form
                  method="post"
                  action="/cart/add"
                  accept-charset="UTF-8"
                  className="py-4 mb-4"
                >
                  <label
                    htmlFor="quantity"
                    className="block text-sm text-slate-800 mb-1"
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value="1"
                    min="1"
                    className="bg-slate-100 pl-3 pt-3 pb-2 mb-4"
                  />
                  <div className="payment-buttons payment-buttons--medium">
                    <button
                      type="submit"
                      role="button"
                      title="Add product to the cart"
                      className={cn(s.cart_add_button, "relative")}
                    >
                      <Suspense
                        fallback={<span className="text-white">Cart</span>}
                      >
                        <Image priority={true} src={cartIcon} alt="card icon" />
                      </Suspense>
                      <span className={cn("not_visible")}>
                        Button add the product to the cart
                      </span>
                      <span aria-hidden="true" className={cn(s.button_text)}>
                        +
                      </span>
                    </button>
                  </div>
                </form>

                <div className="text-sm pb-16">
                  <h4 className="px-4 py-1">DISCOUNT QUANTITY</h4>
                  <table className={cn(s.discount_table)}>
                    <thead>
                      <tr>
                        <th>Quantity</th>
                        <th> Price </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>5+</td>
                        <td>
                          <Price
                            price={product.variants[0].price * 0.9}
                            fontSize={cn("text-sm")}
                            currencyTop={cn("top-0")}
                          ></Price>
                        </td>
                      </tr>
                      <tr>
                        <td>30+</td>
                        <td>
                          <Price
                            price={product.variants[0].price * 0.8}
                            fontSize={cn("text-sm")}
                            currencyTop={cn("top-0")}
                          ></Price>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={cn(s.product_description)}>
                {parse(updatedDescription)}
              </div>
            </div>
          </div>
          <hr className="mt-7 border-accent-2" />
          {relatedProducts && (
            <>
              <section className="py-12 px-6 mb-10">
                <h1>Related Products</h1>
                <div className={s.relatedProductsGrid}>
                  {relatedProducts.map((p) => (
                    <div key={p.id}>
                      <ProductCard product={p} key={p.id}></ProductCard>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default ProductView;
