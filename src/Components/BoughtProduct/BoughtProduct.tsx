import { IBoughtProduct } from "@/types/types";
import styles from "./BoughtProduct.module.scss";

interface IProps {
  product: IBoughtProduct;
  [x: string]: any;
}

export const BoughtProduct = ({ product }: IProps) => {
  return (
    <div className={styles.favoriteProduct} id={product.id}>
      <img src={product.img} alt={product.title} />
      <p className={styles.favoriteProduct__totalPrice}>{product.totalPrice}</p>
      <p className={styles.title}>{product.title}</p>
      <p>{product.count}</p>
      <p>Will come in {product.date} date</p>
    </div>
  );
};
