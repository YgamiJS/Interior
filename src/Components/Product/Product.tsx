import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useParams } from "react-router";
import { addFavorite } from "@/store/FavoriteProductsSlice";
import { IProduct } from "@/types/types";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
import { SliderImagesProduct } from "@/Components/SliderImagesProduct/SliderImagesProduct";

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
      <div className={styles.product}>
        <div className={styles.product__container + " container"}>
          <SliderImagesProduct product={product} />
          <div className={styles.product__info}>
            <h1>{product.title}</h1>
            <Rating
              className={styles.info__rating}
              initialValue={product.rating}
              size={24}
            />
            <p className={styles.info__description}>{product.description}</p>
            <p className={styles.info__price}>
              {product.old && (
                <span className={styles.line}>{product.old}</span>
              )}
              &nbsp;
              {product.price}
            </p>
            {!bought ? (
              <button
                className={styles.info__button}
                onClick={() => addFavoriteProduct(product)}
              >
                Buy
              </button>
            ) : (
              <Link className={styles.info__button} to="/Basket/">
                Go to the Basket
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
