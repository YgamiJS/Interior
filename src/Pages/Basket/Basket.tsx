import React from "react";
import { useAppSelector } from "@/hooks/useRedux";
import { BasketForm, FavoriteProductsList } from "@/Components";
import "./Basket.scss";

export const Basket = () => {
  const favoriteProducts = useAppSelector(
    (state) => state.favoritesProducts.merchandises
  );

  return (
    <main className="main">
      <div className="Basket">
        <div className="Basket__container container">
          {favoriteProducts.length > 0 ? (
            <>
              <FavoriteProductsList favoriteProducts={favoriteProducts} />
              <BasketForm />
            </>
          ) : (
            <div className="empty">
              <h1 className="meduim-text">No products yet</h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
