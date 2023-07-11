import cn from "clsx";
import s from "./userCartBtn.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import cartIcon from "@public/images/cart.svg";

type Props = {
  className: string;
};

const UserCartBtn: React.FC<Props> = ({ className }) => {
  const [itemsCount, setItemsCount] = useState(0);
  return (
    <Link href="/cart" className={cn(s.cart, className, "text-sm")}>
      <Image
        className={cn(className)}
        priority
        src={cartIcon}
        alt="card icon"
      />
      <span className="hidden sm:block">Cart</span>

      {itemsCount >= 0 && (
        <span
          className="absolute -top-[10px] left-[65%] w-5 h-5 font-bold 
                       text-[12px] leading-[20px] text-center bg-emerald-950 
                       bg-opacity-80  rounded-[0.6rem]"
        >
          {itemsCount}
        </span>
      )}
    </Link>
  );
};
export default UserCartBtn;
