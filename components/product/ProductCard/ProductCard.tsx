import cn from "clsx";
import Link from "next/link";
import Image from "next/image";
import React, { FC, Suspense, useState } from "react";
import s from "./ProductCard.module.css";
import cartIcon from "@public/images/cart.svg";
import Price from "../../ui/Price/Price";

interface Props {
  title?: string;
  product: Product;
}

const ProductCard: FC<Props> = ({ product, title }) => {

  return (
    <div className={cn(s.root, "animated fadeIn")}>
      {title && (
        <div className=" grid grid-cols-[1fr_150px] mb-1">
          <h1 className={cn(s.heading)}>{title.toUpperCase()}</h1>
        </div>
      )}

      <div className={cn(s.card_item)}>
        <div className="card_image">
          <div className="">
            <div className="">
                <Image
                  src={`https:${product.media[0].src}`}
                  alt={product.variants[0].name}
                  className={cn(`w-[680px] h-[${
                    680 / product.media[0].aspect_ratio
                  }px] md:w-[300px] md:h-[${
                    300 / product.media[0].aspect_ratio
                  }px]`, 'image-spinner')}
                  width={680}
                  height={680 / product.media[0].aspect_ratio}
                  loading="lazy"
                />
            </div>
            <noscript>
              <Image
                src={`https:${product.media[0].src}`}
                alt={product.variants[0].name}
                className={cn(`w-[680px] h-[${
                  680 / product.media[0].aspect_ratio
                }px] md:w-[300px] md:h-[${
                  300 / product.media[0].aspect_ratio
                }px]`, 'image-spinner')}
                width={250}
                height={250 / 1.77}
              />
            </noscript>
          </div>
        </div>
        <div className={cn(s.card_info)}>
          <p className={cn(s.product_name)}>{product.variants[0].name}</p>
          <Price
            price={product.variants[0].price}
            fontSize={cn(s.font_size)}
            currencyTop={cn(s.currency_top)}
          ></Price>
          <div className="text-sm text-slate-600 mb-4">
            <a href="/policies/shipping-policy">Shipping costs</a> calculated at
            checkout.
          </div>
          <div className="flex pt-2">
            <button
              type="submit"
              role="button"
              title="Add product to the cart"
              className={cn(s.cart_add_button, "relative")}
            >
              <Suspense fallback={<span className="text-white">Cart</span>}>
                <Image priority={true} src={cartIcon} alt="card icon" />
              </Suspense>
              <span className={cn("not_visible")}>
                Button add the product to the cart
              </span>
              <span aria-hidden="true" className={cn(s.button_text)}>
                +
              </span>
            </button>
            <Link
              className="text-sm ml-16 pt-4"
              href={`products/${product.handle}`}
            >
              <span>
                <span className="-z-[1] opacity-0">Link to </span>Full details →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
