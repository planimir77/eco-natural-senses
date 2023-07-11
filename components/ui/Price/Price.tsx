import cn from "clsx";
import React, { FC } from 'react'
import s from "./Price.module.css";

interface Props {
    price: number;
    fontSize: string;
    currencyTop: string;
  }

const Price: FC<Props> = ({price, fontSize, currencyTop}) => {
  return (
    <div className={cn(s.product_price, fontSize)}>
            <span className="relative">
              <span className={cn('not_visible')}>
                {new Intl.NumberFormat("en-DE", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(price / 100)}
              </span>
              <span
                aria-hidden="true"
                className={cn(s.currency_sign, currencyTop)}
              >
                €
              </span>
              <span aria-hidden="true" className={cn("")}>
                {Intl.NumberFormat("de", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(price / 100)}
              </span>
              <br />

              <span className="text-sm font-thin block">
                <span className={cn('not_visible')}>Without VAT</span>
                <span aria-hidden="true">(VAT excluded)</span>
              </span>
            </span>
          </div>
  )
}

export default Price