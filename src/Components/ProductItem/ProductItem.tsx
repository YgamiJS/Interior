import { IProduct } from "@/types/types";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

interface IProps {
  product: IProduct;
  [x: string]: any;
}

export const ProductItem = ({ product, ...props }: IProps) => {
  return (
    <Link to={`/shop/${product.id}`} className={styles.productItem} {...props}>
      <img src={product.img} alt={product.title} />
      <p className={styles.title}>{product.title}</p>
      <Rating initialValue={product.rating} size={24} />
      <p className={styles.price + " small-text"}>
        {product.old && <span className={styles.line}>{product.old}</span>}
        &nbsp;
        {product.price}
      </p>
    </Link>
  );
};
