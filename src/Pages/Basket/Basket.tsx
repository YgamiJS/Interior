import { useMemo, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import {
  BoughtProductsList,
  BasketForm,
  FavoriteProductsList,
} from "@/Components/";
import { Popup } from "@/Components/Popup/Popup";
import { clearFavorite } from "@/store/FavoriteProductsSlice";
import { SubmitHandler } from "react-hook-form";
import { BasketFrom } from "@/types/types";
import { loadBoughtProducts } from "@/store/BoughtProductsSlice";
import { randomDate } from "@/utils/utils";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";
import "./Basket.scss";

export const Basket = () => {
  const favoriteProducts = useAppSelector(
    (state) => state.favoritesProducts.merchandises
  );
  const boughtProducts = useAppSelector(
    (state) => state.boughtProducts.boughtMerchandises
  );

  const navigate = useNavigate();

  const dispath = useAppDispatch();

  const [visible, setIsVisible] = useState(false);

  const auth = useAuth();

  const totalPrice = useMemo(
    () => favoriteProducts.reduce((prev, next) => prev + next.totalPrice, 0),
    [favoriteProducts]
  );

  const onSubmit: SubmitHandler<BasketFrom> = (data) => {
    if (auth.isAuth) {
      setIsVisible(true);
      dispath(
        loadBoughtProducts(
          favoriteProducts.map((product) => {
            return {
              ...product,
              date: randomDate(new Date(), new Date()).getDate(),
            };
          })
        )
      );
      dispath(clearFavorite());
    } else {
      navigate("/Interior/login");
    }
  };

  if (visible) {
    return (
      <Popup visible={visible} setIsVisible={setIsVisible}>
        <div>Bought</div>
      </Popup>
    );
  }

  return (
    <div className="Basket">
      <div className="Basket__container container">
        {(favoriteProducts.length || boughtProducts.length) > 0 ? (
          <>
            {favoriteProducts.length > 0 && (
              <>
                <FavoriteProductsList favoriteProducts={favoriteProducts} />
                <BasketForm totalPrice={totalPrice} onSubmit={onSubmit} />
              </>
            )}
            {boughtProducts.length && (
              <BoughtProductsList boughtProducts={boughtProducts} />
            )}
          </>
        ) : (
          <div className="empty">
            <h1 className="meduim-text">No products yet</h1>
          </div>
        )}
      </div>
    </div>
  );
};
