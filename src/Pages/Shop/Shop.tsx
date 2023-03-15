import React from "react";
import { useAppSelector } from "@/hooks/useRedux";
import { Control, Slider } from "@/Components";
import input from "@/assets/images/input.png";
import "./Shop.scss";

export const Shop = () => {
  const products = useAppSelector((state) => state.products.merchandises);
  return (
    <main className="main">
      <div className="shop">
        <Control placeholder="Search plant" text={<img src={input} alt="" />} />
        {products.length > 0 ? (
          <>
            <Slider products={products} />
            <Slider products={products} />
            <Slider products={products} />
          </>
        ) : (
          <div className="empty">
            <h1 className="meduim-text">No products yet</h1>
          </div>
        )}
      </div>
    </main>
  );
};
