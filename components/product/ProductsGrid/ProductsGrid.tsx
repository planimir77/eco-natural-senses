import React from "react";
import cn from "clsx";
import Link from "next/link";
import Image from "next/image";
import s from "./ProductsGrid.module.css";
import Price from "components/ui/Price/Price";

interface Props {
  products: Product[];
  
}
async function ProductsGrid({ products }: Props) {
  return (
    <div className={cn(s.product_grid)}>
      {products && products.map((product) => (
        <div key={product.id} className="px-4">
          <div className={cn(s.product_grid_item)}>
            <Link href={`/product/${product.handle}`}>
              <div className="product-grid-image">
                <div className="product-grid-image--centered">
                  <div className="relative">
                    <div
                      className={cn(
                        `${
                          product.available ? "opacity-0" : "opacity-100"
                        } absolute top-[44%] w-full text-center`
                      )}
                    >
                      <span className="p-2 text-emerald-50 bg-slate-600 uppercase">
                        Sold Out
                      </span>
                    </div>
                    <Image
                      className="mx-auto image-spinner"
                      src={product.media[0].src[0]=='h' ? product.media[0].src : 'https:'+ product.media[0].src}
                      alt={product.media[0].alt || product.variants[0].name}
                      width={250}
                      height={250 / 1.77}
                      loading="lazy"
                    />
                  </div>
                  <noscript>
                    <Image
                      className="image-spinner"
                      src={product.media[0].src[0]=='h' ? product.media[0].src : 'https:'+ product.media[0].src}
                      alt={product.media[0].alt || product.variants[0].name}
                      width={250}
                      height={250 / 1.77}
                    />
                  </noscript>
                </div>
              </div>
              <div className={cn(s.description)}>
                <p className="mt-3 mb-5 text-sm">{product.variants[0].name}</p>
                <Price
                  price={product.variants[0].price}
                  fontSize={cn(s.font_size)}
                  currencyTop={cn(s.currency_top)}
                ></Price>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid as unknown as (props: Props) => JSX.Element;
