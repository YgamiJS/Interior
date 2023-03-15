import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import "./Product.scss";
import { useParams } from "react-router";
import { addFavorite } from "@/store/FavoriteProductsSlice";
import { IProduct } from "@/types/types";
import { Rating } from "react-simple-star-rating";
import { Slider } from "@/Components";
import { Link } from "react-router-dom";

export const Product = () => {
  const products = useAppSelector((state) => state.products.merchandises);
  const favorite = useAppSelector(
    (state) => state.favoritesProducts.merchandises
  );
  const dispath = useAppDispatch();

  const { id } = useParams();

  const [bought, setBought] = useState<boolean>(
    favorite.some((favoriteProd) => favoriteProd.id === id)
  );

  const addFavoriteProduct = (product: IProduct) => {
    dispath(
      addFavorite({
        ...product,
        count: 1,
        totalPrice: product.price,
      })
    );
    setBought(true);
  };

  const product = products.find((product) => product.id === id)!;

  return (
    <main className="main">
      <div className="product">
        <div className="product__container container">
          <img
            src={product.img}
            alt={product.title}
            className="product__image"
          />
          <div className="product__info">
            <h1>{product.title}</h1>
            <Rating
              className="info__rating"
              initialValue={product.rating}
              size={24}
            />
            <p className="info__description">{product.description}</p>
            <p className="info__price">
              {product.old && <span className="line">{product.old}</span>}
              &nbsp;
              {product.price}
            </p>
            {!bought ? (
              <button
                className="info__button"
                onClick={() => addFavoriteProduct(product)}
              >
                Buy
              </button>
            ) : (
              <Link className="info__button" to="/Basket/">
                Go to the Basket
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
